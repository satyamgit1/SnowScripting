// import { useRouter } from 'next/router'
// import { useAuth } from '../../services/auth'  // Updated import path
// import { doc, getDoc, updateDoc } from 'firebase/firestore'
// import { db } from '../../lib/firebase'      // Updated import path
// import { useState, useEffect } from 'react'
// import NoteEditor from '../../components/Notes/NoteEditor'  // Updated import path

// export default function NoteDetailPage() {
//   const router = useRouter()
//   const { id } = router.query
//   const { user } = useAuth()
//   const [note, setNote] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (!user || !id) return

//     const fetchNote = async () => {
//       const docRef = doc(db, 'users', user.uid, 'notes', id)
//       const docSnap = await getDoc(docRef)

//       if (docSnap.exists()) {
//         setNote({ id: docSnap.id, ...docSnap.data() })
//       } else {
//         router.push('/')
//       }
//       setLoading(false)
//     }

//     fetchNote()
//   }, [user, id, router])

//   const handleUpdate = async (updatedData) => {
//     try {
//       const docRef = doc(db, 'users', user.uid, 'notes', id)
//       await updateDoc(docRef, {
//         ...updatedData,
//         updatedAt: new Date()
//       })
//     } catch (error) {
//       console.error("Error updating document: ", error)
//     }
//   }

//   if (loading || !user) {
//     return <div className="p-4">Loading...</div>
//   }

//   if (!note) {
//     return <div className="p-4">Note not found</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6">Edit Script</h1>
//       <NoteEditor 
//         initialData={note} 
//         onSave={handleUpdate}
//       />
//     </div>
//   )
// }

import { useRouter } from 'next/router'
import { useAuth } from '../../services/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { useState, useEffect } from 'react'
import NoteEditor from '../../components/Notes/NoteEditor'

export default function NoteDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const { user } = useAuth()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user || !id) return

    const fetchNote = async () => {
      const docRef = doc(db, 'users', user.uid, 'notes', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setNote({ id: docSnap.id, ...docSnap.data() })
      } else {
        router.push('/')
      }
      setLoading(false)
    }

    fetchNote()
  }, [user, id, router])

  const handleUpdate = async (updatedData) => {
    try {
      const docRef = doc(db, 'users', user.uid, 'notes', id)
      await updateDoc(docRef, {
        ...updatedData,
        updatedAt: new Date()
      })
      // Optional: Show success message
      alert('Note updated successfully!')
    } catch (error) {
      console.error("Error updating document: ", error)
      alert('Error updating note')
    }
  }

  if (loading || !user) {
    return <div className="p-4">Loading...</div>
  }

  if (!note) {
    return <div className="p-4">Note not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Script</h1>
        <button 
          onClick={() => router.push('/')}
          className="text-gray-500 hover:text-gray-700"
        >
          ← Back to all notes
        </button>
      </div>
      <NoteEditor 
        initialData={note} 
        onSave={handleUpdate}
      />
    </div>
  )
}