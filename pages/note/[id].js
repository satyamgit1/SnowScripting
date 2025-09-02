// import { useRouter } from 'next/router';
// import { useAuth } from '../../services/auth';
// import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import { useState, useEffect } from 'react';
// import NoteEditor from '../../components/Notes/NoteEditor';
// import Link from 'next/link';
// import Modal from '../../components/Modal';  // Assuming you have a Modal component

// export default function NoteDetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);

//   // Fetch note when user is logged in and id is available
//   useEffect(() => {
//     if (!user || !id) return;

//     const fetchNote = async () => {
//       const docRef = doc(db, 'users', user.uid, 'notes', id);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         setNote({ id: docSnap.id, ...docSnap.data() });
//       } else {
//         router.push('/dashboard'); // Redirect if note doesn't exist
//       }
//       setLoading(false);
//     };

//     fetchNote();
//   }, [user, id, router]);

//   // Handle note deletion
//   const handleDelete = async (noteId) => {
//     setDeleting(true);
//     try {
//       await deleteDoc(doc(db, 'users', user.uid, 'notes', noteId));
//       router.push('/dashboard'); // Redirect to dashboard after deletion
//     } catch (error) {
//       console.error('Error deleting note:', error);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeleting(false);
//       setShowDeleteModal(false);  // Close the modal after deletion
//     }
//   };

//   // Loading or user is not available
//   if (loading || !user) {
//     return <div className="p-4">Loading..</div>;
//   }

//   // If the note doesn't exist
//   if (!note) {
//     return <div className="p-4">Script not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold"></h1>
//         <div className="flex space-x-2">
//           <Link 
//             href="/dashboard"
//             className="px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
//           >
//             Cancel
//           </Link>
//           <button
//             onClick={() => {
//               setNoteToDelete(note.id);
//               setShowDeleteModal(true);  // Show the delete confirmation modal
//             }}
//             disabled={deleting}
//             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
//           >
//             {deleting ? 'Deleting...' : 'Delete Script'}
//           </button>
//         </div>
//       </div>
      
//       {/* Note editor with update functionality */}
//       <NoteEditor 
//         initialData={note} 
//         onSave={async (updatedData) => {
//           try {
//             await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//               ...updatedData,
//               updatedAt: new Date() // Ensure the updated date is set
//             });
//           } catch (error) {
//             console.error('Error updating note:', error);
//           }
//         }}
//       />

//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => handleDelete(noteToDelete)}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//         />
//       )}
//     </div>
//   );
// }











// import { useRouter } from 'next/router';
// import { useAuth } from '../../services/auth';
// import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import { useState, useEffect } from 'react';
// import NoteEditor from '../../components/Notes/NoteEditor';
// import Link from 'next/link';
// import Modal from '../../components/Modal';  // Assuming you have a Modal component
// import { motion } from 'framer-motion';

// export default function NoteDetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);
  
//   // Fetch note when user is logged in and id is available
//   useEffect(() => {
//     if (!user || !id) return;
//     const fetchNote = async () => {
//       const docRef = doc(db, 'users', user.uid, 'notes', id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setNote({ id: docSnap.id, ...docSnap.data() });
//       } else {
//         router.push('/dashboard'); // Redirect if note doesn't exist
//       }
//       setLoading(false);
//     };
//     fetchNote();
//   }, [user, id, router]);
  
//   // Handle note deletion
//   const handleDelete = async (noteId) => {
//     setDeleting(true);
//     try {
//       await deleteDoc(doc(db, 'users', user.uid, 'notes', noteId));
//       router.push('/dashboard'); // Redirect to dashboard after deletion
//     } catch (error) {
//       console.error('Error deleting note:', error);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeleting(false);
//       setShowDeleteModal(false);  // Close the modal after deletion
//     }
//   };
  
//   // Loading or user is not available
//   if (loading || !user) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="relative w-16 h-16"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-green-500"></div>
//           </motion.div>
          
//           <motion.div
//             className="mt-4 flex space-x-1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {[0, 1, 2].map((index) => (
//               <motion.div
//                 key={index}
//                 className="w-2 h-2 bg-green-500 rounded-full"
//                 animate={{
//                   y: [0, -10, 0],
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                 }}
//               />
//             ))}
//           </motion.div>
          
//           <motion.p
//             className="mt-4 text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Loading script...
//           </motion.p>
//         </motion.div>
//       </div>
//     );
//   }
  
//   // If the note doesn't exist
//   if (!note) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="text-center p-8 bg-gray-800 rounded-xl max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="mx-auto w-16 h-16 flex items-center justify-center bg-red-900/30 rounded-full mb-4"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </motion.div>
//           <h2 className="text-xl font-bold text-white mb-2">Script Not Found</h2>
//           <p className="text-gray-400 mb-6">The script you're looking for doesn't exist or you don't have permission to view it.</p>
//           <Link
//             href="/dashboard"
//             className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all"
//           >
//             Back to Dashboard
//           </Link>
//         </motion.div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <motion.div
//         className="flex justify-between items-center mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
//           Edit Script
//         </h1>
//         <div className="flex space-x-2">
//           <Link 
//             href="/dashboard"
//             className="px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
//           >
//             Cancel
//           </Link>
//           <motion.button
//             onClick={() => {
//               setNoteToDelete(note.id);
//               setShowDeleteModal(true);  // Show the delete confirmation modal
//             }}
//             disabled={deleting}
//             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 relative overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {deleting ? (
//               <span className="flex items-center">
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Deleting...
//               </span>
//             ) : (
//               <span className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                 </svg>
//                 Delete Script
//               </span>
//             )}
//           </motion.button>
//         </div>
//       </motion.div>
      
//       {/* Note editor with update functionality */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <NoteEditor 
//           initialData={note} 
//           onSave={async (updatedData) => {
//             try {
//               await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//                 ...updatedData,
//                 updatedAt: new Date() // Ensure the updated date is set
//               });
//             } catch (error) {
//               console.error('Error updating note:', error);
//             }
//           }}
//         />
//       </motion.div>
      
