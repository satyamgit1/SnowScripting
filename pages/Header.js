

// import { useState, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   FiMenu, 
//   FiX, 
//   FiArrowRight,
//   FiGrid,
//   FiStar,
//   FiBook,
//   FiMail,
//   FiLogIn,
//   FiUserPlus,
//   FiUsers
// } from "react-icons/fi";
// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });
  
//   const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const colors = {
//     primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600",
//     primary: "from-emerald-500 to-emerald-700",
//     primaryHover: "hover:from-emerald-600 hover:to-emerald-800"
//   };
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//     setMobileMenuOpen(false);
//   };
//   return (
//     <motion.header 
//       className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur-md border-b border-gray-700 z-50 shadow-lg"
//       style={{ y: headerY }}
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="relative w-8 h-8">
//             <Image 
//               src="/snowslogo.png" // Replace with your logo path
//               alt="SnowScripting Logo"
//               fill
//               className="object-contain"
//               sizes="60px"
//               priority // Optional: if this is above-the-fold content
//             />
//           </div>
//           <span className={`text-xl font-bold ${colors.primaryText}`}>
//             SnowScripting
//           </span>
//         </Link>
//         {/* Desktop navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           <button 
//             onClick={() => scrollToSection('features')} 
//             className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
//           >
//             <FiGrid className="w-4 h-4" />
//             <span>Features</span>
//           </button>
//           <button 
//             onClick={() => scrollToSection('testimonials')} 
//             className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
//           >
//             <FiStar className="w-4 h-4" />
//             <span>Testimonials</span>
//           </button>
//           <Link href="/TeamCarousel" className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
//             <FiUsers className="w-4 h-4" />
//             <span>Our Team</span>
//           </Link>
//           <Link href="/blog" className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
//             <FiBook className="w-4 h-4" />
//             <span>Blog</span>
//           </Link>
//           <Link href="/contact" className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
//             <FiMail className="w-4 h-4" />
//             <span>Contact</span>
//           </Link>
//         </nav>
//         <div className="hidden md:flex items-center space-x-4">
//           <Link href="/auth" className="flex items-center space-x-1.5 px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
//             <FiLogIn className="w-4 h-4" />
//             <span>Sign In</span>
//           </Link>
//           <Link href="/auth" className={`flex items-center space-x-1.5 px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-emerald-500/20 ${colors.primaryHover}`}>
//             <FiUserPlus className="w-4 h-4" />
//             <span>Get Started</span>
//           </Link>
//         </div>
//         {/* Mobile menu button */}
//         <button 
//           className="md:hidden p-2 text-gray-300 hover:text-emerald-400"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//         </button>
//       </div>
//       {/* Mobile menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden overflow-hidden bg-gray-800"
//           >
//             <div className="px-6 py-4 space-y-4">
//               <button 
//                 onClick={() => scrollToSection('features')} 
//                 className="flex items-center space-x-3 w-full text-left py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
//               >
//                 <FiGrid className="w-5 h-5" />
//                 <span>Features</span>
//               </button>
//               <button 
//                 onClick={() => scrollToSection('testimonials')} 
//                 className="flex items-center space-x-3 w-full text-left py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
//               >
//                 <FiStar className="w-5 h-5" />
//                 <span>Testimonials</span>
//               </button>
//               <Link href="/TeamCarousel" className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
//                 <FiUsers className="w-5 h-5" />
//                 <span>Our Team</span>
//               </Link>
//               <Link href="/blog" className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
//                 <FiBook className="w-5 h-5" />
//                 <span>Blog</span>
//               </Link>
//               <Link href="/contact" className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
//                 <FiMail className="w-5 h-5" />
//                 <span>Contact</span>
//               </Link>
//               <div className="pt-4 border-t border-gray-700 space-y-3">
//                 <Link href="/auth" className={`flex items-center justify-center space-x-2 w-full py-2.5 text-center bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all`}>
//                   <FiUserPlus className="w-5 h-5" />
//                   <span>Get Started</span>
//                 </Link>
//                 <Link href="/auth" className="flex items-center justify-center space-x-2 w-full py-2.5 text-center text-emerald-400 rounded-lg font-medium hover:bg-gray-700 transition-all">
//                   <FiLogIn className="w-5 h-5" />
//                   <span>Sign In</span>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  FiMenu, 
  FiX, 
  FiArrowRight,
  FiGrid,
  FiStar,
  FiBook,
  FiMail,
  FiLogIn,
  FiUserPlus,
  FiUsers
} from "react-icons/fi";
import { trackEvent } from "../lib/gtag";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const colors = {
    primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600",
    primary: "from-emerald-500 to-emerald-700",
    primaryHover: "hover:from-emerald-600 hover:to-emerald-800"
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      trackEvent({
        action: 'header_navigation',
        category: 'engagement',
        label: `scroll_to_${id}`
      });
    }
    setMobileMenuOpen(false);
  };

  const trackAuthClick = (actionType) => {
    trackEvent({
      action: 'auth_click',
      category: 'engagement',
      label: actionType === 'signin' ? 'sign_in_click' : 'get_started_click'
    });
  };

  const trackMenuToggle = () => {
    trackEvent({
      action: 'menu_toggle',
      category: 'ui_interaction',
      label: mobileMenuOpen ? 'menu_close' : 'menu_open'
    });
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const trackNavItemClick = (itemName) => {
    trackEvent({
      action: 'nav_item_click',
      category: 'navigation',
      label: itemName.toLowerCase().replace(' ', '_')
    });
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur-md border-b border-gray-700 z-50 shadow-lg"
      style={{ y: headerY }}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with tracking */}
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

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
          >
            <FiGrid className="w-4 h-4" />
            <span>Features</span>
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
          >
            <FiStar className="w-4 h-4" />
            <span>Testimonials</span>
          </button>
          <Link 
            href="/TeamCarousel" 
            className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            onClick={() => trackNavItemClick('Our Team')}
          >
            <FiUsers className="w-4 h-4" />
            <span>Our Team</span>
          </Link>
          <Link 
            href="/blog" 
            className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            onClick={() => trackNavItemClick('Blog')}
          >
            <FiBook className="w-4 h-4" />
            <span>Blog</span>
          </Link>
          <Link 
            href="/contact" 
            className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            onClick={() => trackNavItemClick('Contact')}
          >
            <FiMail className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/auth" 
            className="flex items-center space-x-1.5 px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            onClick={() => trackAuthClick('signin')}
          >
            <FiLogIn className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
          <Link 
            href="/auth" 
            className={`flex items-center space-x-1.5 px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-emerald-500/20 ${colors.primaryHover}`}
            onClick={() => trackAuthClick('signup')}
          >
            <FiUserPlus className="w-4 h-4" />
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-emerald-400"
          onClick={trackMenuToggle}
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-gray-800"
          >
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="flex items-center space-x-3 w-full text-left py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              >
                <FiGrid className="w-5 h-5" />
                <span>Features</span>
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="flex items-center space-x-3 w-full text-left py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              >
                <FiStar className="w-5 h-5" />
                <span>Testimonials</span>
              </button>
              <Link 
                href="/TeamCarousel" 
                className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                onClick={() => {
                  trackNavItemClick('Our Team');
                  setMobileMenuOpen(false);
                }}
              >
                <FiUsers className="w-5 h-5" />
                <span>Our Team</span>
              </Link>
              <Link 
                href="/blog" 
                className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                onClick={() => {
                  trackNavItemClick('Blog');
                  setMobileMenuOpen(false);
                }}
              >
                <FiBook className="w-5 h-5" />
                <span>Blog</span>
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                onClick={() => {
                  trackNavItemClick('Contact');
                  setMobileMenuOpen(false);
                }}
              >
                <FiMail className="w-5 h-5" />
                <span>Contact</span>
              </Link>
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link 
                  href="/auth" 
                  className={`flex items-center justify-center space-x-2 w-full py-2.5 text-center bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all`}
                  onClick={() => {
                    trackAuthClick('signup');
                    setMobileMenuOpen(false);
                  }}
                >
                  <FiUserPlus className="w-5 h-5" />
                  <span>Get Started</span>
                </Link>
                <Link 
                  href="/auth" 
                  className="flex items-center justify-center space-x-2 w-full py-2.5 text-center text-emerald-400 rounded-lg font-medium hover:bg-gray-700 transition-all"
                  onClick={() => {
                    trackAuthClick('signin');
                    setMobileMenuOpen(false);
                  }}
                >
                  <FiLogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}