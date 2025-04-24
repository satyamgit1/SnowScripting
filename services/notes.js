import { db } from '../lib/firebase'
import { collection, addDoc, query, where, orderBy } from 'firebase/firestore'

export const saveNote = async (userId, noteData) => {
  const noteWithMetadata = {
    ...noteData,
    created: new Date(),
    updated: new Date(),
    userId
  }
  
  const docRef = await addDoc(collection(db, 'users', userId, 'notes'), noteWithMetadata)
  return docRef.id
}

export const getUserNotes = (userId) => {
  return query(
    collection(db, 'users', userId, 'notes'),
    orderBy('updated', 'desc')
  )
}

// Add more CRUD operations as needed