//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => handleDelete(noteToDelete)}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//         />
//       )}
//     </div>
//   );
// }







// import { useRouter } from 'next/router';
// import { useAuth } from '../../services/auth';
// import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import { useState, useEffect } from 'react';
// import NoteEditor from '../../components/Notes/NoteEditor';
// import Link from 'next/link';
// import Modal from '../../components/Modal';  // Assuming you have a Modal component
// import { motion } from 'framer-motion';
// import { ShareIcon, XIcon, SaveIcon, CheckIcon } from '@heroicons/react/outline';

// export default function NoteDetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [updating, setUpdating] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);
//   const [editorData, setEditorData] = useState(null);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
  
//   // Fetch note when user is logged in and id is available
//   useEffect(() => {
//     if (!user || !id) return;
//     const fetchNote = async () => {
//       const docRef = doc(db, 'users', user.uid, 'notes', id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setNote({ id: docSnap.id, ...docSnap.data() });
//         setEditorData({ id: docSnap.id, ...docSnap.data() });
//       } else {
//         router.push('/dashboard'); // Redirect if note doesn't exist
//       }
//       setLoading(false);
//     };
//     fetchNote();
//   }, [user, id, router]);
  
//   // Handle note deletion
//   const handleDelete = async (noteId) => {
//     setDeleting(true);
//     try {
//       await deleteDoc(doc(db, 'users', user.uid, 'notes', noteId));
//       router.push('/dashboard'); // Redirect to dashboard after deletion
//     } catch (error) {
//       console.error('Error deleting note:', error);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeleting(false);
//       setShowDeleteModal(false);  // Close the modal after deletion
//     }
//   };
  
//   // Handle note update
//   const handleUpdate = async () => {
//     if (!editorData) return;
    
//     setUpdating(true);
//     try {
//       await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//         ...editorData,
//         updatedAt: new Date() // Ensure the updated date is set
//       });
      
//       // Show success feedback
//       setUpdateSuccess(true);
      
//       // Reset success state after 2 seconds
//       setTimeout(() => {
//         setUpdateSuccess(false);
//       }, 2000);
//     } catch (error) {
//       console.error('Error updating note:', error);
//       alert('Failed to update script. Please try again.');
//     } finally {
//       setUpdating(false);
//     }
//   };
  
//   // Handle share via email
//   const handleShareViaEmail = () => {
//     if (!editorData) return;
    
//     const subject = `ServiceNow Script: ${editorData.title}`;
//     const body = `Here's the ServiceNow script you requested:
// Script Title: ${editorData.title}
// Script Type: ${editorData.scriptType?.replace(/_/g, " ").toUpperCase() || ""}
// ${editorData.scriptSubType
//   ? `Script Sub-Type: ${editorData.scriptSubType
//       .replace(/_/g, " ")
//       .toUpperCase()}\n`
//   : ""
// }
// ${editorData.project ? `Project: ${editorData.project}` : ""}
// Script Content:
// ${editorData.content}
// ---
// Sent from ServiceNow Script Manager`;
//     const mailtoUrl = `mailto:?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoUrl;
//   };
  
//   // Loading or user is not available
//   if (loading || !user) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="relative w-16 h-16"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-green-500"></div>
//           </motion.div>
          
//           <motion.div
//             className="mt-4 flex space-x-1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {[0, 1, 2].map((index) => (
//               <motion.div
//                 key={index}
//                 className="w-2 h-2 bg-green-500 rounded-full"
//                 animate={{
//                   y: [0, -10, 0],
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                 }}
//               />
//             ))}
//           </motion.div>
          
//           <motion.p
//             className="mt-4 text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Loading script...
//           </motion.p>
//         </motion.div>
//       </div>
//     );
//   }
  
//   // If the note doesn't exist
//   if (!note) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="text-center p-8 bg-gray-800 rounded-xl max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="mx-auto w-16 h-16 flex items-center justify-center bg-red-900/30 rounded-full mb-4"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </motion.div>
//           <h2 className="text-xl font-bold text-white mb-2">Script Not Found</h2>
//           <p className="text-gray-400 mb-6">The script you're looking for doesn't exist or you don't have permission to view it.</p>
//           <Link
//             href="/dashboard"
//             className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all"
//           >
//             Back to Dashboard
//           </Link>
//         </motion.div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Top Action Bar */}
//       <motion.div
//         className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-xl shadow-lg"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
//           Edit Script
//         </h1>
        
//         <div className="flex space-x-3">
//           {/* Cancel Button */}
//           <Link 
//             href="/dashboard"
//             className="flex items-center px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
//           >
//             <XIcon className="h-5 w-5 mr-1" />
//             Cancel
//           </Link>
          
//           {/* Share via Email Button */}
//           <motion.button
//             onClick={handleShareViaEmail}
//             className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ShareIcon className="h-5 w-5 mr-1" />
//             Share via Email
//           </motion.button>
          
//           {/* Update Script Button */}
//           <motion.button
//             id="update-button"
//             onClick={handleUpdate}
//             disabled={updating}
//             className={`flex items-center px-4 py-2 rounded-md transition-all ${
//               updateSuccess 
//                 ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
//                 : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
//             } disabled:opacity-50`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {updating ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Updating...
//               </>
//             ) : updateSuccess ? (
//               <>
//                 <CheckIcon className="h-5 w-5 mr-1" />
//                 Saved!
//               </>
//             ) : (
//               <>
//                 <SaveIcon className="h-5 w-5 mr-1" />
//                 Update Script
//               </>
//             )}
//           </motion.button>
          
