
// import { useState, useRef } from "react";
// import Link from "next/link";
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
//   FiUserPlus
// } from "react-icons/fi";
// import { FaServicestack } from "react-icons/fa";

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
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center space-x-2">
//           <FaServicestack className="text-2xl text-emerald-400" />
//           <span className={`text-xl font-bold ${colors.primaryText}`}>
//             NowScript
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


// import { useState, useRef } from "react";
// import Link from "next/link";
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
//   FiUserPlus
// } from "react-icons/fi";
// import { FaServicestack } from "react-icons/fa";

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
//       ref={containerRef}  // Added ref here
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center space-x-2">
//           <FaServicestack className="text-2xl text-emerald-400" />
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
//   FiUserPlus
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
//         <Link href="/TeamCarousel" className="flex items-center space-x-2">
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
    }
    setMobileMenuOpen(false);
  };
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur-md border-b border-gray-700 z-50 shadow-lg"
      style={{ y: headerY }}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image 
              src="/snowslogo.png" // Replace with your logo path
              alt="SnowScripting Logo"
              fill
              className="object-contain"
              sizes="60px"
              priority // Optional: if this is above-the-fold content
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
          <Link href="/TeamCarousel" className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
            <FiUsers className="w-4 h-4" />
            <span>Our Team</span>
          </Link>
          <Link href="/blog" className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
            <FiBook className="w-4 h-4" />
            <span>Blog</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
            <FiMail className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth" className="flex items-center space-x-1.5 px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
            <FiLogIn className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
          <Link href="/auth" className={`flex items-center space-x-1.5 px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-emerald-500/20 ${colors.primaryHover}`}>
            <FiUserPlus className="w-4 h-4" />
            <span>Get Started</span>
          </Link>
        </div>
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-emerald-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <Link href="/TeamCarousel" className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                <FiUsers className="w-5 h-5" />
                <span>Our Team</span>
              </Link>
              <Link href="/blog" className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                <FiBook className="w-5 h-5" />
                <span>Blog</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                <FiMail className="w-5 h-5" />
                <span>Contact</span>
              </Link>
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link href="/auth" className={`flex items-center justify-center space-x-2 w-full py-2.5 text-center bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all`}>
                  <FiUserPlus className="w-5 h-5" />
                  <span>Get Started</span>
                </Link>
                <Link href="/auth" className="flex items-center justify-center space-x-2 w-full py-2.5 text-center text-emerald-400 rounded-lg font-medium hover:bg-gray-700 transition-all">
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