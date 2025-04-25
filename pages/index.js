// // pages/index.js
// import { useAuth } from '../services/auth'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import NoteList from '../components/Notes/NoteList'
// import Link from 'next/link'

// export default function Home() {
//   const { user, loading: authLoading } = useAuth()
//   const router = useRouter()

//   useEffect(() => {
//     if (!authLoading && !user) {
//       router.push('/auth')
//     }
//   }, [user, authLoading, router])

//   if (authLoading || !user) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-xl">Loading...</div>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">
//           My ServiceNow Scripts
//         </h1>
//         <Link 
//           href="/note/new"
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
//         >
//           + New Script
//         </Link>
//       </div>
      
//       <NoteList userId={user.uid} />
//     </div>
//   )
// }


// import Link from 'next/link';
// import Head from 'next/head';

// export default function LandingPage() {
//   return (
//     <>
//       <Head>
//         <title>ScriptVault - ServiceNow Developer Notes</title>
//         <meta name="description" content="Organize and manage all your ServiceNow scripts in one secure place" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         {/* Navigation */}
//         <nav className="px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <span className="text-xl font-bold text-gray-800">ScriptVault</span>
//             </div>
//             <div className="flex items-center space-x-6">
//               <Link href="/auth" className="text-gray-600 hover:text-indigo-600 transition">
//                 Sign In
//               </Link>
//               <Link href="/auth?mode=signup" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md">
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
//             Organize Your ServiceNow <span className="text-indigo-600">Scripts</span> Like Never Before
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
//             The ultimate notebook for ServiceNow developers. Store, categorize, and access your scripts anytime, anywhere.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link href="/auth?mode=signup" className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg text-lg font-medium">
//               Start For Free
//             </Link>
//             <Link href="#features" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition shadow-lg text-lg font-medium border border-gray-200">
//               Explore Features
//             </Link>
//           </div>
//         </section>

//         {/* App Preview */}
//         <div className="max-w-6xl mx-auto px-6 mb-28">
//           <div className="rounded-xl shadow-2xl overflow-hidden border-8 border-white transform rotate-1 hover:rotate-0 transition duration-300">
//             <div className="bg-gray-800 py-3 px-4 flex space-x-2">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//             </div>
//             <img 
//               src="/app-preview.png" // Replace with your actual screenshot
//               alt="ScriptVault App Preview"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>

//         {/* Features Section */}
//         <section id="features" className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-t-3xl">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Powerful Features for Developers</h2>
          
//           <div className="grid md:grid-cols-3 gap-10">
//             {/* Feature 1 */}
//             <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
//               <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Script Organization</h3>
//               <p className="text-gray-600">
//                 Categorize your scripts by type (Business Rules, Client Scripts, etc.), project, or custom tags.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
//               <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Code Formatting</h3>
//               <p className="text-gray-600">
//                 Syntax highlighting and proper formatting for all your ServiceNow scripts.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
//               <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Export</h3>
//               <p className="text-gray-600">
//                 Download your scripts as text, JSON, or XML files with a single click.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="max-w-7xl mx-auto px-6 py-20 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Organize Your Scripts?</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
//             Join hundreds of ServiceNow developers who are saving hours every week with ScriptVault.
//           </p>
//           <Link href="/auth?mode=signup" className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg text-lg font-medium">
//             Get Started - It's Free
//           </Link>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-800 text-white py-12">
//           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-xl font-bold">ScriptVault</span>
//               </div>
//               <p className="text-gray-400">
//                 The ultimate notebook for ServiceNow developers.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Product</h4>
//               <ul className="space-y-2">
//                 <li><Link href="#features" className="text-gray-400 hover:text-white transition">Features</Link></li>
//                 <li><Link href="/auth" className="text-gray-400 hover:text-white transition">Sign In</Link></li>
//                 <li><Link href="/auth?mode=signup" className="text-gray-400 hover:text-white transition">Sign Up</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Resources</h4>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white transition">API</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white transition">Help Center</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="text-gray-400 hover:text-white transition">About</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white transition">Blog</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white transition">Contact</Link></li>
//               </ul>
//             </div>
//           </div>
//           <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-700 text-center text-gray-400">
//             <p>© {new Date().getFullYear()} ScriptVault. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion } from 'framer-motion';
// import { FiArrowRight, FiCheck, FiCode, FiLock, FiLayers, FiZap } from 'react-icons/fi';

// export default function LandingPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const features = [
//     {
//       icon: <FiCode className="w-6 h-6 text-blue-600" />,
//       title: "All Script Types",
//       description: "Business Rules, Client Scripts, Script Includes, UI Actions, and more"
//     },
//     {
//       icon: <FiLock className="w-6 h-6 text-blue-600" />,
//       title: "Secure Storage",
//       description: "Encrypted storage with Firebase security rules"
//     },
//     {
//       icon: <FiLayers className="w-6 h-6 text-blue-600" />,
//       title: "Organize by Project",
//       description: "Categorize scripts by ServiceNow instance or project"
//     },
//     {
//       icon: <FiZap className="w-6 h-6 text-blue-600" />,
//       title: "Quick Access",
//       description: "Powerful search and filtering to find scripts fast"
//     }
//   ];