//           {/* Delete Button */}
//           <motion.button
//             onClick={() => {
//               setNoteToDelete(note.id);
//               setShowDeleteModal(true);
//             }}
//             disabled={deleting}
//             className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {deleting ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Deleting...
//               </>
//             ) : (
//               <>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                 </svg>
//                 Delete
//               </>
//             )}
//           </motion.button>
//         </div>
//       </motion.div>
      
//       {/* Note editor with update functionality */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <NoteEditor 
//           initialData={note} 
//           onDataChange={(data) => setEditorData(data)}
//           onSave={async (updatedData) => {
//             try {
//               await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//                 ...updatedData,
//                 updatedAt: new Date() // Ensure the updated date is set
//               });
//             } catch (error) {
//               console.error('Error updating note:', error);
//             }
//           }}
//           hideActionButtons={true}
//         />
//       </motion.div>
      
//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => handleDelete(noteToDelete)}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//         />
//       )}
//     </div>
//   );
// }







// import { useRouter } from 'next/router';
// import { useAuth } from '../../services/auth';
// import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import { useState, useEffect } from 'react';
// import NoteEditor from '../../components/Notes/NoteEditor';
// import Link from 'next/link';
// import Modal from '../../components/Modal';  // Assuming you have a Modal component
// import { motion } from 'framer-motion';
// import { ShareIcon, XIcon, SaveIcon, CheckIcon, DownloadIcon, ChevronDownIcon } from '@heroicons/react/outline';
// import { FiFileText, FiDatabase, FiCode } from 'react-icons/fi';
// import { AnimatePresence } from 'framer-motion';

// export default function NoteDetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [updating, setUpdating] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);
//   const [editorData, setEditorData] = useState(null);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
//   const [showExportMenu, setShowExportMenu] = useState(false);
  
//   // Fetch note when user is logged in and id is available
//   useEffect(() => {
//     if (!user || !id) return;
//     const fetchNote = async () => {
//       const docRef = doc(db, 'users', user.uid, 'notes', id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setNote({ id: docSnap.id, ...docSnap.data() });
//         setEditorData({ id: docSnap.id, ...docSnap.data() });
//       } else {
//         router.push('/dashboard'); // Redirect if note doesn't exist
//       }
//       setLoading(false);
//     };
//     fetchNote();
//   }, [user, id, router]);
  
//   // Handle note deletion
//   const handleDelete = async (noteId) => {
//     setDeleting(true);
//     try {
//       await deleteDoc(doc(db, 'users', user.uid, 'notes', noteId));
//       router.push('/dashboard'); // Redirect to dashboard after deletion
//     } catch (error) {
//       console.error('Error deleting note:', error);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeleting(false);
//       setShowDeleteModal(false);  // Close the modal after deletion
//     }
//   };
  
//   // Handle note update
//   const handleUpdate = async () => {
//     if (!editorData) return;
    
//     setUpdating(true);
//     try {
//       await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//         ...editorData,
//         updatedAt: new Date() // Ensure the updated date is set
//       });
      
//       // Show success feedback
//       setUpdateSuccess(true);
      
//       // Reset success state after 2 seconds
//       setTimeout(() => {
//         setUpdateSuccess(false);
//       }, 2000);
//     } catch (error) {
//       console.error('Error updating note:', error);
//       alert('Failed to update script. Please try again.');
//     } finally {
//       setUpdating(false);
//     }
//   };
  
//   // Handle export
//   const handleDownload = (format = "txt") => {
//     if (!editorData || !editorData.content) return;
//     let content, extension;
//     switch (format) {
//       case "json":
//         content = JSON.stringify(
//           {
//             title: editorData.title,
//             content: editorData.content,
//             type: editorData.scriptType,
//             subType: editorData.scriptSubType,
//             project: editorData.project,
//             tags: editorData.tags,
//             created: new Date().toISOString(),
//           },
//           null,
//           2
//         );
//         extension = "json";
//         break;
//       case "xml":
//         content = `<?xml version="1.0" encoding="UTF-8"?>
// <servicenow-script>
// <metadata>
// <title>${editorData.title}</title>
// <type>${editorData.scriptType}</type>
// ${editorData.scriptSubType ? `<subtype>${editorData.scriptSubType}</subtype>` : ""}
// <project>${editorData.project}</project>
// <created>${new Date().toISOString()}</created>
// </metadata>
// <content><![CDATA[${editorData.content}]]></content>
// </servicenow-script>`;
//         extension = "xml";
//         break;
//       default: // txt
//         content = editorData.content;
//         extension = "txt";
//     }
//     const blob = new Blob([content], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${editorData.title.replace(/[^\w]/g, "_")}_${
//       editorData.scriptType
//     }.${extension}`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };
  
//   // Handle share via email
//   const handleShareViaEmail = () => {
//     if (!editorData) return;
    
//     const subject = `ServiceNow Script: ${editorData.title}`;
//     const body = `Here's the ServiceNow script you requested:
// Script Title: ${editorData.title}
// Script Type: ${editorData.scriptType?.replace(/_/g, " ").toUpperCase() || ""}
// ${editorData.scriptSubType
//   ? `Script Sub-Type: ${editorData.scriptSubType
//       .replace(/_/g, " ")
//       .toUpperCase()}\n`
//   : ""
// }
// ${editorData.project ? `Project: ${editorData.project}` : ""}
// Script Content:
// ${editorData.content}
// ---
// Sent from ServiceNow Script Manager`;
//     const mailtoUrl = `mailto:?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoUrl;
//   };
  
//   // Loading or user is not available
//   if (loading || !user) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="relative w-16 h-16"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-green-500"></div>
//           </motion.div>
          
//           <motion.div
//             className="mt-4 flex space-x-1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {[0, 1, 2].map((index) => (
//               <motion.div
//                 key={index}
//                 className="w-2 h-2 bg-green-500 rounded-full"
//                 animate={{
//                   y: [0, -10, 0],
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                 }}
//               />
//             ))}
//           </motion.div>
          
