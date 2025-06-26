// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX, FiArrowRight, FiBookOpen, FiHome, FiMail, FiUser } from "react-icons/fi";
// import { FaServicestack, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
// import { useState } from "react"; // Import useState

// export default function Blog() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // ServiceNow-inspired color scheme (more creative and beautiful)
//   const colors = {
//     primary: "from-[#2a5a8e] to-[#1e8c94]",
//     primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-[#2a5a8e] to-[#1e8c94]",
//     primaryHover: "hover:from-[#1b4f74] hover:to-[#1e8c94]",
//     secondary: "bg-white",
//     accent: "bg-[#1e8c94]",
//     light: "bg-[#f4f8fb]",
//     dark: "bg-[#1b4f74]",
//     buttonHover: "hover:bg-[#0f7f71] hover:text-white"
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
//     <>
//       <Head>
//         <title>Blog | NowScript</title>
//         <meta name="description" content="Interesting facts and blog posts about NowScript and ServiceNow" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Animated background elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
//         <motion.div 
//           className="absolute top-1/4 -right-20 w-96 h-96 bg-[#1e8c94] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 40, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-1/3 -left-20 w-96 h-96 bg-[#2a5a8e] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, -40, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 5
//           }}
//         />
//       </div>

//       {/* Enhanced Navbar with smooth effects */}
//       <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 z-50 shadow-xl transition-all duration-500">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link href="/" className="flex items-center space-x-2 group">
//             <FaServicestack className="text-2xl text-[#2a5a8e] group-hover:text-[#1e8c94] transition-colors duration-300" />
//             <span className={`text-xl font-bold ${colors.primaryText} group-hover:bg-gradient-to-r group-hover:from-[#2a5a8e] group-hover:to-[#1e8c94] transition-all`}>
//               NowScript
//             </span>
//           </Link>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="flex items-center text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
//               <FiHome className="mr-2" /> Home
//             </Link>
//             <Link href="/blog" className="flex items-center text-[#2a5a8e] font-medium">
//               <FiBookOpen className="mr-2" /> Blog
//             </Link>
//             <Link href="/contact" className="flex items-center text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
//               <FiMail className="mr-2" /> Contact
//             </Link>
//           </nav>

