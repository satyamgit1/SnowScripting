import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useSmoothScroll = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Smooth scroll on initial load if hash exists
    if (window.location.hash) {
      setTimeout(handleRouteChange, 0);
    }

    // Smooth scroll on route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default useSmoothScroll;