//           <motion.p
//             className="mt-4 text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Loading script...
//           </motion.p>
//         </motion.div>
//       </div>
//     );
//   }
  
//   // If the note doesn't exist
//   if (!note) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="text-center p-8 bg-gray-800 rounded-xl max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="mx-auto w-16 h-16 flex items-center justify-center bg-red-900/30 rounded-full mb-4"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </motion.div>
//           <h2 className="text-xl font-bold text-white mb-2">Script Not Found</h2>
//           <p className="text-gray-400 mb-6">The script you're looking for doesn't exist or you don't have permission to view it.</p>
//           <Link
//             href="/dashboard"
//             className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all"
//           >
//             Back to Dashboard
//           </Link>
//         </motion.div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Top Action Bar */}
//       <motion.div
//         className="flex justify-between items-center mb-6 p-2 bg-gray-800 rounded-xl shadow-lg"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex space-x-3">
//           {/* Cancel Button */}
//           <Link 
//             href="/dashboard"
//             className="flex items-center px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
//           >
//             <XIcon className="h-5 w-5 mr-1" />
//             Cancel
//           </Link>
          
//           {/* Export Button */}
//           <div className="relative">
//             <motion.button
//               onClick={() => setShowExportMenu(!showExportMenu)}
//               className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <DownloadIcon className="h-5 w-5 mr-1" />
//               Export
//               <ChevronDownIcon className="h-4 w-4 ml-1" />
//             </motion.button>
            
//             <AnimatePresence>
//               {showExportMenu && (
//                 <motion.div
//                   className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl z-50 border border-emerald-900 overflow-hidden"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <div className="py-1">
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("txt");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiFileText className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">Text File</div>
//                         <div className="text-xs text-gray-400">.txt format</div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("json");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiDatabase className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">JSON File</div>
//                         <div className="text-xs text-gray-400">
//                           .json format
//                         </div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("xml");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiCode className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">XML File</div>
//                         <div className="text-xs text-gray-400">.xml format</div>
//                       </div>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
          
//           {/* Share via Email Button */}
//           <motion.button
//             onClick={handleShareViaEmail}
//             className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ShareIcon className="h-5 w-5 mr-1" />
//             Share via Email
//           </motion.button>
          
//           {/* Update Script Button */}
//           <motion.button
//             id="update-button"
//             onClick={handleUpdate}
//             disabled={updating}
//             className={`flex items-center px-4 py-2 rounded-md transition-all ${
//               updateSuccess 
//                 ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
//                 : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
//             } disabled:opacity-50`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {updating ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Updating...
//               </>
//             ) : updateSuccess ? (
//               <>
//                 <CheckIcon className="h-5 w-5 mr-1" />
//                 Saved!
//               </>
//             ) : (
//               <>
//                 <SaveIcon className="h-5 w-5 mr-1" />
//                 Update Script
//               </>
//             )}
//           </motion.button>
          
//           {/* Delete Button */}
//           <motion.button
//             onClick={() => {
//               setNoteToDelete(note.id);
//               setShowDeleteModal(true);
//             }}
//             disabled={deleting}
//             className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {deleting ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Deleting...
//               </>
//             ) : (
//               <>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                 </svg>
//                 Delete
//               </>
//             )}
//           </motion.button>
//         </div>
//       </motion.div>
      
//       {/* Note editor with update functionality */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <NoteEditor 
//           initialData={note} 
//           onDataChange={(data) => setEditorData(data)}
//           onSave={async (updatedData) => {
//             try {
//               await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//                 ...updatedData,
//                 updatedAt: new Date() // Ensure the updated date is set
//               });
//             } catch (error) {
//               console.error('Error updating note:', error);
//             }
//           }}
//           hideActionButtons={true}
//         />
//       </motion.div>
      
//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => handleDelete(noteToDelete)}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//         />
//       )}
//     </div>
//   );
// }




// import { useRouter } from 'next/router';
// import { useAuth } from '../../services/auth';
// import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import { useState, useEffect } from 'react';
// import NoteEditor from '../../components/Notes/NoteEditor';
// import Link from 'next/link';
// import Modal from '../../components/Modal';  // Assuming you have a Modal component
// import { motion } from 'framer-motion';
// import { ShareIcon, XIcon, SaveIcon, CheckIcon, DownloadIcon, ChevronDownIcon } from '@heroicons/react/outline';
// import { FiFileText, FiDatabase, FiCode } from 'react-icons/fi';
// import { AnimatePresence } from 'framer-motion';

// export default function NoteDetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [updating, setUpdating] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);
//   const [editorData, setEditorData] = useState(null);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
//   const [showExportMenu, setShowExportMenu] = useState(false);
  
//   // Fetch note when user is logged in and id is available
//   useEffect(() => {
//     if (!user || !id) return;
//     const fetchNote = async () => {
//       const docRef = doc(db, 'users', user.uid, 'notes', id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setNote({ id: docSnap.id, ...docSnap.data() });
//         setEditorData({ id: docSnap.id, ...docSnap.data() });
//       } else {
//         router.push('/dashboard'); // Redirect if note doesn't exist
//       }
//       setLoading(false);
//     };
//     fetchNote();
//   }, [user, id, router]);
  
//   // Handle note deletion
//   const handleDelete = async (noteId) => {
//     setDeleting(true);
//     try {
//       await deleteDoc(doc(db, 'users', user.uid, 'notes', noteId));
//       router.push('/dashboard'); // Redirect to dashboard after deletion
//     } catch (error) {
//       console.error('Error deleting note:', error);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeleting(false);
//       setShowDeleteModal(false);  // Close the modal after deletion
//     }
//   };
  
//   // Handle note update
//   const handleUpdate = async () => {
//     if (!editorData) return;
    
//     setUpdating(true);
//     try {
//       await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//         ...editorData,
//         updatedAt: new Date() // Ensure the updated date is set
//       });
      
