// pages/index.js
import { useAuth } from '../services/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NoteList from '../components/Notes/NoteList'
import Link from 'next/link'

export default function Home() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth')
    }
  }, [user, authLoading, router])

  if (authLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My ServiceNow Scripts
        </h1>
        <Link 
          href="/note/new"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          + New Script
        </Link>
      </div>
      
      <NoteList userId={user.uid} />
    </div>
  )
}