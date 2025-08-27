
// // Add more CRUD operations as needed


import { db } from '../lib/firebase'
import { collection, addDoc, query, orderBy } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';

// Function to save a note
export const saveNote = async (userId, noteData) => {
  const noteWithMetadata = {
    ...noteData,
    created: new Date(),
    updated: new Date(),
    userId
  }
  
  const docRef = await addDoc(collection(db, 'users', userId, 'notes'), noteWithMetadata);
  return docRef.id;
}

// Function to get all notes for a user, ordered by 'updated' date
export const getUserNotes = (userId) => {
  return query(
    collection(db, 'users', userId, 'notes'),
    orderBy('updated', 'desc')
  );
}

// Function to delete a note
export const deleteNote = async (userId, noteId) => {
  try {
    await deleteDoc(doc(db, 'users', userId, 'notes', noteId));
    return true;
  } catch (error) {
    console.error("Error deleting note: ", error);
    return false;
  }
};