//       // Show success feedback
//       setUpdateSuccess(true);
      
//       // Reset success state after 2 seconds
//       setTimeout(() => {
//         setUpdateSuccess(false);
//       }, 2000);
//     } catch (error) {
//       console.error('Error updating note:', error);
//       alert('Failed to update script. Please try again.');
//     } finally {
//       setUpdating(false);
//     }
//   };
  
//   // Handle export
//   const handleDownload = (format = "txt") => {
//     if (!editorData || !editorData.content) return;
//     let content, extension;
//     switch (format) {
//       case "json":
//         content = JSON.stringify(
//           {
//             title: editorData.title,
//             content: editorData.content,
//             type: editorData.scriptType,
//             subType: editorData.scriptSubType,
//             project: editorData.project,
//             tags: editorData.tags,
//             created: new Date().toISOString(),
//           },
//           null,
//           2
//         );
//         extension = "json";
//         break;
//       case "xml":
//         content = `<?xml version="1.0" encoding="UTF-8"?>
// <servicenow-script>
// <metadata>
// <title>${editorData.title}</title>
// <type>${editorData.scriptType}</type>
// ${editorData.scriptSubType ? `<subtype>${editorData.scriptSubType}</subtype>` : ""}
// <project>${editorData.project}</project>
// <created>${new Date().toISOString()}</created>
// </metadata>
// <content><![CDATA[${editorData.content}]]></content>
// </servicenow-script>`;
//         extension = "xml";
//         break;
//       default: // txt
//         content = editorData.content;
//         extension = "txt";
//     }
//     const blob = new Blob([content], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${editorData.title.replace(/[^\w]/g, "_")}_${
//       editorData.scriptType
//     }.${extension}`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };
  
//   // Handle share via email
//   const handleShareViaEmail = () => {
//     if (!editorData) return;
    
//     const subject = `ServiceNow Script: ${editorData.title}`;
//     const body = `Here's the ServiceNow script you requested:
// Script Title: ${editorData.title}
// Script Type: ${editorData.scriptType?.replace(/_/g, " ").toUpperCase() || ""}
// ${editorData.scriptSubType
//   ? `Script Sub-Type: ${editorData.scriptSubType
//       .replace(/_/g, " ")
//       .toUpperCase()}\n`
//   : ""}
// ${editorData.project ? `Project: ${editorData.project}` : ""}
// Script Content:
// ${editorData.content}
// ---
// Sent from ServiceNow Script Manager`;
//     const mailtoUrl = `mailto:?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoUrl;
//   };
  
//   // Loading or user is not available
//   if (loading || !user) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="relative w-16 h-16"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-green-500"></div>
//           </motion.div>
          
//           <motion.div
//             className="mt-4 flex space-x-1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {[0, 1, 2].map((index) => (
//               <motion.div
//                 key={index}
//                 className="w-2 h-2 bg-green-500 rounded-full"
//                 animate={{
//                   y: [0, -10, 0],
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                 }}
//               />
//             ))}
//           </motion.div>
          
//           <motion.p
//             className="mt-4 text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Loading script...
//           </motion.p>
//         </motion.div>
//       </div>
//     );
//   }
  
//   // If the note doesn't exist
//   if (!note) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="text-center p-8 bg-gray-800 rounded-xl max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="mx-auto w-16 h-16 flex items-center justify-center bg-red-900/30 rounded-full mb-4"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </motion.div>
//           <h2 className="text-xl font-bold text-white mb-2">Script Not Found</h2>
//           <p className="text-gray-400 mb-6">The script you're looking for doesn't exist or you don't have permission to view it.</p>
//           <Link
//             href="/dashboard"
//             className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all"
//           >
//             Back to Dashboard
//           </Link>
//         </motion.div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Top Action Bar */}
//       <motion.div
//         className="flex flex-col items-center mb-6 p-4 bg-gray-800 rounded-xl shadow-lg"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-4">
//           Modify you Content
//         </h1>
        
//         <div className="flex flex-wrap justify-center gap-3">
//           {/* Cancel Button */}
//           <Link 
//             href="/dashboard"
//             className="flex items-center px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
//           >
//             <XIcon className="h-5 w-5 mr-1" />
//              Back
//           </Link>
          
//           {/* Export Button */}
//           <div className="relative">
//             <motion.button
//               onClick={() => setShowExportMenu(!showExportMenu)}
//               className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <DownloadIcon className="h-5 w-5 mr-1" />
//               Export
//               <ChevronDownIcon className="h-4 w-4 ml-1" />
//             </motion.button>
            
//             <AnimatePresence>
//               {showExportMenu && (
//                 <motion.div
//                   className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl z-50 border border-emerald-900 overflow-hidden"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <div className="py-1">
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("txt");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiFileText className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">Text File</div>
//                         <div className="text-xs text-gray-400">.txt format</div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("json");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiDatabase className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">JSON File</div>
//                         <div className="text-xs text-gray-400">
//                           .json format
//                         </div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("xml");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiCode className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">XML File</div>
//                         <div className="text-xs text-gray-400">.xml format</div>
//                       </div>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
          
//           {/* Share via Email Button */}
//           <motion.button
//             onClick={handleShareViaEmail}
//             className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ShareIcon className="h-5 w-5 mr-1" />
//             Share via Email
//           </motion.button>
          
//           {/* Update Script Button */}
//           <motion.button
//             id="update-button"
//             onClick={handleUpdate}
//             disabled={updating}
//             className={`flex items-center px-4 py-2 rounded-md transition-all ${
//               updateSuccess 
//                 ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
//                 : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
//             } disabled:opacity-50`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {updating ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Updating...
//               </>
//             ) : updateSuccess ? (
//               <>
//                 <CheckIcon className="h-5 w-5 mr-1" />
//                 Saved!
//               </>
//             ) : (
//               <>
//                 <SaveIcon className="h-5 w-5 mr-1" />
//                 Update Script
//               </>
//             )}
//           </motion.button>
          
