


import { AuthProvider } from '../services/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import '../styles/globals.css';
import Layout from '../components/Layout';
import useSmoothScroll from '../hooks/useSmoothScroll';

// Define public routes
const PUBLIC_ROUTES = [
  '/',
  '/auth',
  '/privacy-policy',
  '/contact',
  '/Terms',
  '/blog',
  '/About_us',
  '/About',
  '/TeamCarousel'
];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useSmoothScroll();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Don't redirect if we're on a public route
      if (PUBLIC_ROUTES.includes(router.pathname)) return;
      
      // Redirect to auth if not logged in and trying to access protected routes
      if (!user) {
        router.push('/auth');
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <AuthProvider>
      {/* Only wrap protected routes with Layout */}
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