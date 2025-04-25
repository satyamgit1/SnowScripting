// // Import the functions you need from the Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getAnalytics, isSupported } from "firebase/analytics";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

// // Throw error if missing required config in production
// if (process.env.NODE_ENV === 'production') {
//   const missingKeys = Object.entries(firebaseConfig)
//     .filter(([_, value]) => !value)
//     .map(([key]) => key);

//   if (missingKeys.length > 0) {
//     throw new Error(
//       `Missing Firebase config values for: ${missingKeys.join(', ')}. ` +
//       'Please check your environment variables.'
//     );
//   }
// }

// // Initialize Firebase services
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// // Analytics will be initialized client-side only
// let analytics;
// const initAnalytics = async () => {
//   if (typeof window !== 'undefined') {
//     try {
//       const isAnalyticsSupported = await isSupported();
//       if (isAnalyticsSupported) {
//         analytics = getAnalytics(app);
//       }
//     } catch (error) {
//       console.error("Firebase Analytics initialization error", error);
//     }
//   }
// };

// // Initialize analytics in development or production
// if (process.env.NODE_ENV !== 'test') {
//   initAnalytics();
// }

// export { db, auth, storage, analytics };


// import { useAuth } from '../services/auth';
// import Link from 'next/link';
// import { auth } from '../lib/firebase';
// import { useRouter } from 'next/router';

// export default function Layout({ children }) {
//   const { user } = useAuth();
//   const router = useRouter();

//   const handleSignOut = async () => {
//     try {
//       await auth.signOut();
//       router.push('/auth');
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <Link href="/" className="text-xl font-bold text-blue-600">
//             ServiceNow Dev Notes
//           </Link>
          
//           {user ? (
//             <div className="flex items-center space-x-4">
//               <Link href="/profile" className="text-gray-700 hover:text-gray-900">
//                 {user.email}
//               </Link>
//               <button 
//                 onClick={handleSignOut}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 Sign Out
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center space-x-4">
//               <Link href="/auth" className="text-gray-700 hover:text-gray-900">
//                 Sign In
//               </Link>
//               <Link href="/auth?mode=signup" className="text-blue-600 hover:text-blue-800">
//                 Sign Up
//               </Link>
//             </div>
//           )}
//         </div>
//       </header>
      
//       <main className="container mx-auto px-4 py-8">
//         {children}
//       </main>
//     </div>
//   );
// }

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