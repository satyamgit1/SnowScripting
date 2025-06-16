import Link from 'next/link';
import { useAuth } from '../services/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NoteList from '../components/Notes/NoteList';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div>
      {/* <div className="flex justify-between items-center mb-8"> */}
        {/* <h1 className="text-3xl font-bold text-gray-800">My ServiceNow Scripts</h1> */}
        {/* <Link 
          href="/note/new"
          className="bg-orange-500 hover:bg-orange-900 text-white px-4 py-2 rounded-md transition"
        >
          New Script
        </Link> */}
      {/* </div> */}
      <NoteList userId={user.uid} />
    </div>
  );
}