//   const steps = [
//     "Sign up with Google or email",
//     "Create your first script entry",
//     "Organize by project and script type",
//     "Access from anywhere, anytime"
//   ];

//   return (
//     <>
//       <Head>
//         <title>ServiceNow Notes | Organize Your ServiceNow Scripts</title>
//         <meta name="description" content="Store, organize and manage all your ServiceNow scripts in one secure place" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         {/* Navigation */}
//         <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold text-blue-600"
//           >
//             ServiceNow Notes
//           </motion.div>
//           <div className="space-x-4">
//             <Link href="/auth" className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
//               Sign In
//             </Link>
//             <Link 
//               href="/auth?mode=signup" 
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <motion.section 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-6 py-20 md:py-32"
//         >
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               Organize Your <span className="text-blue-600">ServiceNow</span> Scripts
//             </h1>
//             <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
//               The perfect solution for developers to store, manage, and quickly access all 
//               ServiceNow scripts in one secure, organized location.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 href="/auth?mode=signup"
//                 className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
//               >
//                 Get Started Free <FiArrowRight className="ml-2" />
//               </Link>
//               <Link
//                 href="#features"
//                 className="px-8 py-4 border border-gray-300 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 See Features
//               </Link>
//             </div>
//           </div>
//         </motion.section>

//         {/* Features Section */}
//         <section id="features" className="py-20 max-w-7xl mx-auto px-6">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for ServiceNow Developers</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Everything you need to manage your scripts efficiently
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* How It Works */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Get started in minutes and boost your productivity
//               </p>
//             </motion.div>

//             <div className="max-w-3xl mx-auto">
//               <ul className="space-y-6">
//                 {steps.map((step, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="flex items-start"
//                   >
//                     <div className="flex-shrink-0 mt-1">
//                       <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
//                         <FiCheck className="w-4 h-4" />
//                       </div>
//                     </div>
//                     <p className="ml-3 text-lg text-gray-700">{step}</p>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to organize your scripts?</h2>
//               <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
//                 Join hundreds of ServiceNow developers who are saving hours every week
//               </p>
//               <Link
//                 href="/auth?mode=signup"
//                 className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
//               >
//                 Get Started for Free
//               </Link>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-12 bg-gray-900 text-gray-400">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="text-2xl font-bold text-white mb-4 md:mb-0">ServiceNow Notes</div>
//               <div className="flex space-x-6">
//                 <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
//                 <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
//                 <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
//               </div>
//             </div>
//             <div className="mt-8 pt-8 border-t border-gray-800 text-center">
//               <p>© {new Date().getFullYear()} ServiceNow Notes. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiCode, FiLock, FiLayers, FiZap } from 'react-icons/fi';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FiCode className="w-6 h-6 text-orange-600" />,
      title: "All Script Types",
      description: "Business Rules, Client Scripts, Script Includes, UI Actions, and more"
    },
    {
      icon: <FiLock className="w-6 h-6 text-orange-600" />,
      title: "Secure Storage",
      description: "Encrypted storage with Firebase security rules"
    },
    {
      icon: <FiLayers className="w-6 h-6 text-orange-600" />,
      title: "Organize by Project",
      description: "Categorize scripts by ServiceNow instance or project"
    },
    {
      icon: <FiZap className="w-6 h-6 text-orange-600" />,
      title: "Quick Access",
      description: "Powerful search and filtering to find scripts fast"
    }
  ];

  const steps = [
    "Sign up with Google or email",
    "Create your first script entry",
    "Organize by project and script type",
    "Access from anywhere, anytime"
  ];

  return (
    <>
      <Head>
        <title>ServiceNow Notes | Organize Your ServiceNow Scripts</title>
        <meta name="description" content="Store, organize and manage all your ServiceNow scripts in one secure place" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-white to-white">
        {/* Navigation */}
        <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-orange-600"
          >
            ServiceNow Notes
          </motion.div>
          <div className="space-x-4">
            <Link href="/auth" className="px-4 py-2 text-orange-600 hover:text-black font-medium transition-colors">
              Sign In
            </Link>
            <Link 
              href="/auth?mode=signup" 
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-20 md:py-32"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Organize Your <span className="text-orange-600">ServiceNow</span> Scripts
            </h1>
            <p className="text-xl text-black mb-10 max-w-3xl mx-auto">
              The perfect solution for developers to store, manage, and quickly access all 
              ServiceNow scripts in one secure, organized location.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/auth?mode=signup"
                className="px-8 py-4 bg-orange-600 text-white rounded-lg text-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center"
              >
                Get Started Free <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 border border-gray-300 rounded-lg text-lg font-medium text-black hover:bg-gray-50 transition-colors"
              >
                See Features
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section id="features" className="py-20 max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Built for ServiceNow Developers</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Everything you need to manage your scripts efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-orange-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Get started in minutes and boost your productivity
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <ul className="space-y-6">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600">
                        <FiCheck className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="ml-3 text-lg text-black">{step}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to organize your scripts?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Join hundreds of ServiceNow developers who are saving hours every week
              </p>
              <Link
                href="/auth?mode=signup"
                className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started for Free
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black text-gray-400">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold text-white mb-4 md:mb-0">ServiceNow Notes</div>
              <div className="flex space-x-6">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>© {new Date().getFullYear()} ServiceNow Notes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
