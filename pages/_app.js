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
import { auth } from '../lib/firebase';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Don't redirect if we're on the landing page or auth page
      if (['/', '/auth'].includes(router.pathname)) return;
      
      // Redirect to auth if not logged in and trying to access protected routes
      if (!user) {
        router.push('/auth');
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <AuthProvider>
      {/* Only wrap app routes with Layout - exclude landing and auth pages */}
      {router.pathname === '/' || router.pathname === '/auth' ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </AuthProvider>
  );
}