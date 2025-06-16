

// import { useState, useEffect } from 'react';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import Link from 'next/link';
// import { useAuth } from '../../services/auth';
// import { getUserNotes, deleteNote } from '../../services/notes';
// import Modal from '../../components/Modal';

// export default function NoteList({ userId }) {
//   const { user } = useAuth();
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     scriptType: 'all',
//     project: 'all',
//     dateRange: 'all'
//   });
//   const [deletingId, setDeletingId] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);
  
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const notesPerPage = 10;

//   // Fetch notes from Firestore (unchanged)
//   useEffect(() => {
//     if (!userId) return;

//     const q = query(collection(db, 'users', userId, 'notes'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const notesData = [];
//       querySnapshot.forEach((doc) => {
//         notesData.push({ id: doc.id, ...doc.data() });
//       });
//       setNotes(notesData);
//       setFilteredNotes(notesData);
//       setLoading(false);
//       // Reset to first page when notes change
//       setCurrentPage(1);
//     });

//     return () => unsubscribe();
//   }, [userId]);

//   // Apply filters and search (unchanged)
//   useEffect(() => {
//     let result = [...notes];
    
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       result = result.filter(note => 
//         note.title.toLowerCase().includes(term) ||
//         note.content.toLowerCase().includes(term) ||
//         (note.project && note.project.toLowerCase().includes(term)) ||
//         (note.tags && note.tags.some(tag => tag.toLowerCase().includes(term)))
//       );
//     }

//     if (filters.scriptType !== 'all') {
//       result = result.filter(note => note.scriptType === filters.scriptType);
//     }
    
//     if (filters.project !== 'all') {
//       result = result.filter(note => note.project === filters.project);
//     }
    
//     if (filters.dateRange !== 'all') {
//       const now = new Date();
//       result = result.filter(note => {
//         const noteDate = note.updatedAt?.toDate() || note.createdAt?.toDate();
//         if (!noteDate) return false;
        
//         const diffTime = now - noteDate;
//         const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
//         switch (filters.dateRange) {
//           case 'today': return diffDays < 1;
//           case 'week': return diffDays < 7;
//           case 'month': return diffDays < 30;
//           default: return true;
//         }
//       });
//     }

//     setFilteredNotes(result);
//     // Reset to first page when filters change
//     setCurrentPage(1);
//   }, [searchTerm, filters, notes]);

//   // Pagination logic
//   const indexOfLastNote = currentPage * notesPerPage;
//   const indexOfFirstNote = indexOfLastNote - notesPerPage;
//   const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);
//   const totalPages = Math.ceil(filteredNotes.length / notesPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleDelete = async (noteId) => {
//     setDeletingId(noteId);
//     try {
//       const success = await deleteNote(user.uid, noteId);
//       if (!success) throw new Error('Failed to delete note');
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   // Get unique projects for filter dropdown (unchanged)
//   const allProjects = notes.map(note => note.project).filter(Boolean);
//   const uniqueProjects = [...new Set(allProjects)];

//   if (loading) return (
//     <div className="flex justify-center items-center min-h-[200px]">
//       <div className="animate-pulse flex space-x-4">
//         <div className="flex-1 space-y-4 py-1">
//           <div className="h-4 bg-orange-100 rounded w-3/4"></div>
//           <div className="space-y-2">
//             <div className="h-4 bg-orange-100 rounded"></div>
//             <div className="h-4 bg-orange-100 rounded w-5/6"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-8">
//       {/* Search and Filter Controls - Redesigned */}
//       <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//           <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//           </svg>
//           Filter Scripts
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Search Input */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-600 mb-2">Search Scripts</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search by title, content, tags..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
//               />
//             </div>
//           </div>

//           {/* Script Type Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2">Script Type</label>
//             <div className="relative">
//               <select
//                 value={filters.scriptType}
//                 onChange={(e) => setFilters({...filters, scriptType: e.target.value})}
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
//               >
//                 <option value="all">All Types</option>
//                 <option value="business_rule">Business Rule</option>
//                 <option value="script_include">Script Include</option>
//                 <option value="client_script">Client Script</option>
//                 <option value="ui_action">UI Action</option>
//                 <option value="scheduled_job">Scheduled Job</option>
//                 <option value="email_template">Email Template</option>
//                 <option value="ui_script">UI Script</option>
//                 <option value="widget">Widget</option>
//                 <option value="fix_script">Fix Script</option>
//                 <option value="background_script">Background Script</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Project Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2">Project</label>
//             <div className="relative">
//               <select
//                 value={filters.project}
//                 onChange={(e) => setFilters({...filters, project: e.target.value})}
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
//               >
//                 <option value="all">All Projects</option>
//                 {uniqueProjects.map(project => (
//                   <option key={project} value={project}>{project}</option>
//                 ))}
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Date Range Filter - Redesigned */}
//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-600 mb-2">Date Range</label>
//           <div className="flex flex-wrap gap-2">
//             {[
//               { value: 'all', label: 'All Time', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
//               { value: 'today', label: 'Today', icon: 'M5 12h14M12 5l7 7-7 7' },
//               { value: 'week', label: 'This Week', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
//               { value: 'month', label: 'This Month', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }
//             ].map((range) => (
//               <button
//                 key={range.value}
//                 onClick={() => setFilters({...filters, dateRange: range.value})}
//                 className={`px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center transition-all duration-200 ${
//                   filters.dateRange === range.value
//                     ? 'bg-orange-600 text-white shadow-md'
//                     : 'bg-white text-gray-700 border border-gray-300 hover:bg-orange-50'
//                 }`}
//               >
//                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={range.icon} />
//                 </svg>
//                 {range.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Notes List - Redesigned */}
//       <div>
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 flex items-center">
//             <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//             Your Scripts
//           </h2>
//           <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
//             {filteredNotes.length} {filteredNotes.length === 1 ? 'script' : 'scripts'} found
//           </span>
//         </div>
        
