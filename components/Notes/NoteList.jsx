// // components/Notes/NoteList.jsx
// import { useState, useEffect } from 'react'
// import { collection, query, where, onSnapshot } from 'firebase/firestore'
// import { db } from '../../lib/firebase'

// export default function NoteList({ userId }) {
//   const [notes, setNotes] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (!userId) return

//     const q = query(
//       collection(db, 'users', userId, 'notes'),
//       // Add any ordering/filtering here
//     )

//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const notesData = []
//       querySnapshot.forEach((doc) => {
//         notesData.push({ id: doc.id, ...doc.data() })
//       })
//       setNotes(notesData)
//       setLoading(false)
//     })

//     return () => unsubscribe()
//   }, [userId])

//   if (loading) return <div>Loading notes...</div>

//   return (
//     <div className="space-y-4">
//       {notes.length === 0 ? (
//         <p>No notes found. Create your first note!</p>
//       ) : (
//         notes.map((note) => (
//           <div key={note.id} className="p-4 border rounded-lg">
//             <h3 className="font-bold">{note.title}</h3>
//             <p className="text-sm text-gray-500">{note.scriptType}</p>
//             {/* Add more note details here */}
//           </div>
//         ))
//       )}
//     </div>
//   )
// }


// import Link from 'next/link'
// import { useAuth } from '../../services/auth'
// import { collection, query, where, onSnapshot } from 'firebase/firestore'
// import { db } from '../../lib/firebase'
// import { useState, useEffect } from 'react'

// export default function NoteList({ userId }) {
//   const [notes, setNotes] = useState([])
//   const [loading, setLoading] = useState(true)
//   const { user } = useAuth()

//   useEffect(() => {
//     if (!userId) return

//     const q = query(
//       collection(db, 'users', userId, 'notes'),
//       // Add any ordering you want (e.g., by date)
//     )

//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const notesData = []
//       querySnapshot.forEach((doc) => {
//         notesData.push({ id: doc.id, ...doc.data() })
//       })
//       setNotes(notesData)
//       setLoading(false)
//     })

//     return () => unsubscribe()
//   }, [userId])

//   if (loading) return <div className="p-4">Loading notes...</div>

//   return (
//     <div className="space-y-4">
//       {notes.length === 0 ? (
//         <p className="p-4">No notes found. Create your first note!</p>
//       ) : (
//         notes.map((note) => (
//           <Link 
//             key={note.id} 
//             href={`/note/${note.id}`}
//             className="block p-4 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
//           >
//             <div>
//               <h3 className="font-bold text-lg">{note.title}</h3>
//               <div className="flex justify-between items-center mt-2">
//                 <span className="text-sm text-gray-500 capitalize">
//                   {note.scriptType.replace(/_/g, ' ')}
//                 </span>
//                 <span className="text-xs text-gray-400">
//                   {new Date(note.updatedAt?.toDate()).toLocaleDateString()}
//                 </span>
//               </div>
//             </div>
//           </Link>
//         ))
//       )}
//     </div>
//   )
// }

// import { useState, useEffect } from 'react';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import Link from 'next/link';

// export default function NoteList({ userId }) {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     scriptType: 'all',
//     project: 'all',
//     dateRange: 'all'
//   });

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
//     });

//     return () => unsubscribe();
//   }, [userId]);

//   // Apply filters and search
//   useEffect(() => {
//     let result = [...notes];
    