//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/auth" className="flex items-center px-4 py-2 text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
//               <FiUser className="mr-2" /> Sign In
//             </Link>
//             <Link href="/auth" className={`flex items-center px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-[#2a5a8e]/20 ${colors.primaryHover}`}>
//               Get Started <FiArrowRight className="ml-2" />
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden p-2 text-gray-600 hover:text-[#2a5a8e] transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm"
//             >
//               <div className="px-6 py-4 space-y-4">
//                 <Link href="/" className="flex items-center py-2 text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
//                   <FiHome className="mr-3" /> Home
//                 </Link>
//                 <Link href="/blog" className="flex items-center py-2 text-[#2a5a8e] font-medium">
//                   <FiBookOpen className="mr-3" /> Blog
//                 </Link>
//                 <Link href="/contact" className="flex items-center py-2 text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
//                   <FiMail className="mr-3" /> Contact
//                 </Link>
//                 <div className="pt-4 border-t border-gray-100 space-y-3">
//                   <Link href="/auth" className={`flex items-center justify-center w-full py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all`}>
//                     Get Started <FiArrowRight className="ml-2" />
//                   </Link>
//                   <Link href="/auth" className="flex items-center justify-center w-full py-2.5 text-[#2a5a8e] rounded-lg font-medium hover:bg-[#2a5a8e]/20 transition-all">
//                     <FiUser className="mr-2" /> Sign In
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12 mt-24">
//         {/* Article Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00b5a8] text-white text-sm font-medium mb-6">
//             <span className="mr-2">📚</span> Latest Insights
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
//             <span className={colors.primaryText}>ServiceNow</span> Development Insights
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover the latest trends, tips, and best practices in ServiceNow development
//           </p>
//         </motion.div>

//         {/* Featured Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
//         >
//           <Image 
//             src="/snlogo.png" 
//             alt="ServiceNow Platform" 
//             width={1200} 
//             height={630} 
//             className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
//             priority
//           />
//         </motion.div>

//         {/* Article Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="prose prose-lg max-w-4xl mx-auto"
//         >
//           <p className="text-xl text-gray-700 leading-relaxed mb-8">
//             ServiceNow is revolutionizing how businesses manage digital workflows and automate key processes. From IT service management to customer service and HR operations, ServiceNow provides comprehensive solutions that transform organizational efficiency.
//           </p>

//           <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center">
//             <span className="w-8 h-8 bg-[#00b5a8] text-white rounded-full flex items-center justify-center mr-4">1</span>
//             What is ServiceNow?
//           </h2>
//           <p className="mb-6">
//             ServiceNow is a cloud-based platform offering software solutions for business process automation. It excels in workflow automation, incident management, and service desk operations, connecting people, systems, and data to enhance efficiency and reduce costs.
//           </p>

//           <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center">
//             <span className="w-8 h-8 bg-[#00b5a8] text-white rounded-full flex items-center justify-center mr-4">2</span>
//             Key ServiceNow Products
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">IT Service Management</h3>
//               <p>Manages incidents, service requests, and change management to streamline IT operations and improve service delivery.</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">Customer Service Management</h3>
//               <p>Enables businesses to handle customer inquiries and support tickets with greater efficiency and visibility.</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">HR Service Delivery</h3>
//               <p>Automates HR tasks and creates seamless employee experiences through digital workflows.</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">Governance, Risk & Compliance</h3>
//               <p>Provides comprehensive tools for managing risks and meeting compliance requirements effectively.</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#1b4f74] text-gray-400 py-16 mt-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <div className="flex items-center space-x-3 mb-6">
//                 <FaServicestack className="text-2xl text-[#00b5a8]" />
//                 <span className="text-xl font-bold text-white">
//                   NowScript
//                 </span>
//               </div>
//               <p className="mb-6">
//                 The complete solution for ServiceNow script management and developer productivity.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <FaTwitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <FaGithub className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <FaLinkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <p className="mb-4 md:mb-0">
//               © {new Date().getFullYear()} NowScript. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="hover:text-white transition-colors">Privacy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms</a>
//               <a href="#" className="hover:text-white transition-colors">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX, FiArrowRight, FiBookOpen, FiHome, FiMail, FiUser } from "react-icons/fi";
// import { FaServicestack, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
// import { useState } from "react";

// export default function Blog() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Dark theme with green/emerald color scheme
//   const colors = {
//     primary: "from-emerald-600 to-green-600",
//     primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400",
//     primaryHover: "hover:from-emerald-500 hover:to-green-500",
//     secondary: "bg-gray-900",
//     accent: "bg-emerald-600",
//     light: "bg-gray-800",
//     dark: "bg-gray-900",
//     buttonHover: "hover:bg-emerald-500 hover:text-gray-900"
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
//     <>
//       <Head>
//         <title>Blog | NowScript</title>
//         <meta name="description" content="Interesting facts and blog posts about NowScript and ServiceNow" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Animated background elements - updated colors */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gray-900">
//         <motion.div 
//           className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 40, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-1/3 -left-20 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, -40, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 5
//           }}
//         />
//       </div>

//       {/* Enhanced Navbar with dark theme */}
//       <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md border-b border-gray-800 z-50 shadow-xl transition-all duration-500">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link href="/" className="flex items-center space-x-2 group">
//             <FaServicestack className="text-2xl text-emerald-400 group-hover:text-green-400 transition-colors duration-300" />
//             <span className={`text-xl font-bold ${colors.primaryText} group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 transition-all`}>
//               NowScript
//             </span>
//           </Link>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium">
//               <FiHome className="mr-2" /> Home
//             </Link>
//             <Link href="/blog" className="flex items-center text-emerald-400 font-medium">
//               <FiBookOpen className="mr-2" /> Blog
//             </Link>
//             <Link href="/contact" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium">
//               <FiMail className="mr-2" /> Contact
//             </Link>
//           </nav>

//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/auth" className="flex items-center px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
//               <FiUser className="mr-2" /> Sign In
//             </Link>
//             <Link href="/auth" className={`flex items-center px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-emerald-400/20 ${colors.primaryHover}`}>
//               Get Started <FiArrowRight className="ml-2" />
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden p-2 text-gray-400 hover:text-emerald-400 transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm"
//             >
//               <div className="px-6 py-4 space-y-4">
//                 <Link href="/" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
//                   <FiHome className="mr-3" /> Home
//                 </Link>
//                 <Link href="/blog" className="flex items-center py-2 text-emerald-400 font-medium">
//                   <FiBookOpen className="mr-3" /> Blog
//                 </Link>
//                 <Link href="/contact" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
//                   <FiMail className="mr-3" /> Contact
//                 </Link>
//                 <div className="pt-4 border-t border-gray-800 space-y-3">
//                   <Link href="/auth" className={`flex items-center justify-center w-full py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all`}>
//                     Get Started <FiArrowRight className="ml-2" />
//                   </Link>
//                   <Link href="/auth" className="flex items-center justify-center w-full py-2.5 text-emerald-400 rounded-lg font-medium hover:bg-emerald-400/20 transition-all">
//                     <FiUser className="mr-2" /> Sign In
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12 mt-24">
//         {/* Article Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium mb-6">
//             <span className="mr-2">📚</span> Latest Insights
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
//             <span className={colors.primaryText}>ServiceNow</span> Development Insights
//           </h1>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Discover the latest trends, tips, and best practices in ServiceNow development
//           </p>
//         </motion.div>

//         {/* Featured Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
//         >
//           <Image 
//             src="/snlogo.png" 
//             alt="ServiceNow Platform" 
//             width={1200} 
//             height={630} 
//             className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
//             priority
//           />
//         </motion.div>

//         {/* Article Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="prose prose-lg max-w-4xl mx-auto dark:prose-invert"
//         >
//           <p className="text-xl text-gray-300 leading-relaxed mb-8">
//             ServiceNow is revolutionizing how businesses manage digital workflows and automate key processes. From IT service management to customer service and HR operations, ServiceNow provides comprehensive solutions that transform organizational efficiency.
//           </p>

//           <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center">
//             <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">1</span>
//             What is ServiceNow?
//           </h2>
//           <p className="mb-6 text-gray-300">
//             ServiceNow is a cloud-based platform offering software solutions for business process automation. It excels in workflow automation, incident management, and service desk operations, connecting people, systems, and data to enhance efficiency and reduce costs.
//           </p>

//           <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center">
//             <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">2</span>
//             Key ServiceNow Products
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow hover:border-emerald-500">
//               <h3 className="text-xl font-semibold text-emerald-400 mb-3">IT Service Management</h3>
//               <p className="text-gray-300">Manages incidents, service requests, and change management to streamline IT operations and improve service delivery.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow hover:border-emerald-500">
//               <h3 className="text-xl font-semibold text-emerald-400 mb-3">Customer Service Management</h3>
//               <p className="text-gray-300">Enables businesses to handle customer inquiries and support tickets with greater efficiency and visibility.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow hover:border-emerald-500">
//               <h3 className="text-xl font-semibold text-emerald-400 mb-3">HR Service Delivery</h3>
//               <p className="text-gray-300">Automates HR tasks and creates seamless employee experiences through digital workflows.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow hover:border-emerald-500">
//               <h3 className="text-xl font-semibold text-emerald-400 mb-3">Governance, Risk & Compliance</h3>
//               <p className="text-gray-300">Provides comprehensive tools for managing risks and meeting compliance requirements effectively.</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer - Dark theme */}
//       <footer className="bg-gray-900 text-gray-400 py-16 mt-20 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <div className="flex items-center space-x-3 mb-6">
//                 <FaServicestack className="text-2xl text-emerald-400" />
//                 <span className="text-xl font-bold text-white">
//                   NowScript
//                 </span>
//               </div>
//               <p className="mb-6 text-gray-400">
//                 The complete solution for ServiceNow script management and developer productivity.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                   <FaTwitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                   <FaGithub className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                   <FaLinkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Roadmap</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <p className="mb-4 md:mb-0 text-gray-500">
//               © {new Date().getFullYear()} NowScript. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
//               <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
//               <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }


// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX, FiArrowRight, FiBookOpen, FiHome, FiMail, FiUser, FiExternalLink } from "react-icons/fi";
// import { FaServicestack, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
// import { SiServicenow } from "react-icons/si";
// import { useState } from "react";

// export default function Blog() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [expandedCard, setExpandedCard] = useState(null);

//   // Emerald/green color scheme with dark theme
//   const colors = {
//     primary: "from-emerald-500 to-green-500",
//     primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400",
//     primaryHover: "hover:from-emerald-400 hover:to-green-400",
//     secondary: "bg-gray-900",
//     accent: "bg-emerald-600",
//     light: "bg-gray-800",
//     dark: "bg-gray-950",
//     buttonHover: "hover:bg-emerald-500 hover:text-gray-900",
//     cardHover: "hover:border-emerald-400 hover:shadow-emerald-500/20"
//   };

//   const toggleCardExpand = (id) => {
//     setExpandedCard(expandedCard === id ? null : id);
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

//   // ServiceNow products data
//   const products = [
//     {
//       id: 1,
//       title: "IT Service Management (ITSM)",
//       description: "Comprehensive IT service delivery solution that transforms service management across the enterprise.",
//       features: [
//         "Incident and problem management",
//         "Change and release management",
//         "Service catalog and request management",
//         "Configuration management database (CMDB)"
//       ],
//       icon: "🖥️"
//     },
//     {
//       id: 2,
//       title: "Customer Service Management (CSM)",
//       description: "Deliver exceptional customer service experiences across any channel.",
//       features: [
//         "Omnichannel case management",
//         "Customer self-service portal",
//         "Field service management",
//         "Customer journey mapping"
//       ],
//       icon: "👥"
//     },
//     {
//       id: 3,
//       title: "Human Resources Service Delivery (HRSD)",
//       description: "Streamline HR services and create exceptional employee experiences.",
//       features: [
//         "Employee service center",
//         "Case and knowledge management",
//         "Onboarding and offboarding",
//         "Benefits administration"
//       ],
//       icon: "👔"
//     },
//     {
//       id: 4,
//       title: "Security Operations (SecOps)",
//       description: "Improve security operations with automated vulnerability response.",
//       features: [
//         "Vulnerability response",
//         "Threat intelligence",
//         "Security incident response",
//         "Risk management"
//       ],
//       icon: "🔒"
//     }
//   ];

//   // ServiceNow benefits
//   const benefits = [
//     {
//       title: "Workflow Automation",
//       description: "Automate repetitive tasks and streamline business processes across departments.",
//       icon: "⚙️"
//     },
//     {
//       title: "Single System of Record",
//       description: "Eliminate data silos with a unified platform for all business operations.",
//       icon: "📊"
//     },
//     {
//       title: "AI-Powered Insights",
//       description: "Leverage AI and machine learning for predictive analytics and intelligent automation.",
//       icon: "🧠"
//     },
//     {
//       title: "Low-Code Development",
//       description: "Build applications quickly with ServiceNow's App Engine and low-code tools.",
//       icon: "👨‍💻"
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>ServiceNow Insights | NowScript</title>
//         <meta name="description" content="Comprehensive guide to ServiceNow platform, features, and best practices" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Animated background elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gray-950">
//         <motion.div 
//           className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 40, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-1/3 -left-20 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, -40, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 5
//           }}
//         />
//         {/* Decorative grid pattern */}
//         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] opacity-5"></div>
//       </div>

//       {/* Enhanced Navbar with glass effect */}
//       <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50 shadow-xl transition-all duration-500">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link href="/" className="flex items-center space-x-2 group">
//             <SiServicenow className="text-2xl text-emerald-400 group-hover:text-green-400 transition-colors duration-300" />
//             <span className={`text-xl font-bold ${colors.primaryText} group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-green-300 transition-all`}>
//               NowScript
//             </span>
//           </Link>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium group">
//               <FiHome className="mr-2 group-hover:scale-110 transition-transform" /> Home
//             </Link>
//             <Link href="/blog" className="flex items-center text-emerald-400 font-medium group">
//               <FiBookOpen className="mr-2 group-hover:scale-110 transition-transform" /> Blog
//             </Link>
//             <Link href="/contact" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium group">
//               <FiMail className="mr-2 group-hover:scale-110 transition-transform" /> Contact
//             </Link>
//           </nav>

//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/auth" className="flex items-center px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium group">
//               <FiUser className="mr-2 group-hover:scale-110 transition-transform" /> Sign In
//             </Link>
//             <Link href="/auth" className={`flex items-center px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-emerald-400/30 ${colors.primaryHover} group`}>
//               Get Started <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden p-2 text-gray-400 hover:text-emerald-400 transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm"
//             >
//               <div className="px-6 py-4 space-y-4">
//                 <Link href="/" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
//                   <FiHome className="mr-3" /> Home
//                 </Link>
//                 <Link href="/blog" className="flex items-center py-2 text-emerald-400 font-medium">
//                   <FiBookOpen className="mr-3" /> Blog
//                 </Link>
//                 <Link href="/contact" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
//                   <FiMail className="mr-3" /> Contact
//                 </Link>
//                 <div className="pt-4 border-t border-gray-800 space-y-3">
//                   <Link href="/auth" className={`flex items-center justify-center w-full py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all`}>
//                     Get Started <FiArrowRight className="ml-2" />
//                   </Link>
//                   <Link href="/auth" className="flex items-center justify-center w-full py-2.5 text-emerald-400 rounded-lg font-medium hover:bg-emerald-400/10 transition-all">
//                     <FiUser className="mr-2" /> Sign In
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12 mt-24">
//         {/* Hero Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center relative"
//         >
//           <motion.div 
//             className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-xl opacity-50 -z-10"
//             animate={{
//               scale: [1, 1.1, 1],
//               opacity: [0.5, 0.7, 0.5]
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium mb-6 shadow-lg shadow-emerald-500/20">
//             <span className="mr-2">🚀</span> Latest Insights
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
//             Mastering <span className={colors.primaryText}>ServiceNow</span> Development
//           </h1>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Your comprehensive guide to the ServiceNow platform, featuring best practices, tips, and the latest trends in enterprise workflow automation.
//           </p>
//         </motion.div>

//         {/* Featured Image with Decorative Elements */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-16 rounded-2xl overflow-hidden shadow-2xl relative border border-gray-800 hover:border-emerald-400/50 transition-all duration-500 group"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-gray-900/70 z-10 pointer-events-none"></div>
//           <Image 
//             src="/servicenow-platform.jpg" 
//             alt="ServiceNow Platform" 
//             width={1200} 
//             height={630} 
//             className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
//             priority
//           />
//           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent z-20">
//             <div className="flex items-center">
//               <div className="bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm text-emerald-400">
//                 Featured Platform
//               </div>
//               <div className="ml-auto bg-gray-900/80 backdrop-blur-sm rounded-full p-2 border border-gray-800 hover:border-emerald-400 transition-colors">
//                 <FiExternalLink className="text-gray-400 hover:text-emerald-400 transition-colors" />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Article Content */}
//         <div className="max-w-4xl mx-auto">
//           {/* Introduction */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mb-16"
//           >
//             <p className="text-xl text-gray-300 leading-relaxed mb-8">
//               ServiceNow is revolutionizing enterprise workflow automation, offering a cloud-based platform that transforms how organizations manage digital workflows. With over <span className="text-emerald-400 font-medium">7,400 enterprise customers</span> worldwide, ServiceNow has become the leading platform for IT Service Management (ITSM) and beyond.
//             </p>
//             <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
//                 <span className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3">💡</span>
//                 Did You Know?
//               </h3>
//               <p className="text-gray-300">
//                 ServiceNow was founded in 2004 by Fred Luddy, who previously created the first cloud-based IT service management solution at Peregrine Systems. The platform now processes over <span className="text-white font-medium">1.5 billion transactions daily</span> across its customer base.
//               </p>
//             </div>
//           </motion.section>

//           {/* Core Products Section */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="mb-20"
//             id="products"
//           >
//             <div className="flex items-center mb-8">
//               <h2 className="text-3xl font-bold text-white mr-4">Core ServiceNow Products</h2>
//               <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               {products.map((product) => (
//                 <motion.div 
//                   key={product.id}
//                   whileHover={{ y: -5 }}
//                   className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer ${colors.cardHover} backdrop-blur-sm`}
//                   onClick={() => toggleCardExpand(product.id)}
//                 >
//                   <div className="flex items-start mb-4">
//                     <div className="text-2xl mr-4">{product.icon}</div>
//                     <h3 className="text-xl font-semibold text-emerald-400">{product.title}</h3>
//                   </div>
//                   <p className="text-gray-300 mb-4">{product.description}</p>
                  
//                   <AnimatePresence>
//                     {expandedCard === product.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <h4 className="text-sm font-medium text-gray-400 mb-2">KEY FEATURES:</h4>
//                         <ul className="space-y-2 mb-4">
//                           {product.features.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <span className="text-emerald-400 mr-2">•</span>
//                               <span className="text-gray-300">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
                  
//                   <div className="flex justify-between items-center mt-4">
//                     <span className="text-xs text-emerald-400/80">
//                       {expandedCard === product.id ? "Click to collapse" : "Click to expand"}
//                     </span>
//                     <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
//                       <FiExternalLink />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* Platform Benefits */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="mb-20"
//             id="benefits"
//           >
//             <div className="flex items-center mb-8">
//               <h2 className="text-3xl font-bold text-white mr-4">Key Platform Benefits</h2>
//               <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               {benefits.map((benefit, index) => (
//                 <motion.div 
//                   key={index}
//                   whileHover={{ scale: 1.02 }}
//                   className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 backdrop-blur-sm"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="text-2xl mr-4">{benefit.icon}</div>
//                     <h3 className="text-xl font-semibold text-emerald-400">{benefit.title}</h3>
//                   </div>
//                   <p className="text-gray-300">{benefit.description}</p>
//                 </motion.div>
//               ))}
//             </div>
            
//             <div className="bg-gradient-to-r from-emerald-900/30 to-gray-900/70 border border-gray-700 rounded-xl p-6 mb-8 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-white mb-3">Why Enterprises Choose ServiceNow</h3>
//               <p className="text-gray-300 mb-4">
//                 ServiceNow's platform stands out for its ability to create <span className="text-emerald-400">connected experiences</span> across the enterprise. By breaking down silos between departments, organizations achieve:
//               </p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
//                   <div className="text-2xl text-emerald-400 mb-2">30-50%</div>
//                   <div className="text-xs text-gray-400">Reduction in resolution time</div>
//                 </div>
//                 <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
//                   <div className="text-2xl text-emerald-400 mb-2">40-60%</div>
//                   <div className="text-xs text-gray-400">Process efficiency gains</div>
//                 </div>
//                 <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
//                   <div className="text-2xl text-emerald-400 mb-2">25-40%</div>
//                   <div className="text-xs text-gray-400">Cost savings</div>
//                 </div>
//                 <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
//                   <div className="text-2xl text-emerald-400 mb-2">90%+</div>
//                   <div className="text-xs text-gray-400">User satisfaction</div>
//                 </div>
//               </div>
//             </div>
//           </motion.section>

//           {/* Development Section */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 1.0 }}
//             className="mb-20"
//             id="development"
//           >
//             <div className="flex items-center mb-8">
//               <h2 className="text-3xl font-bold text-white mr-4">ServiceNow Development</h2>
//               <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
//             </div>
            
//             <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden mb-8 backdrop-blur-sm">
//               <div className="grid md:grid-cols-2">
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-emerald-400 mb-4">Now Platform Features</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-start">
//                       <div className="bg-emerald-500/10 text-emerald-400 rounded-full p-1 mr-3">
//                         <FiArrowRight className="w-4 h-4" />
//                       </div>
//                       <span className="text-gray-300">App Engine for low-code application development</span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-emerald-500/10 text-emerald-400 rounded-full p-1 mr-3">
//                         <FiArrowRight className="w-4 h-4" />
//                       </div>
//                       <span className="text-gray-300">Flow Designer for workflow automation</span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-emerald-500/10 text-emerald-400 rounded-full p-1 mr-3">
//                         <FiArrowRight className="w-4 h-4" />
//                       </div>
//                       <span className="text-gray-300">Integration Hub for seamless third-party connections</span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-emerald-500/10 text-emerald-400 rounded-full p-1 mr-3">
//                         <FiArrowRight className="w-4 h-4" />
//                       </div>
//                       <span className="text-gray-300">Performance Analytics for data-driven insights</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="bg-gray-900/50 p-6 border-t md:border-t-0 md:border-l border-gray-700">
//                   <h3 className="text-xl font-semibold text-emerald-400 mb-4">Development Tools</h3>
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-400 mb-1">Now CLI</h4>
//                       <p className="text-gray-300 text-sm">Command-line interface for ServiceNow development</p>
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-400 mb-1">Now Experience UI</h4>
//                       <p className="text-gray-300 text-sm">Modern UI framework for creating responsive interfaces</p>
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-400 mb-1">Studio IDE</h4>
//                       <p className="text-gray-300 text-sm">Integrated development environment for ServiceNow</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
//                 <h3 className="text-xl font-semibold text-emerald-400 mb-4">Best Practices</h3>
//                 <ol className="space-y-4">
//                   <li className="flex items-start">
//                     <span className="bg-emerald-500/10 text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
//                     <span className="text-gray-300">Follow ServiceNow's development standards and guidelines</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-emerald-500/10 text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
//                     <span className="text-gray-300">Leverage update sets for migration between instances</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-emerald-500/10 text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
//                     <span className="text-gray-300">Implement proper access controls and security</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-emerald-500/10 text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
//                     <span className="text-gray-300">Optimize client scripts for performance</span>
//                   </li>
//                 </ol>
//               </div>
              
//               <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
//                 <h3 className="text-xl font-semibold text-emerald-400 mb-4">Learning Resources</h3>
//                 <div className="space-y-3">
//                   <a href="#" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group">
//                     <span className="mr-3 group-hover:underline">ServiceNow Developer Documentation</span>
//                     <FiExternalLink className="w-4 h-4" />
//                   </a>
//                   <a href="#" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group">
//                     <span className="mr-3 group-hover:underline">Now Learning Platform</span>
//                     <FiExternalLink className="w-4 h-4" />
//                   </a>
//                   <a href="#" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group">
//                     <span className="mr-3 group-hover:underline">Community Developer Portal</span>
//                     <FiExternalLink className="w-4 h-4" />
//                   </a>
//                   <a href="#" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group">
//                     <span className="mr-3 group-hover:underline">ServiceNow Developer YouTube</span>
//                     <FiExternalLink className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.section>

//           {/* Future Trends Section */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 1.2 }}
//             className="mb-20"
//             id="trends"
//           >
//             <div className="flex items-center mb-8">
//               <h2 className="text-3xl font-bold text-white mr-4">Future Trends</h2>
//               <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
//             </div>
            
//             <div className="bg-gradient-to-br from-emerald-900/30 to-gray-900/70 border border-gray-700 rounded-xl p-8 mb-8 backdrop-blur-sm">
//               <h3 className="text-2xl font-bold text-white mb-6 text-center">The Future of ServiceNow</h3>
              
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
//                   <div className="text-emerald-400 text-3xl mb-4">AI</div>
//                   <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Automation</h4>
//                   <p className="text-gray-300 text-sm">Predictive intelligence and machine learning will drive more autonomous service management.</p>
//                 </div>
//                 <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
//                   <div className="text-emerald-400 text-3xl mb-4">🧩</div>
//                   <h4 className="text-lg font-semibold text-white mb-2">Hyperautomation</h4>
//                   <p className="text-gray-300 text-sm">Combining RPA, AI, and process mining for end-to-end automation.</p>
//                 </div>
//                 <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
//                   <div className="text-emerald-400 text-3xl mb-4">🌐</div>
//                   <h4 className="text-lg font-semibold text-white mb-2">Industry-Specific Solutions</h4>
//                   <p className="text-gray-300 text-sm">Expansion into vertical-specific workflows for healthcare, finance, and more.</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="text-center">
//               <Link href="/contact" className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-emerald-500/30 ${colors.primaryHover} group`}>
//                 Get Started with ServiceNow <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </motion.section>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-16 mt-20 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <div className="flex items-center space-x-3 mb-6">
//                 <SiServicenow className="text-2xl text-emerald-400" />
//                 <span className="text-xl font-bold text-white">
//                   NowScript
//                 </span>
//               </div>
//               <p className="mb-6 text-gray-400">
//                 The ultimate toolkit for ServiceNow developers, providing powerful scripts, templates, and automation solutions.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                   <FaTwitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                   <FaGithub className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                   <FaLinkedin className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                   <FaYoutube className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Script Generator</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Workflow Automator</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Integration Toolkit</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Performance Optimizer</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
//                 <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <p className="mb-4 md:mb-0 text-gray-500">
//               © {new Date().getFullYear()} NowScript. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
//               <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
//               <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }




import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight, FiBookOpen, FiHome, FiMail, FiUser, FiExternalLink } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub, FaRegLightbulb, FaCode, FaChartLine, FaCloud } from "react-icons/fa";
import { useState } from "react";

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dark theme with green/emerald color scheme
  const colors = {
    primary: "from-emerald-600 to-green-600",
    primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400",
    primaryHover: "hover:from-emerald-500 hover:to-green-500",
    secondary: "bg-gray-900",
    accent: "bg-emerald-600",
    light: "bg-gray-800",
    dark: "bg-gray-900",
    buttonHover: "hover:bg-emerald-500 hover:text-gray-900"
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

  // ServiceNow features data
  const features = [
    {
      icon: <FaCloud className="text-3xl text-emerald-400" />,
      title: "Cloud-Based Platform",
      description: "ServiceNow operates entirely in the cloud, eliminating the need for on-premise infrastructure and ensuring automatic updates."
    },
    {
      icon: <FaCode className="text-3xl text-emerald-400" />,
      title: "Low-Code Development",
      description: "With its intuitive App Engine, ServiceNow enables rapid application development with minimal coding required."
    },
    {
      icon: <FaChartLine className="text-3xl text-emerald-400" />,
      title: "Workflow Automation",
      description: "Automate complex business processes across departments with ServiceNow's powerful workflow engine."
    },
    {
      icon: <FaRegLightbulb className="text-3xl text-emerald-400" />,
      title: "AI & Machine Learning",
      description: "Leverage built-in AI capabilities like predictive intelligence and virtual agents for smarter operations."
    }
  ];

  // ServiceNow modules data
  const modules = [
    {
      title: "IT Service Management",
      description: "Streamline IT operations with incident, problem, change, and service request management.",
      link: "https://www.servicenow.com/products/itsm.html"
    },
    {
      title: "Customer Service Management",
      description: "Deliver exceptional customer experiences with omnichannel support and case management.",
      link: "https://www.servicenow.com/products/customer-service-management.html"
    },
    {
      title: "HR Service Delivery",
      description: "Transform HR services with employee and manager self-service portals and case management.",
      link: "https://www.servicenow.com/products/hr-service-delivery.html"
    },
    {
      title: "Security Operations",
      description: "Improve security posture with vulnerability response and threat intelligence capabilities.",
      link: "https://www.servicenow.com/products/security-operations.html"
    },
    {
      title: "App Engine",
      description: "Build custom applications quickly with low-code development tools and templates.",
      link: "https://www.servicenow.com/products/app-engine.html"
    },
    {
      title: "Integration Hub",
      description: "Connect ServiceNow with other enterprise systems using pre-built integrations.",
      link: "https://www.servicenow.com/products/integration-hub.html"
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Increased Efficiency",
      percent: "75%",
      description: "Average reduction in manual processes reported by ServiceNow customers"
    },
    {
      title: "Cost Reduction",
      percent: "40%",
      description: "Typical decrease in operational costs after ServiceNow implementation"
    },
    {
      title: "Faster Resolution",
      percent: "60%",
      description: "Improvement in incident resolution times with automated workflows"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | NowScript</title>
        <meta name="description" content="Interesting facts and blog posts about NowScript and ServiceNow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gray-900">
        <motion.div 
          className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 -left-20 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-2xl opacity-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Enhanced Navbar with dark theme */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md border-b border-gray-800 z-50 shadow-xl transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <FaCloud className="text-2xl text-emerald-400 group-hover:text-green-400 transition-colors duration-300" />
            <span className={`text-xl font-bold ${colors.primaryText} group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 transition-all`}>
              NowScript
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              <FiHome className="mr-2" /> Home
            </Link>
            <Link href="/blog" className="flex items-center text-emerald-400 font-medium">
              <FiBookOpen className="mr-2" /> Blog
            </Link>
            <Link href="/contact" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              <FiMail className="mr-2" /> Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth" className="flex items-center px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              <FiUser className="mr-2" /> Sign In
            </Link>
            <Link href="/auth" className={`flex items-center px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-emerald-400/20 ${colors.primaryHover}`}>
              Get Started <FiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-emerald-400 transition-colors"
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
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm"
            >
              <div className="px-6 py-4 space-y-4">
                <Link href="/" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
                  <FiHome className="mr-3" /> Home
                </Link>
                <Link href="/blog" className="flex items-center py-2 text-emerald-400 font-medium">
                  <FiBookOpen className="mr-3" /> Blog
                </Link>
                <Link href="/contact" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
                  <FiMail className="mr-3" /> Contact
                </Link>
                <div className="pt-4 border-t border-gray-800 space-y-3">
                  <Link href="/auth" className={`flex items-center justify-center w-full py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all`}>
                    Get Started <FiArrowRight className="ml-2" />
                  </Link>
                  <Link href="/auth" className="flex items-center justify-center w-full py-2.5 text-emerald-400 rounded-lg font-medium hover:bg-emerald-400/20 transition-all">
                    <FiUser className="mr-2" /> Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 mt-24">
        {/* Article Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium mb-6">
            <span className="mr-2">📚</span> Latest Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            <span className={colors.primaryText}>ServiceNow</span> Development Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the latest trends, tips, and best practices in ServiceNow development
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative group"
        >
          <Image 
            src="/snlogo.png" 
            alt="ServiceNow Platform" 
            width={1200} 
            height={630} 
            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20 flex items-end p-8">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-gray-900/80 rounded-full mb-2">
                Featured Platform
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">The Complete ServiceNow Platform Overview</h2>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-4xl mx-auto dark:prose-invert"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            ServiceNow is revolutionizing how businesses manage digital workflows and automate key processes. From IT service management to customer service and HR operations, ServiceNow provides comprehensive solutions that transform organizational efficiency. In this comprehensive guide, we'll explore the platform's capabilities, benefits, and how it's shaping the future of enterprise workflow automation.
          </p>

          {/* Key Features Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">✨</span>
              Why ServiceNow Stands Out
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-emerald-600/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What is ServiceNow Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">1</span>
              What is ServiceNow?
            </h2>
            <p className="mb-6 text-gray-300">
              ServiceNow is a cloud-based platform that delivers digital workflows that create great experiences and unlock productivity for employees and enterprises. Originally focused on IT service management (ITSM), ServiceNow has expanded to become a comprehensive platform for digital business transformation.
            </p>
            <p className="mb-6 text-gray-300">
              The platform provides a system of action for the enterprise, with a single data model and architecture that connects people, functions, and systems across the organization. This unified approach eliminates silos and provides a single source of truth for all business operations.
            </p>
            
            {/* Stats Section */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-4xl font-bold text-emerald-400 mb-2">{benefit.percent}</h3>
                  <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Products Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">2</span>
              Key ServiceNow Products & Modules
            </h2>
            <p className="mb-8 text-gray-300">
              ServiceNow offers a comprehensive suite of products that extend across various business functions. Here are some of the most widely used modules:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {modules.map((module, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-all hover:border-emerald-500 group"
                >
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 group-hover:text-green-400 transition-colors">{module.title}</h3>
                  <p className="mb-4 text-gray-300">{module.description}</p>
                  <a 
                    href={module.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 hover:text-green-400 transition-colors"
                  >
                    Learn more <FiExternalLink className="ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">3</span>
              ServiceNow Development Ecosystem
            </h2>
            <p className="mb-6 text-gray-300">
              ServiceNow provides a robust development environment with tools and technologies that enable both professional developers and citizen developers to create powerful applications and automate workflows.
            </p>
            
            <div className="my-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-4">Key Development Components</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">ServiceNow Studio:</strong> Integrated development environment for building applications</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">App Engine:</strong> Low-code development platform for creating custom applications</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">Flow Designer:</strong> Visual workflow automation tool with drag-and-drop interface</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">Integration Hub:</strong> Pre-built connectors and integration capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">Now Platform APIs:</strong> REST and GraphQL APIs for extending platform capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Future Trends Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">4</span>
              The Future of ServiceNow
            </h2>
            <p className="mb-6 text-gray-300">
              ServiceNow continues to evolve with new technologies and capabilities that position it as a leader in digital transformation:
            </p>
            
            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">AI-Powered Automation</h3>
                <p className="text-gray-300">ServiceNow is integrating AI and machine learning across its platform to enable predictive intelligence, virtual agents, and automated decision-making.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Industry-Specific Solutions</h3>
                <p className="text-gray-300">Expanding vertical solutions for healthcare, financial services, government, and other industries with tailored workflows and compliance features.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Hyperautomation</h3>
                <p className="text-gray-300">Combining RPA, AI, and process mining to automate complex, end-to-end business processes across the enterprise.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Developer Experience</h3>
                <p className="text-gray-300">Enhanced tools and frameworks to streamline application development and customization on the platform.</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="my-16 bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-8 rounded-xl border border-emerald-900/50">
            <h2 className="text-2xl font-bold text-white mb-4">Final Thoughts</h2>
            <p className="mb-4 text-gray-300">
              ServiceNow has grown from an IT service management tool to a comprehensive platform for digital transformation. Its ability to connect people, processes, and systems across the enterprise makes it uniquely positioned to help organizations navigate the challenges of digital business.
            </p>
            <p className="text-gray-300">
              As the platform continues to evolve with AI, industry solutions, and enhanced developer tools, ServiceNow is becoming an essential platform for enterprises looking to streamline operations, improve employee and customer experiences, and drive innovation.
            </p>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="my-20 bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-900 rounded-full opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-green-900 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with ServiceNow</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Subscribe to our newsletter for the latest ServiceNow tips, tutorials, and industry insights delivered to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <button 
                type="submit" 
                className={`px-6 py-3 bg-gradient-to-r ${colors.primary} text-gray-900 font-medium rounded-lg hover:opacity-90 transition-all shadow-md`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer - Dark theme */}
      <footer className="bg-gray-900 text-gray-400 py-16 mt-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FaCloud className="text-2xl text-emerald-400" />
                <span className="text-xl font-bold text-white">
                  NowScript
                </span>
              </div>
              <p className="mb-6 text-gray-400">
                The complete solution for ServiceNow script management and developer productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-gray-500">
              © {new Date().getFullYear()} NowScript. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}