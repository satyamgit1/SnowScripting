// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiArrowRight, FiCheck, FiCode, FiLock, FiLayers, FiZap, FiUsers, FiStar, FiChevronRight } from 'react-icons/fi';
// import { FaServicestack } from 'react-icons/fa';

// export default function LandingPage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Auto-rotate testimonials
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: <FiCode className="w-8 h-8" />,
//       title: "All Script Types",
//       description: "Business Rules, Client Scripts, Script Includes, UI Actions, and more. No script is left behind!",
//       bgColor: "bg-orange-100"
//     },
//     {
//       icon: <FiLock className="w-8 h-8" />,
//       title: "Secure Storage",
//       description: "All your scripts are stored securely with encrypted backups and Firebase security rules for peace of mind.",
//       bgColor: "bg-blue-100"
//     },
//     {
//       icon: <FiLayers className="w-8 h-8" />,
//       title: "Organize by Project",
//       description: "Easily categorize scripts by ServiceNow instance, project, or client. Make it easy to stay organized.",
//       bgColor: "bg-purple-100"
//     },
//     {
//       icon: <FiZap className="w-8 h-8" />,
//       title: "Quick Access",
//       description: "Search, filter, and access your scripts faster than ever before. Spend less time searching, more time coding!",
//       bgColor: "bg-green-100"
//     }
//   ];

//   const steps = [
//     {
//       title: "Sign up in seconds",
//       description: "Use Google or email to create your account",
//       icon: <FiUsers className="w-6 h-6" />
//     },
//     {
//       title: "Create your first script",
//       description: "Add scripts with syntax highlighting and tagging",
//       icon: <FiCode className="w-6 h-6" />
//     },
//     {
//       title: "Organize effortlessly",
//       description: "Categorize by project, instance, and script type",
//       icon: <FiLayers className="w-6 h-6" />
//     },
//     {
//       title: "Access anywhere",
//       description: "Your scripts are available on all your devices",
//       icon: <FiZap className="w-6 h-6" />
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Alex Johnson",
//       role: "Senior ServiceNow Developer",
//       company: "TechSolutions Inc.",
//       message: "ServiceNow Notes has completely transformed my workflow. I've reduced script search time by 80% and can now access my code snippets from anywhere. The organization features are a game-changer!",
//       rating: 5
//     },
//     {
//       name: "Sarah Williams",
//       role: "ServiceNow Architect",
//       company: "Enterprise Systems",
//       message: "As someone who manages hundreds of scripts across multiple instances, this tool is invaluable. The secure storage gives me peace of mind, and the search functionality is lightning fast.",
//       rating: 5
//     },
//     {
//       name: "Michael Chen",
//       role: "IT Director",
//       company: "Global Innovations",
//       message: "Our entire development team now uses ServiceNow Notes. It's become an essential part of our knowledge management system. The ability to share scripts within projects has improved our collaboration dramatically.",
//       rating: 4
//     }
//   ];

//   const stats = [
//     { value: "10,000+", label: "Scripts Organized" },
//     { value: "500+", label: "Happy Developers" },
//     { value: "99.9%", label: "Uptime" },
//     { value: "24/7", label: "Access Anywhere" }
//   ];

//   return (
//     <>
//       <Head>
//         <title>ServiceNow Notes | Organize Your ServiceNow Scripts</title>
//         <meta name="description" content="Store, organize and manage all your ServiceNow scripts in one secure place" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//         {/* Animated Background Elements */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 left-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//           <div className="absolute top-60 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//         </div>

//         {/* Navigation */}
//         <nav className="relative px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center space-x-2"
//           >
//             <FaServicestack className="text-3xl text-orange-600" />
//             <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
//               ServiceNow Notes
//             </span>
//           </motion.div>
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center space-x-4"
//           >
//             <Link href="/auth" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300">
//               Sign In
//             </Link>
//             <Link 
//               href="/auth?mode=signup" 
//               className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               Sign Up Free
//             </Link>
//           </motion.div>
//         </nav>

//         {/* Hero Section */}
//         <motion.section 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative max-w-7xl mx-auto px-6 py-20 md:py-32"
//         >
//           <div className="text-center">
//             <motion.h1 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
//             >
//               <span className="inline-block">Organize Your</span>{' '}
//               <span className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
//                 ServiceNow Scripts
//               </span>
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
//             >
//               The ultimate solution for ServiceNow developers to store, manage, and instantly access all scripts in one secure, beautifully organized workspace.
//             </motion.p>
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="flex flex-col sm:flex-row justify-center gap-4"
//             >
//               <Link
//                 href="/auth?mode=signup"
//                 className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
//               >
//                 Start Organizing Now <FiArrowRight className="ml-2 animate-pulse" />
//               </Link>
//               <Link
//                 href="#features"
//                 className="px-8 py-4 border-2 border-orange-500 rounded-lg text-lg font-medium text-orange-600 hover:bg-orange-50 transition-colors duration-300 flex items-center justify-center"
//               >
//                 Explore Features
//               </Link>
//             </motion.div>
//           </div>

//           {/* Hero Illustration */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="mt-16 mx-auto max-w-4xl"
//           >
//             <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-gray-200">
//               <div className="absolute -top-3 -left-3 w-16 h-16 bg-orange-500 rounded-xl rotate-12"></div>
//               <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-blue-500 rounded-xl -rotate-12"></div>
//               <div className="relative bg-gray-900 rounded-lg overflow-hidden">
//                 <div className="px-4 py-3 bg-gray-800 flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   <div className="text-xs text-gray-400 ml-2">script.js</div>
//                 </div>
//                 <div className="p-4 font-mono text-sm text-gray-300">
//                   <div className="text-orange-400">// Business Rule: Set Priority Based on Impact</div>
//                   <div className="text-purple-400">function</div>{' '}
//                   <span className="text-blue-400">setPriority</span>
//                   <span className="text-gray-500">() {'{'}</span>
//                   <div className="ml-4">
//                     <span className="text-purple-400">var</span>{' '}
//                     <span className="text-gray-300">impact = current.impact.getValue();</span>
//                   </div>
//                   <div className="ml-4">
//                     <span className="text-purple-400">if</span>{' '}
//                     <span className="text-gray-500">(impact == </span>
//                     <span className="text-green-400">'1'</span>
//                     <span className="text-gray-500">) {'{'}</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-gray-300">current.priority = </span>
//                     <span className="text-green-400">'1'</span>
//                     <span className="text-gray-300">;</span>
//                   </div>
//                   <div className="ml-4 text-gray-500">{'}'}</div>
//                   <div className="text-gray-500">{'}'}</div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.section>