//     // Apply search
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       result = result.filter(note => 
//         note.title.toLowerCase().includes(term) ||
//         note.content.toLowerCase().includes(term) ||
//         (note.project && note.project.toLowerCase().includes(term)) ||
//         (note.tags && note.tags.some(tag => tag.toLowerCase().includes(term)))
//       );
//     }

//     // Apply filters
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
//   }, [searchTerm, filters, notes]);

//   if (loading) return (
//     <div className="flex justify-center items-center min-h-[200px]">
//       <div className="animate-pulse flex space-x-4">
//         <div className="flex-1 space-y-4 py-1">
//           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//           <div className="space-y-2">
//             <div className="h-4 bg-gray-200 rounded"></div>
//             <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Get unique projects for filter dropdown
//   const allProjects = notes.map(note => note.project).filter(Boolean);
//   const uniqueProjects = [...new Set(allProjects)];

//   return (
//     <div className="space-y-8">
//       {/* Search and Filter Controls */}
//       <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Notes</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Search Input */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-600 mb-2">Search Notes</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search by title, content, tags..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
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
//                 className="appearance-none block w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
//               >
//                 <option value="all">All Types</option>
//                 <option value="business_rule">Business Rule</option>
//                 <option value="script_include">Script Include</option>
//                 <option value="client_script">Client Script</option>
//                 <option value="ui_action">UI Action</option>
//                 <option value="scheduled_job">Scheduled Job</option>
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
//                 className="appearance-none block w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
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

//         {/* Date Range Filter */}
//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-600 mb-2">Date Range</label>
//           <div className="flex flex-wrap gap-2">
//             {['all', 'today', 'week', 'month'].map((range) => (
//               <button
//                 key={range}
//                 onClick={() => setFilters({...filters, dateRange: range})}
//                 className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
//                   filters.dateRange === range
//                     ? 'bg-blue-600 text-white shadow-md'
//                     : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
//                 }`}
//               >
//                 {range === 'all' && 'All Time'}
//                 {range === 'today' && 'Today'}
//                 {range === 'week' && 'This Week'}
//                 {range === 'month' && 'This Month'}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Notes List */}
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold text-gray-800">Your Scripts</h2>
//           <span className="text-sm text-gray-500">
//             {filteredNotes.length} {filteredNotes.length === 1 ? 'script' : 'scripts'} found
//           </span>
//         </div>
        
//         {filteredNotes.length === 0 ? (
//           <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
//             <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//             <h3 className="mt-2 text-lg font-medium text-gray-700">
//               {notes.length === 0 ? 'No scripts found' : 'No matching scripts'}
//             </h3>
//             <p className="mt-1 text-gray-500">
//               {notes.length === 0 ? 'Create your first script to get started' : 'Try adjusting your search or filters'}
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {filteredNotes.map((note) => (
//               <Link 
//                 key={note.id} 
//                 href={`/note/${note.id}`}
//                 className="group bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md flex flex-col h-full"
//               >
//                 <div className="flex-grow">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
//                       {note.title}
//                     </h3>
//                     <span className="text-xs text-gray-400 mt-1">
//                       {new Date(note.updatedAt?.toDate() || note.createdAt?.toDate()).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: 'numeric'
//                       })}
//                     </span>
//                   </div>
                  
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
//                       note.scriptType === 'business_rule' ? 'bg-purple-100 text-purple-800' :
//                       note.scriptType === 'script_include' ? 'bg-blue-100 text-blue-800' :
//                       note.scriptType === 'client_script' ? 'bg-green-100 text-green-800' :
//                       note.scriptType === 'ui_action' ? 'bg-yellow-100 text-yellow-800' :
//                       'bg-gray-100 text-gray-800'
//                     }`}>
//                       {note.scriptType.replace(/_/g, ' ')}
//                     </span>
                    
//                     {note.project && (
//                       <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
//                         {note.project}
//                       </span>
//                     )}
//                   </div>
                  
//                   <div className="mt-4">
//                     <p className="text-sm text-gray-500 line-clamp-3">
//                       {note.content.substring(0, 150)}{note.content.length > 150 ? '...' : ''}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 flex justify-end">
//                   <span className="inline-flex items-center text-sm text-blue-600 group-hover:text-blue-800 transition-colors duration-200">
//                     View script
//                     <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from 'react';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import Link from 'next/link';
// import { useAuth } from '../../services/auth';
// import { getUserNotes, deleteNote } from '../../services/notes';


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
//     });

//     return () => unsubscribe();
//   }, [userId]);

//   // Apply filters and search
//   useEffect(() => {
//     let result = [...notes];
    
//     // Apply search
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       result = result.filter(note => 
//         note.title.toLowerCase().includes(term) ||
//         note.content.toLowerCase().includes(term) ||
//         (note.project && note.project.toLowerCase().includes(term)) ||
//         (note.tags && note.tags.some(tag => tag.toLowerCase().includes(term)))
//       );
//     }

//     // Apply filters
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
//   }, [searchTerm, filters, notes]);

//   const handleDelete = async (noteId) => {
//     if (!window.confirm('Are you sure you want to delete this script?')) return;
    
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
//     <div className="flex justify-center items-center min-h-[200px]">
//       <div className="animate-pulse flex space-x-4">
//         <div className="flex-1 space-y-4 py-1">
//           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//           <div className="space-y-2">
//             <div className="h-4 bg-gray-200 rounded"></div>
//             <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-8">
//       {/* Search and Filter Controls */}
//       <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Notes</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Search Input */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-600 mb-2">Search Notes</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search by title, content, tags..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
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
//                 className="appearance-none block w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
//               >
//                 <option value="all">All Types</option>
//                 <option value="business_rule">Business Rule</option>
//                 <option value="script_include">Script Include</option>
//                 <option value="client_script">Client Script</option>
//                 <option value="ui_action">UI Action</option>
//                 <option value="scheduled_job">Scheduled Job</option>
//               </select>
//             </div>
//           </div>

//           {/* Project Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2">Project</label>
//             <div className="relative">
//               <select
//                 value={filters.project}
//                 onChange={(e) => setFilters({...filters, project: e.target.value})}
//                 className="appearance-none block w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
//               >
//                 <option value="all">All Projects</option>
//                 {uniqueProjects.map(project => (
//                   <option key={project} value={project}>{project}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Date Range Filter */}
//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-600 mb-2">Date Range</label>
//           <div className="flex flex-wrap gap-2">
//             {['all', 'today', 'week', 'month'].map((range) => (
//               <button
//                 key={range}
//                 onClick={() => setFilters({...filters, dateRange: range})}
//                 className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
//                   filters.dateRange === range
//                     ? 'bg-blue-600 text-white shadow-md'
//                     : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
//                 }`}
//               >
//                 {range === 'all' && 'All Time'}
//                 {range === 'today' && 'Today'}
//                 {range === 'week' && 'This Week'}
//                 {range === 'month' && 'This Month'}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Notes List */}
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold text-gray-800">Your Scripts</h2>
//           <span className="text-sm text-gray-500">
//             {filteredNotes.length} {filteredNotes.length === 1 ? 'script' : 'scripts'} found
//           </span>
//         </div>
        
//         {filteredNotes.length === 0 ? (
//           <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
//             <h3 className="mt-2 text-lg font-medium text-gray-700">
//               {notes.length === 0 ? 'No scripts found' : 'No matching scripts'}
//             </h3>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {filteredNotes.map((note) => (
//               <div key={note.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start">
//                   <Link href={`/note/${note.id}`} className="flex-1">
//                     <h3 className="font-bold text-lg hover:text-blue-600">{note.title}</h3>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {note.scriptType.replace(/_/g, ' ')} • {note.project}
//                     </p>
//                   </Link>
                  
//                   <div className="flex space-x-2">
//                     <Link 
//                       href={`/note/${note.id}`}
//                       className="px-3 py-1 text-xs bg-green-600 text-white rounded-md shadow-md"
//                     >
//                       View
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(note.id)}
//                       disabled={deletingId === note.id}
//                       className="px-3 py-1 text-xs bg-red-600 text-white rounded-md shadow-md disabled:opacity-50"
//                     >
//                       {deletingId === note.id ? 'Deleting...' : 'Delete'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import Link from 'next/link';
// import { useAuth } from '../../services/auth';
// import { getUserNotes, deleteNote } from '../../services/notes';
// import Modal from '../../components/Modal'; // Assuming you have a Modal component

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
//     });

//     return () => unsubscribe();
//   }, [userId]);

//   // Apply filters and search
//   useEffect(() => {
//     let result = [...notes];
    
//     // Apply search
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       result = result.filter(note => 
//         note.title.toLowerCase().includes(term) ||
//         note.content.toLowerCase().includes(term) ||
//         (note.project && note.project.toLowerCase().includes(term)) ||
//         (note.tags && note.tags.some(tag => tag.toLowerCase().includes(term)))
//       );
//     }

//     // Apply filters
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
//   }, [searchTerm, filters, notes]);

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
//     <div className="flex justify-center items-center min-h-[200px]">
//       <div className="animate-pulse flex space-x-4">
//         <div className="flex-1 space-y-4 py-1">
//           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//           <div className="space-y-2">
//             <div className="h-4 bg-gray-200 rounded"></div>
//             <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-8">
//       {/* Search and Filter Controls */}
//       <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Notes</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Search Input */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-600 mb-2">Search Notes</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search by title, content, tags..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
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
//                 className="appearance-none block w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
//               >
//                 <option value="all">All Types</option>
//                 <option value="business_rule">Business Rule</option>
//                 <option value="script_include">Script Include</option>
//                 <option value="client_script">Client Script</option>
//                 <option value="ui_action">UI Action</option>
//                 <option value="scheduled_job">Scheduled Job</option>
//               </select>
//             </div>
//           </div>

//           {/* Project Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2">Project</label>
//             <div className="relative">
//               <select
//                 value={filters.project}
//                 onChange={(e) => setFilters({...filters, project: e.target.value})}
//                 className="appearance-none block w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
//               >
//                 <option value="all">All Projects</option>
//                 {uniqueProjects.map(project => (
//                   <option key={project} value={project}>{project}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Date Range Filter */}
//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-600 mb-2">Date Range</label>
//           <div className="flex flex-wrap gap-2">
//             {['all', 'today', 'week', 'month'].map((range) => (
//               <button
//                 key={range}
//                 onClick={() => setFilters({...filters, dateRange: range})}
//                 className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
//                   filters.dateRange === range
//                     ? 'bg-blue-600 text-white shadow-md'
//                     : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
//                 }`}
//               >
//                 {range === 'all' && 'All Time'}
//                 {range === 'today' && 'Today'}
//                 {range === 'week' && 'This Week'}
//                 {range === 'month' && 'This Month'}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Notes List */}
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold text-gray-800">Your Scripts</h2>
//           <span className="text-sm text-gray-500">
//             {filteredNotes.length} {filteredNotes.length === 1 ? 'script' : 'scripts'} found
//           </span>
//         </div>
        
//         {filteredNotes.length === 0 ? (
//           <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
//             <h3 className="mt-2 text-lg font-medium text-gray-700">
//               {notes.length === 0 ? 'No scripts found' : 'No matching scripts'}
//             </h3>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {filteredNotes.map((note) => (
//               <div key={note.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start">
//                   <Link href={`/note/${note.id}`} className="flex-1">
//                     <h3 className="font-bold text-lg hover:text-blue-600">{note.title}</h3>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {note.scriptType.replace(/_/g, ' ')} • {note.project}
//                     </p>
//                   </Link>
                  
//                   <div className="flex space-x-2">
//                     <Link 
//                       href={`/note/${note.id}`}
//                       className="px-3 py-1 text-xs bg-green-600 text-white rounded-md shadow-md"
//                     >
//                       View
//                     </Link>
//                     <button
//                       onClick={() => {
//                         setNoteToDelete(note.id);
//                         setShowDeleteModal(true);
//                       }}
//                       className="px-3 py-1 text-xs bg-red-600 text-white rounded-md shadow-md"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
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
//         />
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Link from 'next/link';
import { useAuth } from '../../services/auth';
import { getUserNotes, deleteNote } from '../../services/notes';
import Modal from '../../components/Modal'; // Assuming you have a Modal component

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
    });

    return () => unsubscribe();
  }, [userId]);

  // Apply filters and search
  useEffect(() => {
    let result = [...notes];
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(note => 
        note.title.toLowerCase().includes(term) ||
        note.content.toLowerCase().includes(term) ||
        (note.project && note.project.toLowerCase().includes(term)) ||
        (note.tags && note.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }

    // Apply filters
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
  }, [searchTerm, filters, notes]);

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
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Notes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Search Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-2">Search Notes</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, content, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
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
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
              >
                <option value="all">All Types</option>
                <option value="business_rule">Business Rule</option>
                <option value="script_include">Script Include</option>
                <option value="client_script">Client Script</option>
                <option value="ui_action">UI Action</option>
                <option value="scheduled_job">Scheduled Job</option>
              </select>
            </div>
          </div>

          {/* Project Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Project</label>
            <div className="relative">
              <select
                value={filters.project}
                onChange={(e) => setFilters({...filters, project: e.target.value})}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
              >
                <option value="all">All Projects</option>
                {uniqueProjects.map(project => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Date Range</label>
          <div className="flex flex-wrap gap-2">
            {['all', 'today', 'week', 'month'].map((range) => (
              <button
                key={range}
                onClick={() => setFilters({...filters, dateRange: range})}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  filters.dateRange === range
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {range === 'all' && 'All Time'}
                {range === 'today' && 'Today'}
                {range === 'week' && 'This Week'}
                {range === 'month' && 'This Month'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notes List */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Scripts</h2>
          <span className="text-sm text-gray-500">
            {filteredNotes.length} {filteredNotes.length === 1 ? 'script' : 'scripts'} found
          </span>
        </div>
        
        {filteredNotes.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
            <h3 className="mt-2 text-lg font-medium text-gray-700">
              {notes.length === 0 ? 'No scripts found' : 'No matching scripts'}
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNotes.map((note) => (
              <div key={note.id} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <Link href={`/note/${note.id}`} className="flex-1">
                    <h3 className="font-bold text-lg hover:text-orange-600">{note.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {note.scriptType.replace(/_/g, ' ')} • {note.project}
                    </p>
                  </Link>
                  
                  <div className="flex space-x-2">
                    <Link 
                      href={`/note/${note.id}`}
                      className="px-3 py-1 text-xs bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => {
                        setNoteToDelete(note.id);
                        setShowDeleteModal(true);
                      }}
                      className="px-3 py-1 text-xs bg-red-600 text-white rounded-md shadow-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
          title="Delete Script"
          message="Are you sure you want to delete this script? This action cannot be undone."
        />
      )}
    </div>
  );
}