//           {/* Delete Button */}
//           <motion.button
//             onClick={() => {
//               setNoteToDelete(note.id);
//               setShowDeleteModal(true);
//             }}
//             disabled={deleting}
//             className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {deleting ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Deleting...
//               </>
//             ) : (
//               <>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                 </svg>
//                 Delete
//               </>
//             )}
//           </motion.button>
//         </div>
//       </motion.div>
      
//       {/* Note editor with update functionality */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <NoteEditor 
//           initialData={note} 
//           onDataChange={(data) => setEditorData(data)}
//           onSave={async (updatedData) => {
//             try {
//               await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//                 ...updatedData,
//                 updatedAt: new Date() // Ensure the updated date is set
//               });
//             } catch (error) {
//               console.error('Error updating note:', error);
//             }
//           }}
//           hideActionButtons={true}
//         />
//       </motion.div>
      
//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => handleDelete(noteToDelete)}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//         />
//       )}
//     </div>
//   );
// }




// import { useRouter } from 'next/router';
// import { useAuth } from '../../services/auth';
// import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import { useState, useEffect } from 'react';
// import NoteEditor from '../../components/Notes/NoteEditor';
// import Link from 'next/link';
// import Modal from '../../components/Modal';  // Assuming you have a Modal component
// import { motion } from 'framer-motion';
// import { ShareIcon, ArrowLeftIcon, SaveIcon, CheckIcon, DownloadIcon, ChevronDownIcon } from '@heroicons/react/outline';
// import { FiFileText, FiDatabase, FiCode } from 'react-icons/fi';
// import { AnimatePresence } from 'framer-motion';

// export default function NoteDetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [updating, setUpdating] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);
//   const [editorData, setEditorData] = useState(null);
//   const [updateSuccess, setUpdateSuccess] = useState(false);
//   const [showExportMenu, setShowExportMenu] = useState(false);
  
//   // Fetch note when user is logged in and id is available
//   useEffect(() => {
//     if (!user || !id) return;
//     const fetchNote = async () => {
//       const docRef = doc(db, 'users', user.uid, 'notes', id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setNote({ id: docSnap.id, ...docSnap.data() });
//         setEditorData({ id: docSnap.id, ...docSnap.data() });
//       } else {
//         router.push('/dashboard'); // Redirect if note doesn't exist
//       }
//       setLoading(false);
//     };
//     fetchNote();
//   }, [user, id, router]);
  
//   // Handle note deletion
//   const handleDelete = async (noteId) => {
//     setDeleting(true);
//     try {
//       await deleteDoc(doc(db, 'users', user.uid, 'notes', noteId));
//       router.push('/dashboard'); // Redirect to dashboard after deletion
//     } catch (error) {
//       console.error('Error deleting note:', error);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeleting(false);
//       setShowDeleteModal(false);  // Close the modal after deletion
//     }
//   };
  
//   // Handle note update
//   const handleUpdate = async () => {
//     if (!editorData) return;
    
//     setUpdating(true);
//     try {
//       await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//         ...editorData,
//         updatedAt: new Date() // Ensure the updated date is set
//       });
      
//       // Show success feedback
//       setUpdateSuccess(true);
      
//       // Reset success state after 2 seconds
//       setTimeout(() => {
//         setUpdateSuccess(false);
//       }, 2000);
//     } catch (error) {
//       console.error('Error updating note:', error);
//       alert('Failed to update script. Please try again.');
//     } finally {
//       setUpdating(false);
//     }
//   };
  
//   // Handle export
//   const handleDownload = (format = "txt") => {
//     if (!editorData || !editorData.content) return;
//     let content, extension;
//     switch (format) {
//       case "json":
//         content = JSON.stringify(
//           {
//             title: editorData.title,
//             content: editorData.content,
//             type: editorData.scriptType,
//             subType: editorData.scriptSubType,
//             project: editorData.project,
//             tags: editorData.tags,
//             created: new Date().toISOString(),
//           },
//           null,
//           2
//         );
//         extension = "json";
//         break;
//       case "xml":
//         content = `<?xml version="1.0" encoding="UTF-8"?>
// <servicenow-script>
// <metadata>
// <title>${editorData.title}</title>
// <type>${editorData.scriptType}</type>
// ${editorData.scriptSubType ? `<subtype>${editorData.scriptSubType}</subtype>` : ""}
// <project>${editorData.project}</project>
// <created>${new Date().toISOString()}</created>
// </metadata>
// <content><![CDATA[${editorData.content}]]></content>
// </servicenow-script>`;
//         extension = "xml";
//         break;
//       default: // txt
//         content = editorData.content;
//         extension = "txt";
//     }
//     const blob = new Blob([content], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${editorData.title.replace(/[^\w]/g, "_")}_${
//       editorData.scriptType
//     }.${extension}`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };
  
//   // Handle share via email
//   const handleShareViaEmail = () => {
//     if (!editorData) return;
    
//     const subject = `ServiceNow Script: ${editorData.title}`;
//     const body = `Here's the ServiceNow script you requested:
// Script Title: ${editorData.title}
// Script Type: ${editorData.scriptType?.replace(/_/g, " ").toUpperCase() || ""}
// ${editorData.scriptSubType
//   ? `Script Sub-Type: ${editorData.scriptSubType
//       .replace(/_/g, " ")
//       .toUpperCase()}\n`
//   : ""}
// ${editorData.project ? `Project: ${editorData.project}` : ""}
// Script Content:
// ${editorData.content}
// ---
// Sent from ServiceNow Script Manager`;
//     const mailtoUrl = `mailto:?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoUrl;
//   };
  
//   // Loading or user is not available
//   if (loading || !user) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="relative w-16 h-16"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-green-500"></div>
//           </motion.div>
          
