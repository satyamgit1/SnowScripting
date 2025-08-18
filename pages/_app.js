// import { AuthProvider } from '../services/auth';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { auth } from '../lib/firebase';
// import '../styles/globals.css';
// import Layout from '../components/Layout';
// import useSmoothScroll from '../hooks/useSmoothScroll';

// // Define public routes
// const PUBLIC_ROUTES = [
//   '/',
//   '/auth',
//   '/privacy-policy',
//   '/contact',
//   '/Terms',
//   '/blog',
//   '/About_us',
//   '/About',
//   '/TeamCarousel'
// ];

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
//   useSmoothScroll();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       // Don't redirect if we're on a public route
//       if (PUBLIC_ROUTES.includes(router.pathname)) return;
      
//       // Redirect to auth if not logged in and trying to access protected routes
//       if (!user) {
//         router.push('/auth');
//       }
//     });
//     return () => unsubscribe();
//   }, [router]);

//   return (
//     <AuthProvider>
//       {/* Only wrap protected routes with Layout */}
//       {PUBLIC_ROUTES.includes(router.pathname) ? (
//         <Component {...pageProps} />
//       ) : (
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       )}
//     </AuthProvider>
//   );
// }












import { AuthProvider } from '../services/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import Script from 'next/script';
import GoogleTag from '../components/GoogleTag'; // Add this import
import '../styles/globals.css';
import Layout from '../components/Layout';
import useSmoothScroll from '../hooks/useSmoothScroll';

const PUBLIC_ROUTES = [
  '/',
  '/auth',
  '/privacy-policy',
  '/contact',
  '/Terms',
  '/blog',
  '/About_us',
  '/About',
  '/TeamCarousel',
  '/CareerPage'
];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useSmoothScroll();

  // Track page views
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-VEMQREYR15', {
        page_path: url,
      });
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Existing auth logic
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (PUBLIC_ROUTES.includes(router.pathname)) return;
      if (!user) router.push('/auth');
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <AuthProvider>
      {/* Add Google Tag here */}
      <GoogleTag />

      {/* Existing layout logic */}
      {PUBLIC_ROUTES.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </AuthProvider>
  );
}