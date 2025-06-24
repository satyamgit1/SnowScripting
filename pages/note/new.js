import { useRouter } from 'next/router'
import { useAuth } from '../../services/auth'
import NoteEditor from '../../components/Notes/NoteEditor'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../lib/firebase'

export default function NewNotePage() {
  const { user } = useAuth()
  const router = useRouter()

  const handleSave = async (noteData) => {
    try {
      const docRef = await addDoc(
        collection(db, 'users', user.uid, 'notes'), 
        {
          ...noteData,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      )
      router.push(`/note/${docRef.id}`)
    } catch (error) {
      console.error("Error adding document: ", error)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-6">Create New Script</h1> */}
      <NoteEditor onSave={handleSave} />
    </div>
  )
}