//         {filteredNotes.length === 0 ? (
//           <div className="bg-white p-8 rounded-xl border-2 border-dashed border-orange-200 text-center">
//             <svg className="mx-auto h-12 w-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <h3 className="mt-3 text-lg font-medium text-gray-700">
//               {notes.length === 0 ? 'No scripts found' : 'No matching scripts'}
//             </h3>
//             <p className="mt-1 text-sm text-gray-500">
//               {notes.length === 0 ? 'Create your first script to get started' : 'Try adjusting your search or filters'}
//             </p>
//           </div>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {currentNotes.map((note) => (
//                 <div 
//                   key={note.id} 
//                   className="bg-white p-5 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-200 hover:border-orange-200"
//                 >
//                   <div className="flex justify-between items-start">
//                     <Link href={`/note/${note.id}`} className="flex-1 group">
//                       <div className="flex flex-col space-y-2">
//                         <h3 className="font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
//                           {note.title}
//                         </h3>
//                         <div className="flex items-center space-x-2">
//                           <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
//                             {note.scriptType.replace(/_/g, ' ')}
//                           </span>
//                           {note.project && (
//                             <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
//                               {note.project}
//                             </span>
//                           )}
//                         </div>
//                         {note.updatedAt && (
//                           <div className="text-xs text-gray-500 flex items-center">
//                             <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             Last updated: {note.updatedAt.toDate().toLocaleDateString()}
//                           </div>
//                         )}
//                       </div>
//                     </Link>
                    