//           <motion.div
//             className="mt-4 flex space-x-1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {[0, 1, 2].map((index) => (
//               <motion.div
//                 key={index}
//                 className="w-2 h-2 bg-green-500 rounded-full"
//                 animate={{
//                   y: [0, -10, 0],
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                 }}
//               />
//             ))}
//           </motion.div>
          
//           <motion.p
//             className="mt-4 text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Loading script...
//           </motion.p>
//         </motion.div>
//       </div>
//     );
//   }
  
//   // If the note doesn't exist
//   if (!note) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
//         <motion.div
//           className="text-center p-8 bg-gray-800 rounded-xl max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="mx-auto w-16 h-16 flex items-center justify-center bg-red-900/30 rounded-full mb-4"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </motion.div>
//           <h2 className="text-xl font-bold text-white mb-2">Script Not Found</h2>
//           <p className="text-gray-400 mb-6">The script you're looking for doesn't exist or you don't have permission to view it.</p>
//           <Link
//             href="/dashboard"
//             className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all"
//           >
//             Back to Dashboard
//           </Link>
//         </motion.div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Top Action Bar */}
//       <motion.div
//         className="flex flex-col items-center mb-6 p-4 bg-gray-800 rounded-xl shadow-lg"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-4">
//           Edit Script
//         </h1>
        
//         <div className="flex flex-wrap justify-center gap-3">
//           {/* Cancel Button */}
//           <Link 
//             href="/dashboard"
//             className="flex items-center px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
//           >
//             <ArrowLeftIcon className="h-5 w-5 mr-1" />
//             Back
//           </Link>
          
//           {/* Export Button */}
//           <div className="relative">
//             <motion.button
//               onClick={() => setShowExportMenu(!showExportMenu)}
//               className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <DownloadIcon className="h-5 w-5 mr-1" />
//               Export
//               <ChevronDownIcon className="h-4 w-4 ml-1" />
//             </motion.button>
            
//             <AnimatePresence>
//               {showExportMenu && (
//                 <motion.div
//                   className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl z-50 border border-emerald-900 overflow-hidden"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <div className="py-1">
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("txt");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiFileText className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">Text File</div>
//                         <div className="text-xs text-gray-400">.txt format</div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("json");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiDatabase className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">JSON File</div>
//                         <div className="text-xs text-gray-400">
//                           .json format
//                         </div>
//                       </div>
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         handleDownload("xml");
//                         setShowExportMenu(false);
//                       }}
//                       className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
//                       whileHover={{ x: 5 }}
//                     >
//                       <FiCode className="text-emerald-400 mr-3" />
//                       <div>
//                         <div className="font-medium">XML File</div>
//                         <div className="text-xs text-gray-400">.xml format</div>
//                       </div>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
          
//           {/* Share via Email Button */}
//           <motion.button
//             onClick={handleShareViaEmail}
//             className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ShareIcon className="h-5 w-5 mr-1" />
//             Share via Email
//           </motion.button>
          
//           {/* Update Script Button */}
//           <motion.button
//             id="update-button"
//             onClick={handleUpdate}
//             disabled={updating}
//             className={`flex items-center px-4 py-2 rounded-md transition-all ${
//               updateSuccess 
//                 ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
//                 : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
//             } disabled:opacity-50`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {updating ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Updating...
//               </>
//             ) : updateSuccess ? (
//               <>
//                 <CheckIcon className="h-5 w-5 mr-1" />
//                 Saved!
//               </>
//             ) : (
//               <>
//                 <SaveIcon className="h-5 w-5 mr-1" />
//                 Update Script
//               </>
//             )}
//           </motion.button>
          
//           {/* Delete Button */}
//           <motion.button
//             onClick={() => {
//               setNoteToDelete(note.id);
//               setShowDeleteModal(true);
//             }}
//             disabled={deleting}
//             className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {deleting ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Deleting...
//               </>
//             ) : (
//               <>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                 </svg>
//                 Delete
//               </>
//             )}
//           </motion.button>
//         </div>
//       </motion.div>
      
//       {/* Note editor with update functionality */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <NoteEditor 
//           initialData={note} 
//           onDataChange={(data) => setEditorData(data)}
//           onSave={async (updatedData) => {
//             try {
//               await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
//                 ...updatedData,
//                 updatedAt: new Date() // Ensure the updated date is set
//               });
//             } catch (error) {
//               console.error('Error updating note:', error);
//             }
//           }}
//           hideActionButtons={true}
//         />
//       </motion.div>
      
//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => handleDelete(noteToDelete)}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//         />
//       )}
//     </div>
//   );
// }