//         {/* Logo Cloud */}
//         <div className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <p className="text-center text-gray-500 mb-8">Trusted by teams at</p>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
//               {['IBM', 'Deloitte', 'Accenture', 'Microsoft', 'ServiceNow'].map((company, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="flex items-center justify-center"
//                 >
//                   <div className="text-2xl font-bold text-gray-700 opacity-80 hover:opacity-100 transition-opacity">
//                     {company}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Features Section */}
//         <section id="features" className="py-20 max-w-7xl mx-auto px-6">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supercharge Your ServiceNow Workflow</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Powerful features designed specifically for ServiceNow developers
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
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//               >
//                 <div className={`flex items-center justify-center w-16 h-16 mb-6 rounded-2xl ${feature.bgColor} text-orange-600 mx-auto`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started in Minutes</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Simple setup, instant productivity
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mr-4">
//                       {step.icon}
//                     </div>
//                     <div className="text-2xl font-bold text-gray-300">0{index + 1}</div>
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
//                   <p className="text-gray-600">{step.description}</p>
//                   {index < steps.length - 1 && (
//                     <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
//                       <FiChevronRight className="w-8 h-8" />
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
//                   <div className="text-xl opacity-90">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by ServiceNow Developers</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Don't just take our word for it
//               </p>
//             </motion.div>

//             <div className="relative h-96">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentTestimonial}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0 bg-gray-50 p-8 rounded-xl shadow-lg"
//                 >
//                   <div className="flex flex-col h-full justify-center items-center text-center max-w-3xl mx-auto">
//                     <div className="text-5xl text-orange-500 mb-6">"</div>
//                     <p className="text-xl text-gray-700 mb-8">
//                       {testimonials[currentTestimonial].message}
//                     </p>
//                     <div>
//                       <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
//                       <p className="text-gray-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
//                       <div className="flex justify-center mt-2">
//                         {[...Array(5)].map((_, i) => (
//                           <FiStar 
//                             key={i} 
//                             className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
              
//               <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentTestimonial(index)}
//                     className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-orange-600' : 'bg-gray-300'}`}
//                     aria-label={`View testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gray-900 text-white">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
//               <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
//                 Join thousands of ServiceNow developers who are saving hours every week with organized, accessible scripts.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <Link
//                   href="/auth?mode=signup"
//                   className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </Link>
//                 <Link
//                   href="#features"
//                   className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
//                 >
//                   See All Features
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-12 bg-gray-950 text-gray-400">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div>
//                 <div className="flex items-center space-x-2 mb-4">
//                   <FaServicestack className="text-2xl text-orange-600" />
//                   <span className="text-xl font-bold text-white">ServiceNow Notes</span>
//                 </div>
//                 <p className="mb-4">The ultimate script management solution for ServiceNow developers.</p>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                     <span className="sr-only">Twitter</span>
//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                     <span className="sr-only">GitHub</span>
//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="hover:text-white transition-colors">About</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="mt-12 pt-8 border-t border-gray-800 text-center">
//               <p>© {new Date().getFullYear()} ServiceNow Notes. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>

//       <style jsx global>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </>
//   );
// }








//******************* */ Second Code Snippet












// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiCode, FiLock, FiLayers, FiZap, FiArrowRight, FiCheck, FiStar, FiChevronRight } from 'react-icons/fi';
// import { FaServicestack, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import { TbScript } from 'react-icons/tb';

// export default function LandingPage() {
//   const [activeTab, setActiveTab] = useState('business');
//   const [isHovered, setIsHovered] = useState(false);

//   const scriptTypes = [
//     { id: 'business', name: 'Business Rules', count: '1,200+' },
//     { id: 'client', name: 'Client Scripts', count: '850+' },
//     { id: 'ui', name: 'UI Actions', count: '620+' },
//     { id: 'include', name: 'Script Includes', count: '1,500+' },
//   ];

//   const features = [
//     {
//       icon: <FiCode className="w-6 h-6" />,
//       title: "Code Intelligence",
//       description: "Syntax highlighting, auto-completion, and error detection for ServiceNow scripts"
//     },
//     {
//       icon: <FiLock className="w-6 h-6" />,
//       title: "Military-Grade Security",
//       description: "End-to-end encryption with regular security audits"
//     },
//     {
//       icon: <FiLayers className="w-6 h-6" />,
//       title: "Project Workspaces",
//       description: "Organize scripts by instance, project, or team with granular permissions"
//     },
//     {
//       icon: <FiZap className="w-6 h-6" />,
//       title: "Lightning Search",
//       description: "Find any script in milliseconds with our indexed search engine"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Emma Rodriguez",
//       role: "ServiceNow Architect",
//       company: "Fortune 500 Enterprise",
//       quote: "Script Vault reduced our script retrieval time by 90%. The organization system is brilliant.",
//       rating: 5
//     },
//     {
//       name: "David Kim",
//       role: "Lead Developer",
//       company: "Global IT Services",
//       quote: "Finally a tool that understands how ServiceNow developers work. The snippet library alone is worth it.",
//       rating: 5
//     },
//     {
//       name: "Sarah Chen",
//       role: "Platform Owner",
//       company: "Healthcare Solutions",
//       quote: "Our team collaboration improved dramatically after adopting Script Vault. The version history saved us countless times.",
//       rating: 4
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>ServiceNow Script Vault | Enterprise Script Management</title>
//         <meta name="description" content="Secure, organized repository for all ServiceNow scripts with advanced developer tools" />
//       </Head>

//       <div className="min-h-screen bg-gray-900 text-gray-100">
//         {/* Animated grid background */}
//         <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
//           <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
//         </div>

//         {/* Navigation */}
//         <nav className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center space-x-3"
//           >
//             <TbScript className="text-3xl text-blue-400" />
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               ScriptVault
//             </span>
//           </motion.div>
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
//             <Link href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</Link>
//             <Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
//             <Link href="/docs" className="hover:text-blue-400 transition-colors">Docs</Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/login" className="px-4 py-2 hover:text-blue-400 transition-colors">Sign In</Link>
//             <Link 
//               href="/register" 
//               className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-blue-500/20"
//             >
//               Get Started
//             </Link>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="relative pt-24 pb-36 px-6 max-w-7xl mx-auto">
//           <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          
//           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                 The <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Secure Vault</span> for Your ServiceNow Scripts
//               </h1>
//               <p className="text-xl text-gray-300 mb-10 max-w-2xl">
//                 Enterprise-grade script management with version control, AI assistance, and military-grade security for ServiceNow development teams.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
//                 >
//                   Start Free Trial <FiArrowRight className="ml-2 animate-pulse" />
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border border-gray-700 rounded-lg font-medium hover:bg-gray-800/50 transition-colors flex items-center justify-center"
//                 >
//                   Watch Demo
//                 </Link>
//               </div>
//               <div className="mt-8 flex items-center space-x-4 text-gray-400">
//                 <div className="flex -space-x-2">
//                   {[1,2,3,4].map((item) => (
//                     <div key={item} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900"></div>
//                   ))}
//                 </div>
//                 <div>
//                   <div className="flex items-center space-x-1">
//                     {[1,2,3,4,5].map((star) => (
//                       <FiStar key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                     ))}
//                   </div>
//                   <p className="text-sm">Trusted by 850+ developers</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-xl rotate-12 blur-xl"></div>
//               <div className="relative bg-gray-800 rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
//                 <div className="px-5 py-3 bg-gray-900 flex items-center justify-between border-b border-gray-800">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="text-sm text-gray-400">business_rule.js</div>
//                   <div className="w-6"></div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex overflow-x-auto pb-2 space-x-2">
//                     {scriptTypes.map((type) => (
//                       <button
//                         key={type.id}
//                         onClick={() => setActiveTab(type.id)}
//                         className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeTab === type.id ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-gray-800 hover:bg-gray-700/50'}`}
//                       >
//                         {type.name}
//                       </button>
//                     ))}
//                   </div>
                  
