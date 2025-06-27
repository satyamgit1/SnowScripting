import { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../services/auth';
import { auth } from '../lib/firebase';
import { 
  updateProfile,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../lib/firebase';
import { useRouter } from 'next/router';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    newPassword: '',
    currentPassword: ''
  });
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
    password: false
  });
  const [crop, setCrop] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [src, setSrc] = useState(null);
  const [showCropModal, setShowCropModal] = useState(false);

  // Generate a color based on user's email for default avatar
  const getAvatarColor = (email) => {
    if (!email) return 'bg-gray-500';
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 
      'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'
    ];
    const hash = email.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || '',
        email: user.email || '',
        newPassword: '',
        currentPassword: ''
      });
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      setError('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => setSrc(reader.result));
    reader.readAsDataURL(file);
    setShowCropModal(true);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
  });

  const handleImageUpload = async () => {
    if (!completedCrop || !imgRef.current || !src) return;

    setLoading(true);
    setError('');
    setSuccess('');
    setUploadProgress(0);

    try {
      // Create canvas for cropped image
      const canvas = document.createElement('canvas');
      const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        imgRef.current,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );

      // Convert canvas to blob
      const blob = await new Promise(resolve => {
        canvas.toBlob(file => resolve(file), 'image/jpeg', 0.9);
      });

      // Compress image
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 800,
        useWebWorker: true
      };
      const compressedFile = await imageCompression(blob, options);

      // Upload to Firebase Storage
      const storageRef = ref(storage, `profile-pictures/${user.uid}`);
      const snapshot = await uploadBytes(storageRef, compressedFile);
      setUploadProgress(100);
      
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      // Update user profile
      await updateProfile(auth.currentUser, {
        photoURL: downloadURL
      });
      
      setPhotoURL(downloadURL);
      setSuccess('Profile picture updated successfully');
      setShowCropModal(false);
      setSrc(null);
      setCrop(null);
      setCompletedCrop(null);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const handleRemovePicture = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (user.photoURL) {
        // Delete from storage
        const storageRef = ref(storage, `profile-pictures/${user.uid}`);
        await deleteObject(storageRef);
      }

      // Update user profile
      await updateProfile(auth.currentUser, {
        photoURL: null
      });
      
      setPhotoURL('');
      setSuccess('Profile picture removed successfully');
    } catch (err) {
      setError('Failed to remove picture. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (field) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (field === 'name') {
        await updateProfile(auth.currentUser, {
          displayName: formData.displayName,
          photoURL: photoURL || null
        });
        setSuccess('Profile updated successfully');
      } else if (field === 'email') {
        const credential = EmailAuthProvider.credential(
          user.email,
          formData.currentPassword
        );
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updateEmail(auth.currentUser, formData.email);
        setSuccess('Email updated successfully');
      } else if (field === 'password') {
        const credential = EmailAuthProvider.credential(
          user.email,
          formData.currentPassword
        );
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updatePassword(auth.currentUser, formData.newPassword);
        setSuccess('Password updated successfully');
        setFormData(prev => ({ ...prev, newPassword: '', currentPassword: '' }));
      }

      setEditMode(prev => ({ ...prev, [field]: false }));
    } catch (err) {
      setError(getErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case 'auth/requires-recent-login':
        return 'Please reauthenticate to update sensitive information';
      case 'auth/wrong-password':
        return 'Incorrect current password';
      case 'auth/email-already-in-use':
        return 'Email already in use';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters';
      default:
        return 'Update failed. Please try again.';
    }
  };

  if (!user) {
    router.push('/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Crop Modal */}
      {showCropModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-100">Crop Your Image</h2>
            {src && (
              <ReactCrop
                crop={crop}
                onChange={c => setCrop(c)}
                onComplete={c => setCompletedCrop(c)}
                aspect={1}
                circularCrop
              >
                <img
                  ref={imgRef}
                  src={src}
                  alt="Crop preview"
                  className="max-h-[70vh]"
                />
              </ReactCrop>
            )}
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => {
                  setShowCropModal(false);
                  setSrc(null);
                }}
                className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleImageUpload}
                disabled={!completedCrop || loading}
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50"
              >
                {loading ? 'Uploading...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto bg-gray-800/80 rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-700">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-100">Your Profile</h1>
            <button 
              onClick={() => router.push('/dashboard')}
              className="text-gray-300 hover:text-gray-100"
            >
              Back to Dashboard
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900 text-red-100 rounded-md text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-emerald-900 text-emerald-100 rounded-md text-sm">
              {success}
            </div>
          )}

          {/* Profile Picture Section */}
          <div className="flex flex-col items-center mb-8">
            <div 
              {...getRootProps()}
              className="relative group cursor-pointer"
            >
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                {photoURL ? (
                  <img 
                    src={photoURL} 
                    alt="Profile" 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className={`h-full w-full ${getAvatarColor(user.email)} flex items-center justify-center text-4xl text-white`}>
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input {...getInputProps()} />
            </div>
            
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                <div 
                  className="bg-emerald-600 h-2.5 rounded-full" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}

            {photoURL && (
              <button
                onClick={handleRemovePicture}
                disabled={loading}
                className="mt-2 text-sm text-red-400 hover:text-red-300 disabled:opacity-50"
              >
                Remove Picture
              </button>
            )}

            <p className="mt-2 text-sm text-gray-400">
              Click on the picture to change (max 5MB)
            </p>
          </div>

          {/* Display Name Section */}
          <div className="mb-6 pb-6 border-b border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-medium text-gray-300">Display Name</h2>
              {!editMode.name ? (
                <button 
                  onClick={() => setEditMode(prev => ({ ...prev, name: true }))}
                  className="text-sm text-emerald-400 hover:text-emerald-300"
                >
                  Edit
                </button>
              ) : (
                <button 
                  onClick={() => setEditMode(prev => ({ ...prev, name: false }))}
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  Cancel
                </button>
              )}
            </div>

            {!editMode.name ? (
              <p className="text-lg text-gray-100">{user.displayName || 'Not set'}</p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-100"
                />
                <button
                  onClick={() => handleSubmit('name')}
                  disabled={loading}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            )}
          </div>

          {/* Email Section */}
          <div className="mb-6 pb-6 border-b border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-medium text-gray-300">Email Address</h2>
              {!editMode.email ? (
                <button 
                  onClick={() => setEditMode(prev => ({ ...prev, email: true }))}
                  className="text-sm text-emerald-400 hover:text-emerald-300"
                >
                  Edit
                </button>
              ) : (
                <button 
                  onClick={() => setEditMode(prev => ({ ...prev, email: false }))}
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  Cancel
                </button>
              )}
            </div>

            {!editMode.email ? (
              <p className="text-lg text-gray-100">{user.email}</p>
            ) : (
              <div className="space-y-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-100"
                />
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Current password to confirm changes"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-100"
                />
                <button
                  onClick={() => handleSubmit('email')}
                  disabled={loading || !formData.currentPassword}
                  className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update Email'}
                </button>
              </div>
            )}
          </div>

          {/* Password Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-medium text-gray-300">Password</h2>
              {!editMode.password ? (
                <button 
                  onClick={() => setEditMode(prev => ({ ...prev, password: true }))}
                  className="text-sm text-emerald-400 hover:text-emerald-300"
                >
                  Change
                </button>
              ) : (
                <button 
                  onClick={() => setEditMode(prev => ({ ...prev, password: false }))}
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  Cancel
                </button>
              )}
            </div>

            {editMode.password && (
              <div className="space-y-3">
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Current password"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-100"
                />
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="New password (min 6 characters)"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-100"
                  minLength="6"
                />
                <button
                  onClick={() => handleSubmit('password')}
                  disabled={loading || !formData.currentPassword || !formData.newPassword || formData.newPassword.length < 6}
                  className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}