import { useRouter } from 'next/router';
import { useAuth } from '../../services/auth';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useState, useEffect } from 'react';
import NoteEditor from '../../components/Notes/NoteEditor';
import Link from 'next/link';
import Modal from '../../components/Modal';  // Assuming you have a Modal component
import { motion, AnimatePresence } from 'framer-motion';
import { ShareIcon, ArrowLeftIcon, SaveIcon, CheckIcon, DownloadIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { FiFileText, FiDatabase, FiCode } from 'react-icons/fi';

export default function NoteDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [editorData, setEditorData] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  
  // Fetch note when user is logged in and id is available
  useEffect(() => {
    if (!user || !id) return;
    const fetchNote = async () => {
      const docRef = doc(db, 'users', user.uid, 'notes', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setNote({ id: docSnap.id, ...docSnap.data() });
        setEditorData({ id: docSnap.id, ...docSnap.data() });
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
  
  // Handle note update
  const handleUpdate = async () => {
    if (!editorData) return;
    
    setUpdating(true);
    try {
      await updateDoc(doc(db, 'users', user.uid, 'notes', id), {
        ...editorData,
        updatedAt: new Date() // Ensure the updated date is set
      });
      
      // Show success feedback
      setUpdateSuccess(true);
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error updating note:', error);
      alert('Failed to update script. Please try again.');
    } finally {
      setUpdating(false);
    }
  };
  
  // Handle export
  const handleDownload = (format = "txt") => {
    if (!editorData || !editorData.content) return;
    let content, extension;
    switch (format) {
      case "json":
        content = JSON.stringify(
          {
            title: editorData.title,
            content: editorData.content,
            type: editorData.scriptType,
            subType: editorData.scriptSubType,
            project: editorData.project,
            tags: editorData.tags,
            created: new Date().toISOString(),
          },
          null,
          2
        );
        extension = "json";
        break;
      case "xml":
        content = `<?xml version="1.0" encoding="UTF-8"?>
<servicenow-script>
<metadata>
<title>${editorData.title}</title>
<type>${editorData.scriptType}</type>
${editorData.scriptSubType ? `<subtype>${editorData.scriptSubType}</subtype>` : ""}
<project>${editorData.project}</project>
<created>${new Date().toISOString()}</created>
</metadata>
<content><![CDATA[${editorData.content}]]></content>
</servicenow-script>`;
        extension = "xml";
        break;
      default: // txt
        content = editorData.content;
        extension = "txt";
    }
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${editorData.title.replace(/[^\w]/g, "_")}_${
      editorData.scriptType
    }.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  // Handle share via email
  const handleShareViaEmail = () => {
    if (!editorData) return;
    
    const subject = `ServiceNow Script: ${editorData.title}`;
    const body = `Here's the ServiceNow script you requested:
Script Title: ${editorData.title}
Script Type: ${editorData.scriptType?.replace(/_/g, " ").toUpperCase() || ""}
${editorData.scriptSubType
  ? `Script Sub-Type: ${editorData.scriptSubType
      .replace(/_/g, " ")
      .toUpperCase()}\n`
  : ""}
${editorData.project ? `Project: ${editorData.project}` : ""}
Script Content:
${editorData.content}
---
Sent from ServiceNow Script Manager`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  
  // Loading or user is not available
  if (loading || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Cosmic loader */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="relative w-32 h-32 mb-8"
        >
          <div className="absolute inset-0 rounded-full border-4 border-emerald-200 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-emerald-500 animate-spin"></div>
          <div className="absolute inset-8 rounded-full border-4 border-transparent border-b-green-400 animate-spin animation-delay-200"></div>
          <div className="absolute inset-12 rounded-full bg-emerald-500 animate-pulse animation-delay-300"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500">
            Preparing Your Creative Space
          </h3>
          <p className="text-gray-400 max-w-md">
            We're gathering your script and preparing it for editing...
          </p>
        </motion.div>
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [20, 0, -20],
                x: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  
  // If the note doesn't exist
  if (!note) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
        <motion.div
          className="text-center p-8 bg-gray-800 rounded-xl max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mx-auto w-16 h-16 flex items-center justify-center bg-red-900/30 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          <h2 className="text-xl font-bold text-white mb-2">Script Not Found</h2>
          <p className="text-gray-400 mb-6">The script you're looking for doesn't exist or you don't have permission to view it.</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all"
          >
            Back to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Action Bar */}
      <motion.div
        className="flex flex-col items-center mb-6 p-4 bg-gray-800 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-4">
          Edit Script
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3">
          {/* Cancel Button */}
          <Link 
            href="/dashboard"
            className="flex items-center px-4 py-2 border text-white border-green-300 rounded-md hover:bg-black hover:text-green-300 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back
          </Link>
          
          {/* Export Button */}
          <div className="relative">
            <motion.button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DownloadIcon className="h-5 w-5 mr-1" />
              Export
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </motion.button>
            
            <AnimatePresence>
              {showExportMenu && (
                <motion.div
                  className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl z-50 border border-emerald-900 overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    <motion.button
                      onClick={() => {
                        handleDownload("txt");
                        setShowExportMenu(false);
                      }}
                      className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <FiFileText className="text-emerald-400 mr-3" />
                      <div>
                        <div className="font-medium">Text File</div>
                        <div className="text-xs text-gray-400">.txt format</div>
                      </div>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleDownload("json");
                        setShowExportMenu(false);
                      }}
                      className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <FiDatabase className="text-emerald-400 mr-3" />
                      <div>
                        <div className="font-medium">JSON File</div>
                        <div className="text-xs text-gray-400">
                          .json format
                        </div>
                      </div>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleDownload("xml");
                        setShowExportMenu(false);
                      }}
                      className="flex w-full px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-green-900 items-center transition-all duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <FiCode className="text-emerald-400 mr-3" />
                      <div>
                        <div className="font-medium">XML File</div>
                        <div className="text-xs text-gray-400">.xml format</div>
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Share via Email Button */}
          <motion.button
            onClick={handleShareViaEmail}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShareIcon className="h-5 w-5 mr-1" />
            Share via Email
          </motion.button>
          
          {/* Update Script Button */}
          <motion.button
            id="update-button"
            onClick={handleUpdate}
            disabled={updating}
            className={`flex items-center px-4 py-2 rounded-md transition-all ${
              updateSuccess 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
            } disabled:opacity-50`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {updating ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Updating...
              </>
            ) : updateSuccess ? (
              <>
                <CheckIcon className="h-5 w-5 mr-1" />
                Saved!
              </>
            ) : (
              <>
                <SaveIcon className="h-5 w-5 mr-1" />
                Update Script
              </>
            )}
          </motion.button>
          
          {/* Delete Button */}
          <motion.button
            onClick={() => {
              setNoteToDelete(note.id);
              setShowDeleteModal(true);
            }}
            disabled={deleting}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {deleting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Deleting...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
      
      {/* Note editor with update functionality */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <NoteEditor 
          initialData={note} 
          onDataChange={(data) => setEditorData(data)}
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
          hideActionButtons={true}
        />
      </motion.div>
      
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