//                   <div className="mt-6 h-64 overflow-y-auto font-mono text-sm">
//                     {activeTab === 'business' && (
//                       <pre className="text-gray-300">
//                         <code>
// {`// Business Rule: Set Priority Based on Impact\n`}
// <span className="text-blue-400">function</span> setPriority() {'{\n'}
//   <span className="text-purple-400">var</span> impact = current.impact.getValue();\n\n
//   <span className="text-blue-400">if</span> (impact == <span className="text-green-400">'1'</span>) {'{\n'}
//     current.priority = <span className="text-green-400">'1'</span>;\n
//     current.assigned_to = <span className="text-green-400">'sys_admin'</span>;\n
//   {'}'} <span className="text-blue-400">else if</span> (impact == <span className="text-green-400">'2'</span>) {'{\n'}
//     current.priority = <span className="text-green-400">'2'</span>;\n
//   {'}'} <span className="text-blue-400">else</span> {'{\n'}
//     current.priority = <span className="text-green-400">'3'</span>;\n
//   {'}'}\n
// {'}'}\n\n
// <span className="text-gray-500">// Set the short description if empty</span>\n
// <span className="text-blue-400">if</span> (!current.short_description) {'{\n'}
//   current.short_description = \n    <span className="text-green-400">'Auto-generated: Impact '</span> + impact;\n
// {'}'}
//                         </code>
//                       </pre>
//                     )}
//                     {/* Other script type examples would go here */}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Trust Badges */}
//         <div className="py-12 bg-gray-800/50 border-y border-gray-800">
//           <div className="max-w-7xl mx-auto px-6">
//             <p className="text-center text-gray-400 mb-8">TRUSTED BY INDUSTRY LEADERS</p>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
//               {['servicenow', 'ibm', 'deloitte', 'accenture', 'microsoft'].map((company, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="flex items-center justify-center text-2xl font-bold text-gray-400 hover:text-white transition-colors"
//                 >
//                   {company.toUpperCase()}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Features Section */}
//         <section id="features" className="py-28 px-6 max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Developer Experience <span className="text-blue-400">Reimagined</span></h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Built by ServiceNow developers for ServiceNow developers
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-gray-800/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
//               >
//                 <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Code Management Section */}
//         <section className="py-28 bg-gray-800/30">
//           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-8">Enterprise-Ready <span className="text-blue-400">Script Management</span></h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
//                     <FiCheck className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-1">Version Control</h3>
//                     <p className="text-gray-400">Full change history with diff comparison and rollback capabilities</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
//                     <FiCheck className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-1">Team Collaboration</h3>
//                     <p className="text-gray-400">Real-time commenting, @mentions, and shared workspaces</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
//                     <FiCheck className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-1">AI-Powered Insights</h3>
//                     <p className="text-gray-400">Get optimization suggestions and detect anti-patterns automatically</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-xl rotate-12 blur-xl"></div>
//               <div className="relative bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
//                 <div className="px-5 py-3 bg-gray-900 flex items-center border-b border-gray-800">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="flex-1 text-center text-sm text-gray-400">version-comparison.js</div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <div className="text-sm font-mono text-blue-400">v1.4.2</div>
//                     <div className="text-sm font-mono text-green-400">Current</div>
//                   </div>
//                   <div className="font-mono text-sm bg-gray-900 rounded-lg p-4 overflow-x-auto">
//                     <div className="text-red-400">- function oldApproach() {'{'}</div>
//                     <div className="text-red-400 ml-4">-   // Deprecated method</div>
//                     <div className="text-red-400 ml-4">-   return gs.getMessage(...);</div>
//                     <div className="text-red-400">- {'}'}</div>
//                     <div className="h-4"></div>
//                     <div className="text-green-400">+ function newApproach() {'{'}</div>
//                     <div className="text-green-400 ml-4">+   // Uses new i18n standard</div>
//                     <div className="text-green-400 ml-4">+   return new I18N().getText(...);</div>
//                     <div className="text-green-400">+ {'}'}</div>
//                   </div>
//                   <div className="mt-4 text-xs text-gray-500">
//                     Changed by: <span className="text-gray-400">michael.chen@example.com</span> | 2 days ago
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-28 px-6 max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by <span className="text-blue-400">Enterprise Teams</span></h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Join hundreds of ServiceNow professionals who transformed their workflow
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="bg-gray-800/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
//                   <div>
//                     <h4 className="font-semibold">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, star) => (
//                     <FiStar 
//                       key={star} 
//                       className={`w-5 h-5 ${star < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-28 bg-gradient-to-br from-gray-900 to-gray-950">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your <span className="text-blue-400">ServiceNow Development</span>?</h2>
//               <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
//                 Join the revolution in script management and developer productivity
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-blue-500/30"
//                 >
//                   Start 14-Day Free Trial
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border border-gray-700 rounded-lg font-medium hover:bg-gray-800/50 transition-colors"
//                 >
//                   Schedule Demo
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-16 border-t border-gray-800">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//               <div>
//                 <div className="flex items-center space-x-3 mb-6">
//                   <TbScript className="text-2xl text-blue-400" />
//                   <span className="text-xl font-bold">ScriptVault</span>
//                 </div>
//                 <p className="text-gray-400 mb-6">The enterprise solution for ServiceNow script management.</p>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                     <FaTwitter className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                     <FaGithub className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                     <FaLinkedin className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Product</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Integrations</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Roadmap</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Resources</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Reference</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Community</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Support</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Company</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} ScriptVault. All rights reserved.</p>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Privacy</a>
//                 <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Terms</a>
//                 <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Cookies</a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }















// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiCode, FiLock, FiLayers, FiZap, FiArrowRight, FiCheck, FiStar, FiChevronRight, FiCpu, FiDatabase, FiShield, FiSearch } from 'react-icons/fi';
// import { FaServicestack, FaGithub, FaTwitter } from 'react-icons/fa';

// export default function LandingPage() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const features = [
//     {
//       icon: <FiCode className="w-8 h-8" />,
//       title: "Smart Code Storage",
//       description: "Automatically categorize and tag your ServiceNow scripts for instant retrieval",
//       color: "bg-orange-100 text-orange-600"
//     },
//     {
//       icon: <FiDatabase className="w-8 h-8" />,
//       title: "Cross-Instance Sync",
//       description: "Manage scripts across multiple ServiceNow instances from one dashboard",
//       color: "bg-blue-100 text-blue-600"
//     },
//     {
//       icon: <FiShield className="w-8 h-8" />,
//       title: "Enterprise Security",
//       description: "SOC2 compliant storage with regular backups and access controls",
//       color: "bg-green-100 text-green-600"
//     },
//     {
//       icon: <FiSearch className="w-8 h-8" />,
//       title: "AI-Powered Search",
//       description: "Find scripts by functionality, not just keywords",
//       color: "bg-purple-100 text-purple-600"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Michael Chen",
//       role: "ServiceNow Architect",
//       quote: "Reduced our script search time by 80%. The organization system is brilliant.",
//       rating: 5
//     },
//     {
//       name: "Sarah Johnson",
//       role: "Lead Developer",
//       quote: "Our team's productivity skyrocketed after implementing Script Manager.",
//       rating: 5
//     },
//     {
//       name: "David Kim",
//       role: "Platform Owner",
//       quote: "Finally a tool that understands how ServiceNow developers actually work.",
//       rating: 4
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>ServiceNow Script Manager | Organize Your Scripts</title>
//         <meta name="description" content="The ultimate organizational tool for ServiceNow developers" />
//       </Head>

//       {/* Animated background elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute top-1/2 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Navigation */}
//       <nav className="relative px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center space-x-3"
//         >
//           <FaServicestack className="text-3xl text-orange-600" />
//           <span className="text-2xl font-bold text-orange-600">ScriptManager</span>
//         </motion.div>
//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">Features</Link>
//           <Link href="#solutions" className="text-gray-600 hover:text-orange-600 transition-colors">Solutions</Link>
//           <Link href="#pricing" className="text-gray-600 hover:text-orange-600 transition-colors">Pricing</Link>
//           <Link href="/docs" className="text-gray-600 hover:text-orange-600 transition-colors">Docs</Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link href="/login" className="px-4 py-2 text-gray-600 hover:text-orange-600 transition-colors">Sign In</Link>
//           <Link 
//             href="/register" 
//             className="px-6 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-md hover:shadow-orange-500/30"
//           >
//             Get Started
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               <span className="text-gray-900">Organize Your</span>{' '}
//               <span className="text-orange-600">ServiceNow Scripts</span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-10 max-w-2xl">
//               The complete solution for storing, managing, and instantly accessing all your ServiceNow scripts in one beautiful workspace.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/register"
//                 className="px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center"
//               >
//                 Start Free Trial <FiArrowRight className="ml-2 animate-pulse" />
//               </Link>
//               <Link
//                 href="#demo"
//                 className="px-8 py-4 border-2 border-orange-500 rounded-lg font-medium text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-center"
//               >
//                 Watch Demo
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-xl rotate-12 blur-xl"></div>
//             <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
//               <div className="mb-6">
//                 <div className="flex space-x-2 mb-4">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="h-64 overflow-y-auto font-mono text-sm bg-gray-900 rounded-lg p-4">
//                   <pre className="text-gray-300">
//                     <code>
// {`// Business Rule: Set Priority Based on Impact\n`}
// <span className="text-blue-400">function</span> setPriority() {'{\n'}
//   <span className="text-purple-400">var</span> impact = current.impact.getValue();\n\n
//   <span className="text-blue-400">if</span> (impact == <span className="text-green-400">'1'</span>) {'{\n'}
//     current.priority = <span className="text-green-400">'1'</span>;\n
//     current.assigned_to = <span className="text-green-400">'sys_admin'</span>;\n
//   {'}'} <span className="text-blue-400">else if</span> (impact == <span className="text-green-400">'2'</span>) {'{\n'}
//     current.priority = <span className="text-green-400">'2'</span>;\n
//   {'}'} <span className="text-blue-400">else</span> {'{\n'}
//     current.priority = <span className="text-green-400">'3'</span>;\n
//   {'}'}\n
// {'}'}
//                     </code>
//                   </pre>
//                 </div>
//               </div>
//               <div className="flex justify-between">
//                 <div className="text-sm text-gray-500">Last updated: 2 hours ago</div>
//                 <div className="text-sm font-medium text-orange-600">Business Rules</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Logo Cloud */}
//       <div className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-center text-gray-500 mb-8">TRUSTED BY SERVICE NOW TEAMS AT</p>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
//             {['IBM', 'Deloitte', 'Accenture', 'Microsoft', 'ServiceNow'].map((company, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="flex items-center justify-center text-xl font-bold text-gray-600 hover:text-orange-600 transition-colors"
//               >
//                 {company}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animated Features */}
//       <section id="features" className="py-28 px-6 max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Powerful Features for <span className="text-orange-600">ServiceNow Developers</span></h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Everything you need to manage scripts efficiently across your organization
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 onMouseEnter={() => setActiveFeature(i)}
//                 className={`p-6 rounded-xl cursor-pointer transition-all ${activeFeature === i ? 'bg-white shadow-lg border border-orange-100' : 'bg-gray-50 hover:bg-white'}`}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                     <p className="text-gray-600">{feature.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div 
//             key={activeFeature}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
//           >
//             <div className="h-64 w-full bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
//               <div className="text-center p-6">
//                 <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${features[activeFeature].color} flex items-center justify-center`}>
//                   {features[activeFeature].icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{features[activeFeature].title}</h3>
//                 <p className="text-gray-600">{features[activeFeature].description}</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials Carousel */}
//       <section className="py-28 bg-orange-50">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Loved by <span className="text-orange-600">ServiceNow Developers</span></h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Join hundreds of professionals who transformed their workflow
//             </p>
//           </motion.div>

