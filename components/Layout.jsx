

import { useAuth } from '../services/auth';
import Link from 'next/link';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-orange-600">
            ServiceNow Dev Notes
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link href="/profile" className="flex items-center space-x-2 hover:text-gray-900">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    className="h-8 w-8 rounded-full" 
                    alt="Profile"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-gray-700">
                  {user.displayName || user.email.split('@')[0]}
                </span>
              </Link>
              <button 
                onClick={handleSignOut}
                className="text-red-500 hover:text-red-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/auth" className="text-gray-700 hover:text-gray-900">
                Sign In
              </Link>
              <Link href="/auth?mode=signup" className="text-blue-600 hover:text-blue-800">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}