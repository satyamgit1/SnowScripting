// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { auth } from '../lib/firebase';
// import { 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword, 
//   updateProfile,
//   GoogleAuthProvider,
//   signInWithPopup
// } from 'firebase/auth';
// import Link from 'next/link';

// export default function AuthPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [displayName, setDisplayName] = useState('');
//   const [error, setError] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleAuthSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       if (isLogin) {
//         // Email sign in
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         // Email sign up
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         await updateProfile(userCredential.user, { displayName });
//       }
//       router.push('/dashboard');
//     } catch (err) {
//       setError(getErrorMessage(err.code));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     setError('');
//     setLoading(true);
    
//     try {
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//       router.push('/dashboard');
//     } catch (err) {
//       setError(getErrorMessage(err.code));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getErrorMessage = (code) => {
//     switch (code) {
//       case 'auth/email-already-in-use':
//         return 'Email already in use';
//       case 'auth/invalid-email':
//         return 'Invalid email';
//       case 'auth/weak-password':
//         return 'Password should be at least 6 characters';
//       case 'auth/user-not-found':
//         return 'User not found';
//       case 'auth/wrong-password':
//         return 'Wrong password';
//       case 'auth/popup-closed-by-user':
//         return 'Sign in cancelled';
//       default:
//         return 'Authentication failed';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           {isLogin ? 'Sign in to your account' : 'Create a new account'}
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
//               {error}
//             </div>
//           )}

//           {/* Google Sign-In Button */}
//           <div>
//             <button
//               onClick={handleGoogleSignIn}
//               disabled={loading}
//               className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//               </svg>
//               {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
//             </button>
//           </div>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with {isLogin ? 'email' : 'your email'}
//                 </span>
//               </div>
//             </div>
//           </div>

//           <form className="mt-6 space-y-6" onSubmit={handleAuthSubmit}>
//             {!isLogin && (
//               <div>
//                 <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="displayName"
//                     name="displayName"
//                     type="text"
//                     required
//                     value={displayName}
//                     onChange={(e) => setDisplayName(e.target.value)}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </div>
//               </div>
//             )}

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete={isLogin ? "current-password" : "new-password"}
//                   required
//                   minLength={6}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
//               >
//                 {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-4 text-center text-sm text-gray-600">
//             {isLogin ? (
//               <>
//                 Don't have an account?{' '}
//                 <button 
//                   onClick={() => setIsLogin(false)}
//                   className="font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   Sign up
//                 </button>
//               </>
//             ) : (
//               <>
//                 Already have an account?{' '}
//                 <button 
//                   onClick={() => setIsLogin(true)}
//                   className="font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   Sign in
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import Link from 'next/link';
import { FaServicestack } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
      }
      router.push('/dashboard');
    } catch (err) {
      setError(getErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err) {
      setError(getErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Email already in use';
      case 'auth/invalid-email':
        return 'Invalid email';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters';
      case 'auth/user-not-found':
        return 'User not found';
      case 'auth/wrong-password':
        return 'Wrong password';
      case 'auth/popup-closed-by-user':
        return 'Sign in cancelled';
      default:
        return 'Authentication failed';
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="relative px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <FaServicestack className="text-3xl text-orange-600" />
          <span className="text-2xl font-bold text-orange-600">ScriptHub</span>
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</Link>
          <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact Us</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/auth" className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Sign In</Link>
          <Link 
            href="/auth" 
            className="px-6 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-md hover:shadow-orange-500/30"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Auth Form Content */}
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Google Sign-In Button */}
            <div>
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
              </button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with {isLogin ? 'email' : 'your email'}
                  </span>
                </div>
              </div>
            </div>

            <form className="mt-6 space-y-6" onSubmit={handleAuthSubmit}>
              {!isLogin && (
                <div>
                  <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="displayName"
                      name="displayName"
                      type="text"
                      required
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setIsLogin(false)}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button 
                    onClick={() => setIsLogin(true)}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