//           <div className="relative h-96">
//             <AnimatePresence mode="wait">
//               {testimonials.map((testimonial, i) => (
//                 activeFeature === i && (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute inset-0 bg-white p-8 rounded-xl shadow-lg"
//                   >
//                     <div className="flex flex-col h-full justify-center items-center text-center">
//                       <div className="text-5xl text-orange-500 mb-6">"</div>
//                       <p className="text-xl text-gray-700 mb-8">
//                         {testimonial.quote}
//                       </p>
//                       <div>
//                         <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                         <p className="text-gray-600">{testimonial.role}</p>
//                         <div className="flex justify-center mt-2">
//                           {[...Array(5)].map((_, star) => (
//                             <FiStar 
//                               key={star} 
//                               className={`w-5 h-5 ${star < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )
//               ))}
//             </AnimatePresence>
            
//             <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveFeature(i)}
//                   className={`w-3 h-3 rounded-full ${activeFeature === i ? 'bg-orange-600' : 'bg-gray-300'}`}
//                   aria-label={`View testimonial ${i + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-28 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Organize Your <span className="text-white">ServiceNow Scripts</span>?</h2>
//             <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
//               Join thousands of developers saving hours every week
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 href="/register"
//                 className="px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
//               >
//                 Start Free Trial
//               </Link>
//               <Link
//                 href="#demo"
//                 className="px-8 py-4 border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
//               >
//                 Schedule Demo
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-16 bg-gray-900 text-gray-400">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <div className="flex items-center space-x-3 mb-6">
//                 <FaServicestack className="text-2xl text-orange-600" />
//                 <span className="text-xl font-bold text-white">ScriptManager</span>
//               </div>
//               <p className="mb-6">The complete solution for ServiceNow script management.</p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                   <FaTwitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                   <FaGithub className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Roadmap</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Community</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Support</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <p className="mb-4 md:mb-0">© {new Date().getFullYear()} ScriptManager. All rights reserved.</p>
//             <div className="flex space-x-6">
//               <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
//               <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
//               <a href="#" className="hover:text-orange-500 transition-colors">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style jsx global>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </>
//   );
// }






























// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiCode, FiLock, FiLayers, FiZap, FiArrowRight, FiCheck, FiStar, FiChevronRight, FiUser, FiShield, FiClock } from 'react-icons/fi';
// import { FaServicestack, FaGithub, FaTwitter } from 'react-icons/fa';

// export default function LandingPage() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const features = [
//     {
//       icon: <FiCode className="w-8 h-8" />,
//       title: "Universal Script Support",
//       description: "Store every type of ServiceNow script with proper syntax highlighting and categorization",
//       extended: "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting."
//     },
//     {
//       icon: <FiLock className="w-8 h-8" />,
//       title: "Bank-Level Security",
//       description: "Enterprise-grade encryption and access controls for your scripts",
//       extended: "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected."
//     },
//     {
//       icon: <FiLayers className="w-8 h-8" />,
//       title: "Project Workspaces",
//       description: "Organize scripts by project, client, or instance with custom tags",
//       extended: "Create dedicated workspaces for each project with team collaboration features and custom tagging systems."
//     },
//     {
//       icon: <FiZap className="w-8 h-8" />,
//       title: "Instant Search",
//       description: "Find any script in milliseconds with our indexed search engine",
//       extended: "Full-text search across all your scripts with filters for script type, date modified, and custom tags."
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Michael Chen",
//       role: "ServiceNow Architect",
//       company: "Global Solutions Inc.",
//       quote: "This tool cut our script retrieval time by 80%. The organization system is exactly what our team needed.",
//       rating: 5
//     },
//     {
//       name: "Sarah Johnson",
//       role: "Lead Developer",
//       company: "Enterprise IT Services",
//       quote: "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
//       rating: 5
//     },
//     {
//       name: "David Kim",
//       role: "Platform Manager",
//       company: "Tech Innovations",
//       quote: "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
//       rating: 4
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>ServiceNow Script Hub | Organize & Manage Scripts</title>
//         <meta name="description" content="The complete solution for organizing and managing your ServiceNow scripts" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
//         {/* Animated background elements */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//           <div className="absolute bottom-40 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         </div>

