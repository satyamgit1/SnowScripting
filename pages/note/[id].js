import { useRouter } from 'next/router';
import { useAuth } from '../../services/auth';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useState, useEffect } from 'react';
import NoteEditor from '../../components/Notes/NoteEditor';
import Link from 'next/link';
import Modal from '../../components/Modal';  // Assuming you have a Modal component

export default function NoteDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  // Fetch note when user is logged in and id is available
  useEffect(() => {
    if (!user || !id) return;

    const fetchNote = async () => {
      const docRef = doc(db, 'users', user.uid, 'notes', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNote({ id: docSnap.id, ...docSnap.data() });
      } else {
        router.push('/dashboard'); // Redirect if note doesn't exist
      }
      setLoading(false);
    };

    fetchNote();
  }, [user, id, router]);

  // Handle note deletion
  const handleDelete = async (noteId) => {
    setDeleting(true);
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'notes', noteId));
      router.push('/dashboard'); // Redirect to dashboard after deletion
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Failed to delete script. Please try again.');
    } finally {
      setDeleting(false);
      setShowDeleteModal(false);  // Close the modal after deletion
    }
  };

  // Loading or user is not available
  if (loading || !user) {
    return <div className="p-4">Loading...</div>;
  }

  // If the note doesn't exist
  if (!note) {
    return <div className="p-4">Script not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold"></h1>
        <div className="flex space-x-2">
          <Link 
            href="/dashboard"
            className="px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
          >
            Cancel
          </Link>
          <button
            onClick={() => {
              setNoteToDelete(note.id);
              setShowDeleteModal(true);  // Show the delete confirmation modal
            }}
            disabled={deleting}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
          >
            {deleting ? 'Deleting...' : 'Delete Script'}
          </button>
        </div>
      </div>
      
      {/* Note editor with update functionality */}
      <NoteEditor 
        initialData={note} 
        onSave={async (updatedData) => {
          try {
            await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
              ...updatedData,
              updatedAt: new Date() // Ensure the updated date is set
            });
          } catch (error) {
            console.error('Error updating note:', error);
          }
        }}
      />

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => handleDelete(noteToDelete)}
          title="Delete Script"
          message="Are you sure you want to delete this script? This action cannot be undone."
        />
      )}
    </div>
  );
}
