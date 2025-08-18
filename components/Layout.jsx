

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
//     <div className="min-h-screen bg-green-200">
//       <header className="bg-emerald-400 shadow">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <Link href="/" className="text-xl font-bold text-green-700 hover:text-green-800">
//             NowScript
//           </Link>
          
//           {user ? (
//             <div className="flex items-center space-x-4">
//               <Link href="/profile" className="flex items-center space-x-2 hover:text-gray-900">
//                 {user.photoURL ? (
//                   <img 
//                     src={user.photoURL} 
//                     className="h-8 w-8 rounded-full" 
//                     alt="Profile"
//                   />
//                 ) : (
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
//                     {user.email?.charAt(0).toUpperCase()}
//                   </div>
//                 )}
//                 <span className="text-gray-700">
//                   {user.displayName || user.email.split('@')[0]}
//                 </span>
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
      
//       <main className="">
//         {children}
//       </main>
//     </div>
//   );
// }


import { useAuth } from '../services/auth';
import Link from 'next/link';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';
import Image from 'next/image';





export default function Layout({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  const colors = {
    primaryText: 'text-[#00c16d]', // Define the color as per your theme
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            onClick={() => trackEvent({
              action: 'navigation',
              category: 'engagement',
              label: 'logo_click'
            })}
          >
            <div className="relative w-8 h-8">
              <Image 
                src="/snowslogo.png"
                alt="SnowScripting Logo"
                fill
                className="object-contain"
                sizes="60px"
                priority
              />
            </div>
            <span className={`text-xl font-bold ${colors.primaryText}`}>
              SnowScripting
            </span>
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link href="/profile" className="flex items-center space-x-2 hover:text-emerald-400">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    className="h-8 w-8 rounded-full" 
                    alt="Profile"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-gray-300">
                  {user.displayName || user.email.split('@')[0]}
                </span>
              </Link>
              <button 
                onClick={handleSignOut}
                className="text-emerald-400 hover:text-emerald-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/auth" className="text-gray-300 hover:text-emerald-400">
                Sign In
              </Link>
              <Link href="/auth?mode=signup" className="text-emerald-400 hover:text-emerald-300">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>
      
      <main className="bg-gray-900">
        {children}
      </main>
    </div>
  );
}


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
//     <div className="min-h-screen bg-gray-900">
//       <header className="bg-gray-800 shadow-lg border-b border-gray-700">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//          <Link 
//           href="/" 
//           className="flex items-center space-x-2"
//           onClick={() => trackEvent({
//             action: 'navigation',
//             category: 'engagement',
//             label: 'logo_click'
//           })}
//         >
//           <div className="relative w-8 h-8">
//             <Image 
//               src="/snowslogo.png"
//               alt="SnowScripting Logo"
//               fill
//               className="object-contain"
//               sizes="60px"
//               priority
//             />
//           </div>
//           <span className={`text-xl font-bold ${colors.primaryText}`}>
//             SnowScripting
//           </span>
//         </Link>
          
//           {user ? (
//             <div className="flex items-center space-x-4">
//               <Link href="/profile" className="flex items-center space-x-2 hover:text-emerald-400">
//                 {user.photoURL ? (
//                   <img 
//                     src={user.photoURL} 
//                     className="h-8 w-8 rounded-full" 
//                     alt="Profile"
//                   />
//                 ) : (
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
//                     {user.email?.charAt(0).toUpperCase()}
//                   </div>
//                 )}
//                 <span className="text-gray-300">
//                   {user.displayName || user.email.split('@')[0]}
//                 </span>
//               </Link>
//               <button 
//                 onClick={handleSignOut}
//                 className="text-emerald-400 hover:text-emerald-300"
//               >
//                 Sign Out
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center space-x-4">
//               <Link href="/auth" className="text-gray-300 hover:text-emerald-400">
//                 Sign In
//               </Link>
//               <Link href="/auth?mode=signup" className="text-emerald-400 hover:text-emerald-300">
//                 Sign Up
//               </Link>
//             </div>
//           )}
//         </div>
//       </header>
      
//       <main className="bg-gray-900">
//         {children}
//       </main>
//     </div>
//   );
// }