//         {/* Navigation */}
//         <nav className="relative px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center space-x-3"
//           >
//             <FaServicestack className="text-3xl text-orange-600" />
//             <span className="text-2xl font-bold text-orange-600">ScriptHub</span>
//           </motion.div>
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</Link>
//             <Link href="#solutions" className="text-gray-700 hover:text-orange-600 transition-colors">Solutions</Link>
//             <Link href="#pricing" className="text-gray-700 hover:text-orange-600 transition-colors">Pricing</Link>
//             <Link href="#resources" className="text-gray-700 hover:text-orange-600 transition-colors">Resources</Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/auth" className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Sign In</Link>
//             <Link 
//               href="/auth" 
//               className="px-6 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-md hover:shadow-orange-500/30"
//             >
//               Get Started
//             </Link>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
//                 Organize Your <span className="text-orange-600">ServiceNow</span> Scripts Like Never Before
//               </h1>
//               <p className="text-xl text-gray-600 mb-10 max-w-2xl">
//                 The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center"
//                 >
//                   Start Free Trial <FiArrowRight className="ml-2 animate-pulse" />
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors flex items-center justify-center"
//                 >
//                   Watch Demo
//                 </Link>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="absolute -top-6 -left-6 w-full h-full bg-orange-100 rounded-2xl -z-10"></div>
//               <div className="relative bg-white rounded-xl border border-orange-200 overflow-hidden shadow-xl">
//                 <div className="px-5 py-3 bg-gray-50 flex items-center border-b border-gray-200">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="text-sm text-gray-500 ml-4">script-include.js</div>
//                 </div>
//                 <div className="p-6 font-mono text-sm bg-white">
//                   <div className="text-orange-400">// Script Include: DataUtils</div>
//                   <div className="text-purple-500">var</div>{' '}
//                   <span className="text-blue-500">DataUtils</span>{' '}
//                   <span className="text-gray-700">= Class.create();</span>
//                   <div className="text-purple-500">DataUtils</div>{' '}
//                   <span className="text-gray-700">.prototype = {'{'}</span>
//                   <div className="ml-4 text-gray-700">
//                     <span className="text-purple-500">initialize</span>{' '}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">() {'{'}</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">
//                     <span className="text-green-600">// Initialization code</span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{'},'}</div>
//                   <div className="ml-4">
//                     <span className="text-purple-500">getUserData</span>{' '}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">(userId) {'{'}</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">var</span>{' '}
//                     <span className="text-blue-500">gr</span>{' '}
//                     <span className="text-gray-700">= new GlideRecord(</span>
//                     <span className="text-green-600">'sys_user'</span>
//                     <span className="text-gray-700">);</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.addQuery(</span>
//                     <span className="text-green-600">'sys_id'</span>
//                     <span className="text-gray-700">, userId);</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.query();</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">if</span>{' '}
//                     <span className="text-gray-700">(</span>
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.next()) {'{'}</span>
//                   </div>
//                   <div className="ml-12">
//                     <span className="text-purple-500">return</span>{' '}
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.getValue(</span>
//                     <span className="text-green-600">'name'</span>
//                     <span className="text-gray-700">);</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">{'}'}</div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">return</span>{' '}
//                     <span className="text-green-600">''</span>
//                     <span className="text-gray-700">;</span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{'}'}</div>
//                   <div className="text-gray-700">{'};'}</div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Spotlight */}
//         <section id="features" className="py-20 bg-orange-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Power Up Your <span className="text-orange-600">ServiceNow</span> Development</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Everything you need to manage scripts efficiently and collaborate seamlessly
//               </p>
//             </motion.div>

//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-8">
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     onMouseEnter={() => setActiveFeature(index)}
//                     className={`p-6 rounded-xl cursor-pointer transition-all ${activeFeature === index ? 'bg-white shadow-lg border border-orange-200' : 'bg-orange-100 hover:bg-orange-200/50'}`}
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div className={`p-3 rounded-lg ${activeFeature === index ? 'bg-orange-100 text-orange-600' : 'bg-white text-orange-600'}`}>
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                         <p className="text-gray-600">{feature.description}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 h-full"
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeFeature}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="h-full flex flex-col"
//                   >
//                     <div className="flex items-center mb-6">
//                       <div className="p-3 rounded-lg bg-orange-100 text-orange-600 mr-4">
//                         {features[activeFeature].icon}
//                       </div>
//                       <h3 className="text-2xl font-semibold text-gray-900">{features[activeFeature].title}</h3>
//                     </div>
//                     <p className="text-gray-600 mb-6">{features[activeFeature].extended}</p>
//                     <div className="mt-auto bg-orange-50 p-4 rounded-lg border border-orange-200">
//                       <div className="flex items-center space-x-2 text-orange-600">
//                         <FiCheck className="w-5 h-5" />
//                         <span className="font-medium">Included in all plans</span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 { icon: <FiUser className="w-8 h-8" />, value: "850+", label: "Active Developers" },
//                 { icon: <FiCode className="w-8 h-8" />, value: "12K+", label: "Scripts Stored" },
//                 { icon: <FiShield className="w-8 h-8" />, value: "100%", label: "Uptime Reliability" },
//                 { icon: <FiClock className="w-8 h-8" />, value: "10x", label: "Faster Script Retrieval" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-orange-50 p-8 rounded-xl text-center"
//                 >
//                   <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
//                     {stat.icon}
//                   </div>
//                   <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                   <div className="text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-20 bg-orange-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by <span className="text-orange-600">ServiceNow</span> Teams Worldwide</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Don't just take our word for it - hear from our users
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <div className="flex items-center mb-6">
//                     <div className="w-12 h-12 rounded-full bg-orange-100 mr-4"></div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, star) => (
//                       <FiStar 
//                         key={star} 
//                         className={`w-5 h-5 ${star < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your <span className="text-white">ServiceNow</span> Workflow?</h2>
//               <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
//                 Join hundreds of developers who are saving hours every week with organized, accessible scripts
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all"
//                 >
//                   Schedule Demo
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-16 bg-white border-t border-gray-200">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//               <div>
//                 <div className="flex items-center space-x-3 mb-6">
//                   <FaServicestack className="text-2xl text-orange-600" />
//                   <span className="text-xl font-bold text-orange-600">ScriptHub</span>
//                 </div>
//                 <p className="text-gray-600 mb-6">The complete solution for ServiceNow script management.</p>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
//                     <FaTwitter className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
//                     <FaGithub className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Pricing</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Integrations</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Updates</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Documentation</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">API Reference</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Community</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Support</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">About Us</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Careers</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a></li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} ScriptHub. All rights reserved.</p>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">Privacy</a>
//                 <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">Terms</a>
//                 <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">Cookies</a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>

//       <style jsx global>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </>
//   );
// }



// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiCode, FiLock, FiLayers, FiZap, FiArrowRight, FiCheck, FiStar, FiChevronRight, FiUser, FiShield, FiClock } from 'react-icons/fi';
// import { FaServicestack, FaGithub, FaTwitter } from 'react-icons/fa';

// export default function LandingPage() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const features = [
//     {
//       icon: <FiCode className="w-8 h-8" />,
//       title: "Universal Script Support",
//       description: "Store every type of ServiceNow script with proper syntax highlighting and categorization",
//       extended: "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting."
//     },
//     {
//       icon: <FiLock className="w-8 h-8" />,
//       title: "Bank-Level Security",
//       description: "Enterprise-grade encryption and access controls for your scripts",
//       extended: "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected."
//     },
//     {
//       icon: <FiLayers className="w-8 h-8" />,
//       title: "Project Workspaces",
//       description: "Organize scripts by project, client, or instance with custom tags",
//       extended: "Create dedicated workspaces for each project with team collaboration features and custom tagging systems."
//     },
//     {
//       icon: <FiZap className="w-8 h-8" />,
//       title: "Instant Search",
//       description: "Find any script in milliseconds with our indexed search engine",
//       extended: "Full-text search across all your scripts with filters for script type, date modified, and custom tags."
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Akash Ladge",
//       role: "ServiceNow Developer",
//       company: "Exterprise Services",
//       quote: "This tool cut our script retrieval time by 80%. The organization system is exactly what our team needed.",
//       rating: 5
//     },
//     {
//       name: "Prakshal jain",
//       role: "Lead Developer",
//       company: "Exterprise Services",
//       quote: "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
//       rating: 5
//     },
//     {
//       name: "Aditya Gupta",
//       role: "Servicenow Developer",
//       company: "Exterprise Services",
//       quote: "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
//       rating: 4
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>ServiceNow Script Hub | Organize & Manage Scripts</title>
//         <meta name="description" content="The complete solution for organizing and managing your ServiceNow scripts" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
//         {/* Animated background elements */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//           <div className="absolute bottom-40 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         </div>

//         {/* Navigation */}
//         <nav className="relative px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center space-x-3"
//           >
//             <FaServicestack className="text-3xl text-orange-600" />
//             <span className="text-2xl font-bold text-orange-600">ScriptHub</span>
//           </motion.div>
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</Link>
//             <Link href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">Our Reviews</Link>
//             <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact Us</Link>