//                     <div className="flex space-x-2">
//                       <Link 
//                         href={`/note/${note.id}`}
//                         className="p-2 text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
//                         title="View"
//                       >
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       </Link>
//                       <button
//                         onClick={() => {
//                           setNoteToDelete(note.id);
//                           setShowDeleteModal(true);
//                         }}
//                         className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
//                         title="Delete"
//                       >
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination Controls */}
//             {totalPages > 1 && (
//               <div className="mt-8 flex items-center justify-center space-x-2">
//                 <button
//                   onClick={() => paginate(Math.max(1, currentPage - 1))}
//                   disabled={currentPage === 1}
//                   className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-orange-600 hover:bg-orange-50'}`}
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                   <button
//                     key={number}
//                     onClick={() => paginate(number)}
//                     className={`px-4 py-2 rounded-lg ${currentPage === number ? 'bg-orange-600 text-white' : 'text-orange-600 hover:bg-orange-50'}`}
//                   >
//                     {number}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                   disabled={currentPage === totalPages}
//                   className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-orange-600 hover:bg-orange-50'}`}
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => {
//             handleDelete(noteToDelete);
//             setShowDeleteModal(false);
//           }}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//           confirmText="Delete"
//           confirmColor="red"
//         />
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import Link from 'next/link';
// import { useAuth } from '../../services/auth';
// import { getUserNotes, deleteNote } from '../../services/notes';
// import Modal from '../../components/Modal';

// export default function NoteList({ userId }) {
//   const { user } = useAuth();
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     scriptType: 'all',
//     project: 'all',
//     dateRange: 'all'
//   });
//   const [deletingId, setDeletingId] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [noteToDelete, setNoteToDelete] = useState(null);
  
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const notesPerPage = 10;

//   // Fetch notes from Firestore
//   useEffect(() => {
//     if (!userId) return;

//     const q = query(collection(db, 'users', userId, 'notes'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const notesData = [];
//       querySnapshot.forEach((doc) => {
//         notesData.push({ id: doc.id, ...doc.data() });
//       });
//       setNotes(notesData);
//       setFilteredNotes(notesData);
//       setLoading(false);
//       // Reset to first page when notes change
//       setCurrentPage(1);
//     });

//     return () => unsubscribe();
//   }, [userId]);

//   // Apply filters and search
//   useEffect(() => {
//     let result = [...notes];
    
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       result = result.filter(note => 
//         note.title.toLowerCase().includes(term) ||
//         note.content.toLowerCase().includes(term) ||
//         (note.project && note.project.toLowerCase().includes(term)) ||
//         (note.tags && note.tags.some(tag => tag.toLowerCase().includes(term)))
//       );
//     }

//     if (filters.scriptType !== 'all') {
//       result = result.filter(note => note.scriptType === filters.scriptType);
//     }
    
//     if (filters.project !== 'all') {
//       result = result.filter(note => note.project === filters.project);
//     }
    
//     if (filters.dateRange !== 'all') {
//       const now = new Date();
//       result = result.filter(note => {
//         const noteDate = note.updatedAt?.toDate() || note.createdAt?.toDate();
//         if (!noteDate) return false;
        
//         const diffTime = now - noteDate;
//         const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
//         switch (filters.dateRange) {
//           case 'today': return diffDays < 1;
//           case 'week': return diffDays < 7;
//           case 'month': return diffDays < 30;
//           default: return true;
//         }
//       });
//     }

//     setFilteredNotes(result);
//     // Reset to first page when filters change
//     setCurrentPage(1);
//   }, [searchTerm, filters, notes]);

//   // Pagination logic
//   const indexOfLastNote = currentPage * notesPerPage;
//   const indexOfFirstNote = indexOfLastNote - notesPerPage;
//   const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);
//   const totalPages = Math.ceil(filteredNotes.length / notesPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleDelete = async (noteId) => {
//     setDeletingId(noteId);
//     try {
//       const success = await deleteNote(user.uid, noteId);
//       if (!success) throw new Error('Failed to delete note');
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert('Failed to delete script. Please try again.');
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   // Get unique projects for filter dropdown
//   const allProjects = notes.map(note => note.project).filter(Boolean);
//   const uniqueProjects = [...new Set(allProjects)];

//   if (loading) return (
//     <div className="min-h-[70vh] flex flex-col items-center justify-center p-6">
//       {/* Animated loading spinner */}
//       <div className="relative w-16 h-16 mb-8">
//         <div className="absolute inset-0 rounded-full border-4 border-orange-200"></div>
//         <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 animate-spin"></div>
//         <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-orange-400 animate-spin animation-delay-200"></div>
//       </div>
      
//       {/* Animated loading text */}
//       <div className="text-center space-y-2">
//         <h3 className="text-xl font-semibold text-gray-700 animate-pulse">
//           Loading your scripts
//         </h3>
//         <p className="text-sm text-gray-500 animate-pulse animation-delay-300">
//           Gathering all your creative work...
//         </p>
//       </div>
      
//       {/* Skeleton loader for the list */}
//       <div className="mt-12 w-full max-w-4xl space-y-4">
//         {[...Array(5)].map((_, i) => (
//           <div key={i} className="bg-white p-5 rounded-xl border border-orange-100">
//             <div className="animate-pulse space-y-3">
//               <div className="h-6 bg-orange-100 rounded w-3/4"></div>
//               <div className="flex space-x-2">
//                 <div className="h-5 bg-orange-100 rounded-full w-24"></div>
//                 <div className="h-5 bg-blue-100 rounded-full w-16"></div>
//               </div>
//               <div className="h-4 bg-orange-100 rounded w-1/2"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-8">
//       {/* Search and Filter Controls - Redesigned */}
//       <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//           <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//           </svg>
//           Filter Scripts
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Search Input */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-600 mb-2">Search Scripts</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search by title, content, tags..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
//               />
//             </div>
//           </div>

//           {/* Script Type Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2">Script Type</label>
//             <div className="relative">
//               <select
//                 value={filters.scriptType}
//                 onChange={(e) => setFilters({...filters, scriptType: e.target.value})}
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
//               >
//                 <option value="all">All Types</option>
//                 <option value="business_rule">Business Rule</option>
//                 <option value="script_include">Script Include</option>
//                 <option value="client_script">Client Script</option>
//                 <option value="ui_action">UI Action</option>
//                 <option value="scheduled_job">Scheduled Job</option>
//                 <option value="email_template">Email Template</option>
//                 <option value="ui_script">UI Script</option>
//                 <option value="widget">Widget</option>
//                 <option value="fix_script">Fix Script</option>
//                 <option value="background_script">Background Script</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Project Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2">Project</label>
//             <div className="relative">
//               <select
//                 value={filters.project}
//                 onChange={(e) => setFilters({...filters, project: e.target.value})}
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
//               >
//                 <option value="all">All Projects</option>
//                 {uniqueProjects.map(project => (
//                   <option key={project} value={project}>{project}</option>
//                 ))}
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Date Range Filter - Redesigned */}
//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-600 mb-2">Date Range</label>
//           <div className="flex flex-wrap gap-2">
//             {[
//               { value: 'all', label: 'All Time', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
//               { value: 'today', label: 'Today', icon: 'M5 12h14M12 5l7 7-7 7' },
//               { value: 'week', label: 'This Week', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
//               { value: 'month', label: 'This Month', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }
//             ].map((range) => (
//               <button
//                 key={range.value}
//                 onClick={() => setFilters({...filters, dateRange: range.value})}
//                 className={`px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center transition-all duration-200 ${
//                   filters.dateRange === range.value
//                     ? 'bg-orange-600 text-white shadow-md'
//                     : 'bg-white text-gray-700 border border-gray-300 hover:bg-orange-50'
//                 }`}
//               >
//                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={range.icon} />
//                 </svg>
//                 {range.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Notes List - Redesigned */}
//       <div>
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 flex items-center">
//             <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//             Your Scripts
//           </h2>
//           <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
//             {filteredNotes.length} {filteredNotes.length === 1 ? 'script' : 'scripts'} found
//           </span>
//         </div>
        
//         {filteredNotes.length === 0 ? (
//           <div className="bg-white p-8 rounded-xl border-2 border-dashed border-orange-200 text-center">
//             <svg className="mx-auto h-12 w-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <h3 className="mt-3 text-lg font-medium text-gray-700">
//               {notes.length === 0 ? 'No scripts found' : 'No matching scripts'}
//             </h3>
//             <p className="mt-1 text-sm text-gray-500">
//               {notes.length === 0 ? 'Create your first script to get started' : 'Try adjusting your search or filters'}
//             </p>
//           </div>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {currentNotes.map((note) => (
//                 <div 
//                   key={note.id} 
//                   className="bg-white p-5 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-200 hover:border-orange-200"
//                 >
//                   <div className="flex justify-between items-start">
//                     <Link href={`/note/${note.id}`} className="flex-1 group">
//                       <div className="flex flex-col space-y-2">
//                         <h3 className="font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
//                           {note.title}
//                         </h3>
//                         <div className="flex items-center space-x-2">
//                           <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
//                             {note.scriptType.replace(/_/g, ' ')}
//                           </span>
//                           {note.project && (
//                             <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
//                               {note.project}
//                             </span>
//                           )}
//                         </div>
//                         {note.updatedAt && (
//                           <div className="text-xs text-gray-500 flex items-center">
//                             <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             Last updated: {note.updatedAt.toDate().toLocaleDateString()}
//                           </div>
//                         )}
//                       </div>
//                     </Link>
                    
//                     <div className="flex space-x-2">
//                       <Link 
//                         href={`/note/${note.id}`}
//                         className="p-2 text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
//                         title="View"
//                       >
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       </Link>
//                       <button
//                         onClick={() => {
//                           setNoteToDelete(note.id);
//                           setShowDeleteModal(true);
//                         }}
//                         className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
//                         title="Delete"
//                       >
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination Controls */}
//             {totalPages > 1 && (
//               <div className="mt-8 flex items-center justify-center space-x-2">
//                 <button
//                   onClick={() => paginate(Math.max(1, currentPage - 1))}
//                   disabled={currentPage === 1}
//                   className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-orange-600 hover:bg-orange-50'}`}
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                   <button
//                     key={number}
//                     onClick={() => paginate(number)}
//                     className={`px-4 py-2 rounded-lg ${currentPage === number ? 'bg-orange-600 text-white' : 'text-orange-600 hover:bg-orange-50'}`}
//                   >
//                     {number}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                   disabled={currentPage === totalPages}
//                   className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-orange-600 hover:bg-orange-50'}`}
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <Modal
//           isOpen={showDeleteModal}
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={() => {
//             handleDelete(noteToDelete);
//             setShowDeleteModal(false);
//           }}
//           title="Delete Script"
//           message="Are you sure you want to delete this script? This action cannot be undone."
//           confirmText="Delete"
//           confirmColor="red"
//         />
//       )}
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Link from 'next/link';
import { useAuth } from '../../services/auth';
import { getUserNotes, deleteNote } from '../../services/notes';
import Modal from '../../components/Modal';
import { motion, AnimatePresence } from 'framer-motion';

// Custom animated components
const FloatingOrb = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full filter blur-xl opacity-20"
  />
);

const GlowingCard = ({ children }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(255, 138, 0, 0.2)' }}
    className="relative overflow-hidden bg-gradient-to-br from-white to-orange-50 rounded-2xl border border-orange-100"
  >
    <FloatingOrb />
    {children}
  </motion.div>
);

export default function NoteList({ userId }) {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    scriptType: 'all',
    project: 'all',
    dateRange: 'all'
  });
  const [deletingId, setDeletingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 9;

  // Fetch notes from Firestore
  useEffect(() => {
    if (!userId) return;

    const q = query(collection(db, 'users', userId, 'notes'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notesData = [];
      querySnapshot.forEach((doc) => {
        notesData.push({ id: doc.id, ...doc.data() });
      });
      setNotes(notesData);
      setFilteredNotes(notesData);
      setLoading(false);
      setCurrentPage(1);
    });

    return () => unsubscribe();
  }, [userId]);

  // Apply filters and search
  useEffect(() => {
    let result = [...notes];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(note => 
        note.title.toLowerCase().includes(term) ||
        note.content.toLowerCase().includes(term) ||
        (note.project && note.project.toLowerCase().includes(term)) ||
        (note.tags && note.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }

    if (filters.scriptType !== 'all') {
      result = result.filter(note => note.scriptType === filters.scriptType);
    }
    
    if (filters.project !== 'all') {
      result = result.filter(note => note.project === filters.project);
    }
    
    if (filters.dateRange !== 'all') {
      const now = new Date();
      result = result.filter(note => {
        const noteDate = note.updatedAt?.toDate() || note.createdAt?.toDate();
        if (!noteDate) return false;
        
        const diffTime = now - noteDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        switch (filters.dateRange) {
          case 'today': return diffDays < 1;
          case 'week': return diffDays < 7;
          case 'month': return diffDays < 30;
          default: return true;
        }
      });
    }

    setFilteredNotes(result);
    setCurrentPage(1);
  }, [searchTerm, filters, notes]);

  // Pagination logic
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);
  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (noteId) => {
    setDeletingId(noteId);
    try {
      const success = await deleteNote(user.uid, noteId);
      if (!success) throw new Error('Failed to delete note');
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete script. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  // Get unique projects for filter dropdown
  const allProjects = notes.map(note => note.project).filter(Boolean);
  const uniqueProjects = [...new Set(allProjects)];

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-orange-50 to-white">
      {/* Cosmic loader */}
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="relative w-32 h-32 mb-8"
      >
        <div className="absolute inset-0 rounded-full border-4 border-orange-200 animate-pulse"></div>
        <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-orange-500 animate-spin"></div>
        <div className="absolute inset-8 rounded-full border-4 border-transparent border-b-yellow-400 animate-spin animation-delay-200"></div>
        <div className="absolute inset-12 rounded-full bg-orange-500 animate-pulse animation-delay-300"></div>
      </motion.div>
      
      {/* Animated text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center space-y-4"
      >
        <h3 className="text-2xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
          Preparing Your Creative Space
        </h3>
        <p className="text-gray-500 max-w-md">
          We're gathering all your brilliant scripts and ideas...
        </p>
      </motion.div>
      
      {/* Floating dots background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [20, 0, -20],
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
      {/* Header with animated gradient */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
          Your Script Library
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Where every idea shines and creativity flows
        </p>
      </motion.div>

      {/* Filter panel with glass morphism effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/30 mb-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4 md:mb-0">
            <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Refine Your Collection
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full shadow-md">
              {filteredNotes.length} {filteredNotes.length === 1 ? 'Masterpiece' : 'Creative Works'}
            </span>
            <Link 
              href="/note/new"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 py-2 rounded-xl font-medium shadow-md transition-all duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Script
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Search Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-2">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Find your perfect script..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-orange-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 shadow-sm"
              />
            </div>
          </div>

          {/* Script Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Script Type</label>
            <div className="relative">
              <select
                value={filters.scriptType}
                onChange={(e) => setFilters({...filters, scriptType: e.target.value})}
                className="appearance-none block w-full px-3 py-3 border border-orange-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 shadow-sm"
              >
                <option value="all">All Types</option>
                <option value="business_rule">Business Rule</option>
                <option value="script_include">Script Include</option>
                <option value="client_script">Client Script</option>
                <option value="ui_action">UI Action</option>
                <option value="scheduled_job">Scheduled Job</option>
                <option value="email_template">Email Template</option>
                <option value="ui_script">UI Script</option>
                <option value="widget">Widget</option>
                <option value="fix_script">Fix Script</option>
                <option value="background_script">Background Script</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Project</label>
            <div className="relative">
              <select
                value={filters.project}
                onChange={(e) => setFilters({...filters, project: e.target.value})}
                className="appearance-none block w-full px-3 py-3 border border-orange-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 shadow-sm"
              >
                <option value="all">All Projects</option>
                {uniqueProjects.map(project => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Time Frame</label>
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'all', label: 'All Time', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { value: 'today', label: 'Today', icon: 'M5 12h14M12 5l7 7-7 7' },
              { value: 'week', label: 'This Week', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
              { value: 'month', label: 'This Month', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }
            ].map((range) => (
              <motion.button
                key={range.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilters({...filters, dateRange: range.value})}
                className={`px-4 py-2 text-sm font-medium rounded-xl inline-flex items-center transition-all duration-200 ${
                  filters.dateRange === range.value
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-orange-200 hover:bg-orange-50'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={range.icon} />
                </svg>
                {range.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Notes Grid */}
      <AnimatePresence>
        {filteredNotes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/80 backdrop-blur-md p-12 rounded-3xl border-2 border-dashed border-orange-200 text-center"
          >
            <svg className="mx-auto h-16 w-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-700">
              {notes.length === 0 ? 'Your creative canvas is empty' : 'No masterpieces match your search'}
            </h3>
            <p className="mt-2 text-gray-500">
              {notes.length === 0 ? 'Start by creating your first brilliant script' : 'Try adjusting your filters or search term'}
            </p>
            <Link href="/note/new">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-xl font-medium shadow-md"
              >
                Create New Script
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentNotes.map((note) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <GlowingCard>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <Link href={`/note/${note.id}`} className="flex-1 group">
                          <div className="flex flex-col space-y-3">
                            <h3 className="font-bold text-xl text-gray-800 group-hover:text-orange-600 transition-colors">
                              {note.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 rounded-full shadow-sm">
                                {note.scriptType.replace(/_/g, ' ')}
                              </span>
                              {note.project && (
                                <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full shadow-sm">
                                  {note.project}
                                </span>
                              )}
                            </div>
                            {note.updatedAt && (
                              <div className="text-xs text-gray-500 flex items-center mt-2">
                                <svg className="w-3 h-3 mr-1 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Updated {note.updatedAt.toDate().toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </Link>
                        
                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Link 
                              href={`/note/${note.id}`}
                              className="p-2 text-orange-600 bg-orange-100/50 rounded-lg hover:bg-orange-100 transition-colors shadow-sm"
                              title="View"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </Link>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              setNoteToDelete(note.id);
                              setShowDeleteModal(true);
                            }}
                            className="p-2 text-red-600 bg-red-100/50 rounded-lg hover:bg-red-100 transition-colors shadow-sm"
                            title="Delete"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center space-x-2 mb-12"
              >
                <motion.button
                  whileHover={{ scale: currentPage !== 1 ? 1.1 : 1 }}
                  whileTap={{ scale: currentPage !== 1 ? 0.9 : 1 }}
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-xl ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-orange-600 hover:bg-orange-50'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <motion.button
                    key={number}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl ${currentPage === number ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md' : 'text-orange-600 hover:bg-orange-50'}`}
                  >
                    {number}
                  </motion.button>
                ))}

                <motion.button
                  whileHover={{ scale: currentPage !== totalPages ? 1.1 : 1 }}
                  whileTap={{ scale: currentPage !== totalPages ? 0.9 : 1 }}
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-xl ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-orange-600 hover:bg-orange-50'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Floating action button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-8 right-8 z-10"
      >
        <Link href="/note/new">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full shadow-xl flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </motion.button>
        </Link>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => {
            handleDelete(noteToDelete);
            setShowDeleteModal(false);
          }}
          title="Confirm Deletion"
          message="This creative work will be permanently removed. Are you absolutely sure?"
          confirmText="Delete Forever"
          confirmColor="red"
        />
      )}
    </div>
  );
}