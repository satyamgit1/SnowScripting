// import { AuthProvider } from '../services/auth'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { auth } from '../lib/firebase'
// import '../styles/globals.css'
// import Layout from '../components/Layout'

// export default function App({ Component, pageProps }) {
//   const router = useRouter()

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (!user && router.pathname !== '/auth') {
//         router.push('/auth')
//       }
//     })
//     return () => unsubscribe()
//   }, [router])

//   return (
//     <AuthProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </AuthProvider>
//   )
// }


// pages/_app.js
import { AuthProvider } from '../services/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';  // Now correctly importing from lib/firebase.js
import '../styles/globals.css';
import Layout from '../components/Layout';  // Importing the actual Layout component

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user && router.pathname !== '/auth') {
        router.push('/auth');
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}