//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/auth" className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Sign In</Link>
//             <Link 
//               href="/auth" 
//               className="px-6 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-md hover:shadow-orange-500/30"
//             >
//               Get Started
//             </Link>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
//                 Organize Your <span className="text-orange-600">ServiceNow</span> Scripts Like Never Before
//               </h1>
//               <p className="text-xl text-gray-600 mb-10 max-w-2xl">
//                 The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center"
//                 >
//                   Start Free Trial <FiArrowRight className="ml-2 animate-pulse" />
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors flex items-center justify-center"
//                 >
//                   Watch Demo
//                 </Link>
//               </div>
//               {/* Highlighted line added here */}
//               <div className="mt-6 text-sm text-orange-600 font-medium border-l-4 border-orange-500 pl-3 py-1 bg-orange-50 inline-block">
//                 Built by ServiceNow developers for ServiceNow developers
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="absolute -top-6 -left-6 w-full h-full bg-orange-100 rounded-2xl -z-10"></div>
//               <div className="relative bg-white rounded-xl border border-orange-200 overflow-hidden shadow-xl">
//                 <div className="px-5 py-3 bg-gray-50 flex items-center border-b border-gray-200">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="text-sm text-gray-500 ml-4">script-include.js</div>
//                 </div>
//                 <div className="p-6 font-mono text-sm bg-white">
//                   <div className="text-orange-400">// Script Include: DataUtils</div>
//                   <div className="text-purple-500">var</div>{' '}
//                   <span className="text-blue-500">DataUtils</span>{' '}
//                   <span className="text-gray-700">= Class.create();</span>
//                   <div className="text-purple-500">DataUtils</div>{' '}
//                   <span className="text-gray-700">.prototype = {'{'}</span>
//                   <div className="ml-4 text-gray-700">
//                     <span className="text-purple-500">initialize</span>{' '}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">() {'{'}</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">
//                     <span className="text-green-600">// Initialization code</span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{'},'}</div>
//                   <div className="ml-4">
//                     <span className="text-purple-500">getUserData</span>{' '}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">(userId) {'{'}</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">var</span>{' '}
//                     <span className="text-blue-500">gr</span>{' '}
//                     <span className="text-gray-700">= new GlideRecord(</span>
//                     <span className="text-green-600">'sys_user'</span>
//                     <span className="text-gray-700">);</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.addQuery(</span>
//                     <span className="text-green-600">'sys_id'</span>
//                     <span className="text-gray-700">, userId);</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.query();</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">if</span>{' '}
//                     <span className="text-gray-700">(</span>
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.next()) {'{'}</span>
//                   </div>
//                   <div className="ml-12">
//                     <span className="text-purple-500">return</span>{' '}
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.getValue(</span>
//                     <span className="text-green-600">'name'</span>
//                     <span className="text-gray-700">);</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">{'}'}</div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">return</span>{' '}
//                     <span className="text-green-600">''</span>
//                     <span className="text-gray-700">;</span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{'}'}</div>
//                   <div className="text-gray-700">{'};'}</div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Spotlight */}
//         <section id="features" className="py-20 bg-orange-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Power Up Your <span className="text-orange-600">ServiceNow</span> Development</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Everything you need to manage scripts efficiently and collaborate seamlessly
//               </p>
//             </motion.div>

//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-8">
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     onMouseEnter={() => setActiveFeature(index)}
//                     className={`p-6 rounded-xl cursor-pointer transition-all ${activeFeature === index ? 'bg-white shadow-lg border border-orange-200' : 'bg-orange-100 hover:bg-orange-200/50'}`}
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div className={`p-3 rounded-lg ${activeFeature === index ? 'bg-orange-100 text-orange-600' : 'bg-white text-orange-600'}`}>
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                         <p className="text-gray-600">{feature.description}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 h-full"
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeFeature}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="h-full flex flex-col"
//                   >
//                     <div className="flex items-center mb-6">
//                       <div className="p-3 rounded-lg bg-orange-100 text-orange-600 mr-4">
//                         {features[activeFeature].icon}
//                       </div>
//                       <h3 className="text-2xl font-semibold text-gray-900">{features[activeFeature].title}</h3>
//                     </div>
//                     <p className="text-gray-600 mb-6">{features[activeFeature].extended}</p>
//                     <div className="mt-auto bg-orange-50 p-4 rounded-lg border border-orange-200">
//                       <div className="flex items-center space-x-2 text-orange-600">
//                         <FiCheck className="w-5 h-5" />
//                         <span className="font-medium">Included in all plans</span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 { icon: <FiUser className="w-8 h-8" />, value: "850+", label: "Active Developers" },
//                 { icon: <FiCode className="w-8 h-8" />, value: "12K+", label: "Scripts Stored" },
//                 { icon: <FiShield className="w-8 h-8" />, value: "100%", label: "Uptime Reliability" },
//                 { icon: <FiClock className="w-8 h-8" />, value: "10x", label: "Faster Script Retrieval" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-orange-50 p-8 rounded-xl text-center"
//                 >
//                   <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
//                     {stat.icon}
//                   </div>
//                   <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                   <div className="text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-20 bg-orange-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by <span className="text-orange-600">ServiceNow</span> Teams Worldwide</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Don't just take our word for it - hear from our users
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <div className="flex items-center mb-6">
//                     <div className="w-12 h-12 rounded-full bg-orange-100 mr-4"></div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, star) => (
//                       <FiStar 
//                         key={star} 
//                         className={`w-5 h-5 ${star < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your <span className="text-white">ServiceNow</span> Workflow?</h2>
//               <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
//                 Join hundreds of developers who are saving hours every week with organized, accessible scripts
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all"
//                 >
//                   Schedule Demo
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-16 bg-white border-t border-gray-200">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//               <div>
//                 <div className="flex items-center space-x-3 mb-6">
//                   <FaServicestack className="text-2xl text-orange-600" />
//                   <span className="text-xl font-bold text-orange-600">ScriptHub</span>
//                 </div>
//                 <p className="text-gray-600 mb-6">The complete solution for ServiceNow script management.</p>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
//                     <FaTwitter className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
//                     <FaGithub className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Pricing</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Integrations</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Updates</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Documentation</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">API Reference</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Community</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Support</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">About Us</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Careers</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a></li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} ScriptHub. All rights reserved.</p>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">Privacy</a>
//                 <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">Terms</a>
//                 <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">Cookies</a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>

//       <style jsx global>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </>
//   );
// }



import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLock, FiLayers, FiZap, FiArrowRight, FiCheck, FiStar, FiChevronRight, FiUser, FiShield, FiClock } from 'react-icons/fi';
import { FaServicestack, FaGithub, FaTwitter } from 'react-icons/fa';

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Universal Script Support",
      description: "Store every type of ServiceNow script with proper syntax highlighting and categorization",
      extended: "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting."
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and access controls for your scripts",
      extended: "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected."
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Project Workspaces",
      description: "Organize scripts by project, client, or instance with custom tags",
      extended: "Create dedicated workspaces for each project with team collaboration features and custom tagging systems."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Instant Search",
      description: "Find any script in milliseconds with our indexed search engine",
      extended: "Full-text search across all your scripts with filters for script type, date modified, and custom tags."
    }
  ];

  const testimonials = [
    {
      name: "Akash Landge",
      role: "ServiceNow Developer",
      company: "Exterprise Services",
      quote: "This tool cut our script retrieval time by 80%. The organization system is exactly what our team needed.",
      rating: 5,
      image: "/akash.png" // Add image URL for Akash
    },
    {
      name: "Prakshal jain",
      role: "Lead Developer",
      company: "Exterprise Services",
      quote: "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
      rating: 5,
      image: "/jain.png" // Add image URL for Prakshal
    },
    {
      name: "Aditya Gupta",
      role: "Servicenow Developer",
      company: "Exterprise Services",
      quote: "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
      rating: 4,
      image: "/aditya.png" // Add image URL for Aditya
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>ServiceNow Script Hub | Organize & Manage Scripts</title>
        <meta name="description" content="The complete solution for organizing and managing your ServiceNow scripts" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-40 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        {/* Navigation */}
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
            <Link href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</Link>
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

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Organize Your <span className="text-orange-600">ServiceNow</span> Scripts Like Never Before
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center"
                >
                  Start Free Trial <FiArrowRight className="ml-2 animate-pulse" />
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-4 border border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>
              {/* Highlighted line added here */}
              <div className="mt-6 text-sm text-orange-600 font-medium border-l-4 border-orange-500 pl-3 py-1 bg-orange-50 inline-block">
                Built by ServiceNow developers for ServiceNow developers
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full bg-orange-100 rounded-2xl -z-10"></div>
              <div className="relative bg-white rounded-xl border border-orange-200 overflow-hidden shadow-xl">
                <div className="px-5 py-3 bg-gray-50 flex items-center border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-500 ml-4">script-include.js</div>
                </div>
                <div className="p-6 font-mono text-sm bg-white">
                  <div className="text-orange-400">// Script Include: DataUtils</div>
                  <div className="text-purple-500">var</div>{' '}
                  <span className="text-blue-500">DataUtils</span>{' '}
                  <span className="text-gray-700">= Class.create();</span>
                  <div className="text-purple-500">DataUtils</div>{' '}
                  <span className="text-gray-700">.prototype = {'{'}</span>
                  <div className="ml-4 text-gray-700">
                    <span className="text-purple-500">initialize</span>{' '}
                    <span className="text-gray-700">: </span>
                    <span className="text-purple-500">function</span>
                    <span className="text-gray-700">() {'{'}</span>
                  </div>
                  <div className="ml-8 text-gray-700">
                    <span className="text-green-600">// Initialization code</span>
                  </div>
                  <div className="ml-4 text-gray-700">{'},'}</div>
                  <div className="ml-4">
                    <span className="text-purple-500">getUserData</span>{' '}
                    <span className="text-gray-700">: </span>
                    <span className="text-purple-500">function</span>
                    <span className="text-gray-700">(userId) {'{'}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-purple-500">var</span>{' '}
                    <span className="text-blue-500">gr</span>{' '}
                    <span className="text-gray-700">= new GlideRecord(</span>
                    <span className="text-green-600">'sys_user'</span>
                    <span className="text-gray-700">);</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.addQuery(</span>
                    <span className="text-green-600">'sys_id'</span>
                    <span className="text-gray-700">, userId);</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.query();</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-purple-500">if</span>{' '}
                    <span className="text-gray-700">(</span>
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.next()) {'{'}</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-purple-500">return</span>{' '}
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.getValue(</span>
                    <span className="text-green-600">'name'</span>
                    <span className="text-gray-700">);</span>
                  </div>
                  <div className="ml-8 text-gray-700">{'}'}</div>
                  <div className="ml-8">
                    <span className="text-purple-500">return</span>{' '}
                    <span className="text-green-600">''</span>
                    <span className="text-gray-700">;</span>
                  </div>
                  <div className="ml-4 text-gray-700">{'}'}</div>
                  <div className="text-gray-700">{'};'}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Spotlight */}
        <section id="features" className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Power Up Your <span className="text-orange-600">ServiceNow</span> Development</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage scripts efficiently and collaborate seamlessly
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveFeature(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${activeFeature === index ? 'bg-white shadow-lg border border-orange-200' : 'bg-orange-100 hover:bg-orange-200/50'}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${activeFeature === index ? 'bg-orange-100 text-orange-600' : 'bg-white text-orange-600'}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 h-full"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-orange-100 text-orange-600 mr-4">
                        {features[activeFeature].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{features[activeFeature].title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{features[activeFeature].extended}</p>
                    <div className="mt-auto bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-center space-x-2 text-orange-600">
                        <FiCheck className="w-5 h-5" />
                        <span className="font-medium">Included in all plans</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <FiUser className="w-8 h-8" />, value: "850+", label: "Active Developers" },
                { icon: <FiCode className="w-8 h-8" />, value: "12K+", label: "Scripts Stored" },
                { icon: <FiShield className="w-8 h-8" />, value: "100%", label: "Uptime Reliability" },
                { icon: <FiClock className="w-8 h-8" />, value: "10x", label: "Faster Script Retrieval" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 p-8 rounded-xl text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by <span className="text-orange-600">ServiceNow</span> Teams Worldwide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our users
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" /> {/* Added image here */}
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, star) => (
                      <FiStar 
                        key={star} 
                        className={`w-5 h-5 ${star < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your <span className="text-white">ServiceNow</span> Workflow?</h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
                Join hundreds of developers who are saving hours every week with organized, accessible scripts
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <FaServicestack className="text-2xl text-orange-600" />
                  <span className="text-xl font-bold text-orange-600">ScriptHub</span>
                </div>
                <p className="text-gray-600 mb-6">The complete solution for ServiceNow script management.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="https://www.servicenow.com/docs/" className="text-gray-600 hover:text-orange-600 transition-colors">Documentation</a></li>
                  <li><a href="https://medium.com/@satyamsingh2003a/servicenow-notes-application-apis-e006e32938cb" className="text-gray-600 hover:text-orange-600 transition-colors">API Reference</a></li>
                  <li><a href="/https://www.servicenow.com/community/" className="text-gray-600 hover:text-orange-600 transition-colors">Community</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Exterprise</h3>
                <ul className="space-y-3">
                  <li><a href="/About_us" className="text-gray-600 hover:text-orange-600 transition-colors">About Us</a></li>
          
                  <li><a href="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} ScriptHub. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="/privacy-policy" className="text-gray-500 hover:text-orange-600 transition-colors">Privacy</a>
                <a href="/Terms" className="text-gray-500 hover:text-orange-600 transition-colors">Terms</a>
                <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}
