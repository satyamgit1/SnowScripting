// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Head from "next/head";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiCode,
//   FiLock,
//   FiLayers,
//   FiZap,
//   FiArrowRight,
//   FiCheck,
//   FiStar,
//   FiChevronRight,
//   FiUser,
//   FiShield,
//   FiClock,
// } from "react-icons/fi";
// import { FaServicestack, FaGithub, FaTwitter } from "react-icons/fa";
// import BlurText from "./BlurText";
// // import SplashCursor from './SplashCursor'

// export default function LandingPage() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const features = [
//     {
//       icon: <FiCode className="w-8 h-8" />,
//       title: "Universal Script Support",
//       description:
//         "Store every type of ServiceNow script with proper syntax highlighting and categorization",
//       extended:
//         "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting.",
//     },
//     {
//       icon: <FiLock className="w-8 h-8" />,
//       title: "Bank-Level Security",
//       description:
//         "Enterprise-grade encryption and access controls for your scripts",
//       extended:
//         "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected.",
//     },
//     {
//       icon: <FiLayers className="w-8 h-8" />,
//       title: "Project Workspaces",
//       description:
//         "Organize scripts by project, client, or instance with custom tags",
//       extended:
//         "Create dedicated workspaces for each project with team collaboration features and custom tagging systems.",
//     },
//     {
//       icon: <FiZap className="w-8 h-8" />,
//       title: "Instant Search",
//       description:
//         "Find any script in milliseconds with our indexed search engine",
//       extended:
//         "Full-text search across all your scripts with filters for script type, date modified, and custom tags.",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Akash Landge",
//       role: "ServiceNow Developer",
//       company: "Exterprise Services",
//       quote:
//         "This tool cut our script retrieval time by 80%. The organization system is exactly what our team needed.",
//       rating: 5,
//       image: "/akash.png", // Add image URL for Akash
//     },
//     {
//       name: "Prakshal jain",
//       role: "Lead Developer",
//       company: "Exterprise Services",
//       quote:
//         "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
//       rating: 5,
//       image: "/jain.png", // Add image URL for Prakshal
//     },
//     {
//       name: "Aditya Gupta",
//       role: "Servicenow Developer",
//       company: "Exterprise Services",
//       quote:
//         "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
//       rating: 4,
//       image: "/aditya.png", // Add image URL for Aditya
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);
//   const handleAnimationComplete = () => {
//     console.log("Animation completed!");
//   };
//   return (
//     <>
//       <Head>
//         <title> NowScript| Organize & Manage Scripts</title>
//         <meta
//           name="description"
//           content="The complete solution for organizing and managing your ServiceNow scripts"
//         />
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
//             <Link href="/">
//               <span className="text-2xl font-bold text-orange-600">
//                 NowScript
//               </span>
//             </Link>
//           </motion.div>
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               href="#features"
//               className="text-gray-700 hover:text-orange-600 transition-colors"
//             >
//               Features
//             </Link>
//             <Link
//               href="/blog"
//               className="text-gray-700 hover:text-orange-600 transition-colors"
//             >
//               Blog
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-700 hover:text-orange-600 transition-colors"
//             >
//               Contact Us
//             </Link>
//             <Link
//               href="/About_us"
//               className="text-gray-700 hover:text-orange-600 transition-colors"
//             >
//               About us
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link
//               href="/auth"
//               className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors"
//             >
//               Sign In
//             </Link>
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
//                 Organize Your{" "}
//                 <span className="text-orange-600">ServiceNow</span> Scripts Like
//                 Never Before
//               </h1>

//               <BlurText
//                 text="The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace."
//                 delay={150}
//                 animateBy="words"
//                 direction="top"
//                 onAnimationComplete={handleAnimationComplete}
//                 className="text-1xl mb-8"
//               />
//               {/* <p className="text-xl text-gray-600 mb-10 max-w-2xl">
//                 The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace.
//               </p> */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center"
//                 >
//                   Start Free Trial{" "}
//                   <FiArrowRight className="ml-2 animate-pulse" />
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
//                   <div className="text-sm text-gray-500 ml-4">
//                     script-include.js
//                   </div>
//                 </div>
//                 <div className="p-6 font-mono text-sm bg-white">
//                   <div className="text-orange-400">
//                     // Script Include: DataUtils
//                   </div>
//                   <div className="text-purple-500">var</div>{" "}
//                   <span className="text-blue-500">DataUtils</span>{" "}
//                   <span className="text-gray-700">= Class.create();</span>
//                   <div className="text-purple-500">DataUtils</div>{" "}
//                   <span className="text-gray-700">.prototype = {"{"}</span>
//                   <div className="ml-4 text-gray-700">
//                     <span className="text-purple-500">initialize</span>{" "}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">() {"{"}</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">
//                     <span className="text-green-600">
//                       // Initialization code
//                     </span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{"},"}</div>
//                   <div className="ml-4">
//                     <span className="text-purple-500">getUserData</span>{" "}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">(userId) {"{"}</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">var</span>{" "}
//                     <span className="text-blue-500">gr</span>{" "}
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
//                     <span className="text-purple-500">if</span>{" "}
//                     <span className="text-gray-700">(</span>
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.next()) {"{"}</span>
//                   </div>
//                   <div className="ml-12">
//                     <span className="text-purple-500">return</span>{" "}
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.getValue(</span>
//                     <span className="text-green-600">'name'</span>
//                     <span className="text-gray-700">);</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">{"}"}</div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">return</span>{" "}
//                     <span className="text-green-600">''</span>
//                     <span className="text-gray-700">;</span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{"}"}</div>
//                   <div className="text-gray-700">{"};"}</div>
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
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Power Up Your{" "}
//                 <span className="text-orange-600">ServiceNow</span> Development
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Everything you need to manage scripts efficiently and
//                 collaborate seamlessly
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
//                     className={`p-6 rounded-xl cursor-pointer transition-all ${
//                       activeFeature === index
//                         ? "bg-white shadow-lg border border-orange-200"
//                         : "bg-orange-100 hover:bg-orange-200/50"
//                     }`}
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div
//                         className={`p-3 rounded-lg ${
//                           activeFeature === index
//                             ? "bg-orange-100 text-orange-600"
//                             : "bg-white text-orange-600"
//                         }`}
//                       >
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                           {feature.title}
//                         </h3>
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
//                       <h3 className="text-2xl font-semibold text-gray-900">
//                         {features[activeFeature].title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 mb-6">
//                       {features[activeFeature].extended}
//                     </p>
//                     <div className="mt-auto bg-orange-50 p-4 rounded-lg border border-orange-200">
//                       <div className="flex items-center space-x-2 text-orange-600">
//                         <FiCheck className="w-5 h-5" />
//                         <span className="font-medium">
//                           Included in all plans
//                         </span>
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
//                 {
//                   icon: <FiUser className="w-8 h-8" />,
//                   value: "850+",
//                   label: "Active Developers",
//                 },
//                 {
//                   icon: <FiCode className="w-8 h-8" />,
//                   value: "12K+",
//                   label: "Scripts Stored",
//                 },
//                 {
//                   icon: <FiShield className="w-8 h-8" />,
//                   value: "100%",
//                   label: "Uptime Reliability",
//                 },
//                 {
//                   icon: <FiClock className="w-8 h-8" />,
//                   value: "10x",
//                   label: "Faster Script Retrieval",
//                 },
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
//                   <div className="text-3xl font-bold text-gray-900 mb-2">
//                     {stat.value}
//                   </div>
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
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Trusted by <span className="text-orange-600">ServiceNow</span>{" "}
//                 Teams Worldwide
//               </h2>
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
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full mr-4"
//                     />{" "}
//                     {/* Added image here */}
//                     <div>
//                       <h4 className="font-semibold text-gray-900">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-sm text-gray-500">
//                         {testimonial.role}, {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-6 italic">
//                     "{testimonial.quote}"
//                   </p>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, star) => (
//                       <FiStar
//                         key={star}
//                         className={`w-5 h-5 ${
//                           star < testimonial.rating
//                             ? "text-orange-500 fill-orange-500"
//                             : "text-gray-300"
//                         }`}
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
//               <h2 className="text-3xl md:text-4xl font-bold mb-8">
//                 Ready to Transform Your{" "}
//                 <span className="text-white">ServiceNow</span> Workflow?
//               </h2>
//               <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
//                 Join hundreds of developers who are saving hours every week with
//                 organized, accessible scripts
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
//                   <span className="text-xl font-bold text-orange-600">
//                     NowScript
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-6">
//                   The complete solution for ServiceNow script management.
//                 </p>
//                 <div className="flex space-x-4">
//                   <a
//                     href="#"
//                     className="text-gray-500 hover:text-orange-600 transition-colors"
//                   >
//                     <FaTwitter className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-500 hover:text-orange-600 transition-colors"
//                   >
//                     <FaGithub className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Resources
//                 </h3>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="https://www.servicenow.com/docs/"
//                       className="text-gray-600 hover:text-orange-600 transition-colors"
//                     >
//                       Documentation
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://medium.com/@satyamsingh2003a/servicenow-notes-application-apis-e006e32938cb"
//                       className="text-gray-600 hover:text-orange-600 transition-colors"
//                     >
//                       API Reference
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/https://www.servicenow.com/community/"
//                       className="text-gray-600 hover:text-orange-600 transition-colors"
//                     >
//                       Community
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/contact"
//                       className="text-gray-600 hover:text-orange-600 transition-colors"
//                     >
//                       Support
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   NowScript
//                 </h3>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="/About_us"
//                       className="text-gray-600 hover:text-orange-600 transition-colors"
//                     >
//                       About Us
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       href="/blog"
//                       className="text-gray-600 hover:text-orange-600 transition-colors"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/contact"
//                       className="text-gray-600 hover:text-orange-600 transition-colors"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-500 mb-4 md:mb-0">
//                 © {new Date().getFullYear()} ScriptHub. All rights reserved.
//               </p>
//               <div className="flex space-x-6">
//                 <a
//                   href="/privacy-policy"
//                   className="text-gray-500 hover:text-orange-600 transition-colors"
//                 >
//                   Privacy
//                 </a>
//                 <a
//                   href="/Terms"
//                   className="text-gray-500 hover:text-orange-600 transition-colors"
//                 >
//                   Terms
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-500 hover:text-orange-600 transition-colors"
//                 >
//                   Cookies
//                 </a>
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



// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Head from "next/head";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import {
//   FiCode,
//   FiLock,
//   FiLayers,
//   FiZap,
//   FiArrowRight,
//   FiCheck,
//   FiStar,
//   FiChevronRight,
//   FiUser,
//   FiShield,
//   FiClock,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";
// import { FaServicestack, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
// import BlurText from "./BlurText";

// export default function LandingPage() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   const features = [
//     {
//       icon: <FiCode className="w-6 h-6" />,
//       title: "Universal Script Support",
//       description: "Store every type of ServiceNow script with proper syntax highlighting and categorization",
//       extended: "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting.",
//       color: "bg-blue-100 text-blue-600"
//     },
//     {
//       icon: <FiLock className="w-6 h-6" />,
//       title: "Bank-Level Security",
//       description: "Enterprise-grade encryption and access controls for your scripts",
//       extended: "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected.",
//       color: "bg-purple-100 text-purple-600"
//     },
//     {
//       icon: <FiLayers className="w-6 h-6" />,
//       title: "Project Workspaces",
//       description: "Organize scripts by project, client, or instance with custom tags",
//       extended: "Create dedicated workspaces for each project with team collaboration features and custom tagging systems.",
//       color: "bg-orange-100 text-orange-600"
//     },
//     {
//       icon: <FiZap className="w-6 h-6" />,
//       title: "Instant Search",
//       description: "Find any script in milliseconds with our indexed search engine",
//       extended: "Full-text search across all your scripts with filters for script type, date modified, and custom tags.",
//       color: "bg-green-100 text-green-600"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Akash Landge",
//       role: "ServiceNow Developer",
//       company: "Exterprise Services",
//       quote: "This tool cut our script retrieval time by 80%. The organization system is exactly what our team needed.",
//       rating: 5,
//       image: "/akash.png"
//     },
//     {
//       name: "Prakshal Jain",
//       role: "Lead Developer",
//       company: "Exterprise Services",
//       quote: "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
//       rating: 5,
//       image: "/jain.png"
//     },
//     {
//       name: "Aditya Gupta",
//       role: "ServiceNow Developer",
//       company: "Exterprise Services",
//       quote: "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
//       rating: 4,
//       image: "/aditya.png"
//     }
//   ];

//   const stats = [
//     {
//       icon: <FiUser className="w-6 h-6" />,
//       value: "850+",
//       label: "Active Developers",
//       color: "bg-blue-100 text-blue-600"
//     },
//     {
//       icon: <FiCode className="w-6 h-6" />,
//       value: "12K+",
//       label: "Scripts Stored",
//       color: "bg-purple-100 text-purple-600"
//     },
//     {
//       icon: <FiShield className="w-6 h-6" />,
//       value: "100%",
//       label: "Uptime Reliability",
//       color: "bg-orange-100 text-orange-600"
//     },
//     {
//       icon: <FiClock className="w-6 h-6" />,
//       value: "10x",
//       label: "Faster Script Retrieval",
//       color: "bg-green-100 text-green-600"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const testimonialInterval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(testimonialInterval);
//   }, []);

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
//         <title>NowScript | Organize & Manage ServiceNow Scripts</title>
//         <meta name="description" content="The complete solution for organizing and managing your ServiceNow scripts" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="min-h-screen bg-white overflow-x-hidden" ref={containerRef}>
//         {/* Floating background elements */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
//           <motion.div 
//             className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//             animate={{
//               x: [0, -30, 0],
//               y: [0, 40, 0],
//               scale: [1, 1.1, 1]
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <motion.div 
//             className="absolute bottom-1/3 -left-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//             animate={{
//               x: [0, 30, 0],
//               y: [0, -40, 0],
//               scale: [1, 1.1, 1]
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 5
//             }}
//           />
//         </div>

//         {/* Sticky header */}
//         <motion.header 
//           className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 z-50"
//           style={{ y }}
//         >
//           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//             <Link href="/" className="flex items-center space-x-2">
//               <FaServicestack className="text-2xl text-blue-600" />
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 NowScript
//               </span>
//             </Link>

//             {/* Desktop navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
//                 Features
//               </button>
//               <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
//                 Testimonials
//               </button>
//               <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
//                 Blog
//               </Link>
//               <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
//                 Contact
//               </Link>
//             </nav>

//             <div className="hidden md:flex items-center space-x-4">
//               <Link href="/auth" className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">
//                 Sign In
//               </Link>
//               <Link href="/auth" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-blue-500/20">
//                 Get Started
//               </Link>
//             </div>

//             {/* Mobile menu button */}
//             <button 
//               className="md:hidden p-2 text-gray-600 hover:text-blue-600"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile menu */}
//           <AnimatePresence>
//             {mobileMenuOpen && (
//               <motion.div 
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="md:hidden overflow-hidden"
//               >
//                 <div className="px-6 py-4 space-y-4">
//                   <button 
//                     onClick={() => scrollToSection('features')} 
//                     className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
//                   >
//                     Features
//                   </button>
//                   <button 
//                     onClick={() => scrollToSection('testimonials')} 
//                     className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
//                   >
//                     Testimonials
//                   </button>
//                   <Link href="/blog" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">
//                     Blog
//                   </Link>
//                   <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">
//                     Contact
//                   </Link>
//                   <div className="pt-4 border-t border-gray-100 space-y-3">
//                     <Link href="/auth" className="block w-full py-2.5 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all">
//                       Get Started
//                     </Link>
//                     <Link href="/auth" className="block w-full py-2.5 text-center text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all">
//                       Sign In
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.header>

//         {/* Hero Section */}
//         <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
//                 <span className="mr-2">✨</span> Now available for all teams
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Organize</span> Your ServiceNow Scripts Like Never Before
//               </h1>
              
//               <BlurText
//                 text="The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace."
//                 delay={150}
//                 animateBy="words"
//                 direction="top"
//                 className="text-xl text-gray-600 mb-8 max-w-2xl"
//               />
              
//               <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
//                 >
//                   Start Free Trial <FiArrowRight className="ml-2 animate-pulse" />
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center"
//                 >
//                   Watch Demo
//                 </Link>
//               </div>
              
//               <div className="flex items-center space-x-4 text-sm text-gray-500">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3].map((i) => (
//                     <img 
//                       key={i}
//                       src={`/user${i}.jpg`}
//                       alt="User"
//                       className="w-8 h-8 rounded-full border-2 border-white"
//                     />
//                   ))}
//                 </div>
//                 <span>Trusted by 850+ ServiceNow developers</span>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl">
//                 <div className="px-5 py-3 bg-gray-50 flex items-center border-b border-gray-200">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="text-sm text-gray-500 ml-4">
//                     script-include.js
//                   </div>
//                 </div>
//                 <div className="p-6 font-mono text-sm bg-gradient-to-br from-gray-50 to-white">
//                   <div className="text-blue-400">
//                     // Script Include: DataUtils
//                   </div>
//                   <div className="text-purple-500">var</div>{" "}
//                   <span className="text-blue-500">DataUtils</span>{" "}
//                   <span className="text-gray-700">= Class.create();</span>
//                   <div className="text-purple-500">DataUtils</div>{" "}
//                   <span className="text-gray-700">.prototype = {"{"}</span>
//                   <div className="ml-4 text-gray-700">
//                     <span className="text-purple-500">initialize</span>{" "}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">() {"{"}</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">
//                     <span className="text-green-600">
//                       // Initialization code
//                     </span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{"},"}</div>
//                   <div className="ml-4">
//                     <span className="text-purple-500">getUserData</span>{" "}
//                     <span className="text-gray-700">: </span>
//                     <span className="text-purple-500">function</span>
//                     <span className="text-gray-700">(userId) {"{"}</span>
//                   </div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">var</span>{" "}
//                     <span className="text-blue-500">gr</span>{" "}
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
//                     <span className="text-purple-500">if</span>{" "}
//                     <span className="text-gray-700">(</span>
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.next()) {"{"}</span>
//                   </div>
//                   <div className="ml-12">
//                     <span className="text-purple-500">return</span>{" "}
//                     <span className="text-blue-500">gr</span>
//                     <span className="text-gray-700">.getValue(</span>
//                     <span className="text-green-600">'name'</span>
//                     <span className="text-gray-700">);</span>
//                   </div>
//                   <div className="ml-8 text-gray-700">{"}"}</div>
//                   <div className="ml-8">
//                     <span className="text-purple-500">return</span>{" "}
//                     <span className="text-green-600">''</span>
//                     <span className="text-gray-700">;</span>
//                   </div>
//                   <div className="ml-4 text-gray-700">{"}"}</div>
//                   <div className="text-gray-700">{"};"}</div>
//                 </div>
//               </div>
              
//               {/* Floating elements around the code editor */}
//               <motion.div 
//                 className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"
//                 animate={{
//                   rotate: [0, 5, 0],
//                   scale: [1, 1.05, 1]
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//               <motion.div 
//                 className="absolute -top-6 -right-6 w-24 h-24 bg-purple-100 rounded-full -z-10"
//                 animate={{
//                   rotate: [0, -5, 0],
//                   scale: [1, 1.05, 1]
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 2
//                 }}
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* Logo cloud */}
//         <section className="py-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <p className="text-center text-gray-500 mb-8">Trusted by teams at</p>
//             <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
//               {['acme', 'globex', 'stark', 'wayne', 'oscorp'].map((company) => (
//                 <motion.div
//                   key={company}
//                   whileHover={{ scale: 1.1 }}
//                   className="opacity-60 hover:opacity-100 transition-opacity"
//                 >
//                   <img 
//                     src={`/${company}-logo.svg`} 
//                     alt={company} 
//                     className="h-8"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="py-20">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Power Up Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ServiceNow</span> Development
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Everything you need to manage scripts efficiently and collaborate seamlessly
//               </p>
//             </motion.div>

//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-50px" }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     onMouseEnter={() => setActiveFeature(index)}
//                     className={`p-6 rounded-xl cursor-pointer transition-all ${
//                       activeFeature === index
//                         ? "bg-white shadow-lg border border-gray-200"
//                         : "bg-gray-50 hover:bg-gray-100"
//                     }`}
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div className={`p-3 rounded-lg ${feature.color} ${activeFeature === index ? 'scale-110' : ''} transition-transform`}>
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600">{feature.description}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 h-full"
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
//                       <div className={`p-3 rounded-lg ${features[activeFeature].color} mr-4`}>
//                         {features[activeFeature].icon}
//                       </div>
//                       <h3 className="text-2xl font-semibold text-gray-900">
//                         {features[activeFeature].title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 mb-6 text-lg">
//                       {features[activeFeature].extended}
//                     </p>
//                     <div className="mt-auto bg-gray-50 p-4 rounded-lg border border-gray-200">
//                       <div className="flex items-center space-x-2 text-blue-600">
//                         <FiCheck className="w-5 h-5" />
//                         <span className="font-medium">
//                           Included in all plans
//                         </span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${stat.color} flex items-center justify-center`}>
//                     {stat.icon}
//                   </div>
//                   <div className="text-3xl font-bold text-gray-900 mb-2 text-center">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-600 text-center">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section id="testimonials" className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ServiceNow</span> Teams
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Don't just take our word for it - hear from our users
//               </p>
//             </motion.div>

//             <div className="relative h-96">
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   className={`absolute inset-0 bg-white p-8 rounded-2xl shadow-md flex flex-col ${activeTestimonial === index ? 'z-10' : 'z-0'}`}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
//                   animate={{ 
//                     opacity: activeTestimonial === index ? 1 : 0.3,
//                     x: activeTestimonial === index ? 0 : (index % 2 === 0 ? 50 : -50),
//                     scale: activeTestimonial === index ? 1 : 0.9
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <div className="flex items-center mb-6">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full mr-4 object-cover"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-gray-900">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-sm text-gray-500">
//                         {testimonial.role}, {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-6 text-lg italic flex-1">
//                     "{testimonial.quote}"
//                   </p>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, star) => (
//                       <FiStar
//                         key={star}
//                         className={`w-5 h-5 ${
//                           star < testimonial.rating
//                             ? "text-yellow-500 fill-yellow-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
              
//               <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 z-20">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveTestimonial(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-8">
//                 Ready to Transform Your <span className="text-white">ServiceNow</span> Workflow?
//               </h2>
//               <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
//                 Join hundreds of developers who are saving hours every week with organized, accessible scripts
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <Link
//                   href="/register"
//                   className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </Link>
//                 <Link
//                   href="#demo"
//                   className="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all"
//                 >
//                   Schedule Demo
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-16 bg-gray-900 text-gray-400">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//               <div>
//                 <div className="flex items-center space-x-3 mb-6">
//                   <FaServicestack className="text-2xl text-blue-400" />
//                   <span className="text-xl font-bold text-white">
//                     NowScript
//                   </span>
//                 </div>
//                 <p className="mb-6">
//                   The complete solution for ServiceNow script management.
//                 </p>
//                 <div className="flex space-x-4">
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     <FaTwitter className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     <FaGithub className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     <FaLinkedin className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4">
//                   Product
//                 </h3>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="#features"
//                       className="hover:text-white transition-colors"
//                     >
//                       Features
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Pricing
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Integrations
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Changelog
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4">
//                   Resources
//                 </h3>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Documentation
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       API Reference
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Community
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Support
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4">
//                   Company
//                 </h3>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="/about"
//                       className="hover:text-white transition-colors"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/blog"
//                       className="hover:text-white transition-colors"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/careers"
//                       className="hover:text-white transition-colors"
//                     >
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/contact"
//                       className="hover:text-white transition-colors"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//               <p className="mb-4 md:mb-0">
//                 © {new Date().getFullYear()} NowScript. All rights reserved.
//               </p>
//               <div className="flex space-x-6">
//                 <a
//                   href="/privacy"
//                   className="hover:text-white transition-colors"
//                 >
//                   Privacy
//                 </a>
//                 <a
//                   href="/terms"
//                   className="hover:text-white transition-colors"
//                 >
//                   Terms
//                 </a>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors"
//                 >
//                   Cookies
//                 </a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  FiCode,
  FiLock,
  FiLayers,
  FiZap,
  FiArrowRight,
  FiCheck,
  FiStar,
  FiChevronRight,
  FiUser,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { FaServicestack, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import BlurText from "./BlurText";
import Header from "pages/Header";

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Vibrant teal-to-purple gradient color scheme
  const colors = {
    primary: "from-teal-500 to-purple-600",
    primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600",
    primaryHover: "hover:from-teal-600 hover:to-purple-700",
    primaryBorder: "border-teal-500",
    secondary: "bg-gray-900",
    accent: "bg-pink-500",
    light: "bg-gray-50",
    dark: "bg-gray-900"
  };

  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Universal Script Support",
      description: "Store every type of ServiceNow script with proper syntax highlighting",
      extended: "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and access controls",
      extended: "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Project Workspaces",
      description: "Organize scripts by project, client, or instance",
      extended: "Create dedicated workspaces for each project with team collaboration features and custom tagging systems.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Instant Search",
      description: "Find any script in milliseconds",
      extended: "Full-text search across all your scripts with filters for script type, date modified, and custom tags.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Akash Landge",
      role: "ServiceNow Developer",
      company: "Exterprise Services",
      quote: "This tool cut our script retrieval time by 80%. The organization system is exactly what our team needed.",
      rating: 5,
      image: "/akash.png"
    },
    {
      name: "Prakshal Jain",
      role: "Lead Developer",
      company: "Exterprise Services",
      quote: "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
      rating: 5,
      image: "/jain.png"
    },
    {
      name: "Aditya Gupta",
      role: "ServiceNow Developer",
      company: "Exterprise Services",
      quote: "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
      rating: 4,
      image: "/aditya.png"
    }
  ];

  const stats = [
    {
      icon: <FiUser className="w-6 h-6" />,
      value: "850+",
      label: "Active Developers",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      value: "12K+",
      label: "Scripts Stored",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      value: "100%",
      label: "Uptime Reliability",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      value: "10x",
      label: "Faster Retrieval",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <>
      <Head>
        <title>NowScript | Organize & Manage ServiceNow Scripts</title>
        <meta name="description" content="The complete solution for organizing and managing your ServiceNow scripts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
      <div className="min-h-screen bg-white overflow-x-hidden" ref={containerRef}>
        {/* Floating gradient background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div 
            className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
            className="absolute bottom-1/3 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-sm font-medium mb-4">
                <span className="mr-2">✨</span> Now available for all teams
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                <span className={colors.primaryText}>Organize</span> Your ServiceNow Scripts Like Never Before
              </h1>
              
              <BlurText
                text="The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl text-gray-600 mb-8 max-w-2xl"
              />
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/register"
                  className={`px-8 py-4 bg-gradient-to-r ${colors.primary} text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center ${colors.primaryHover}`}
                >
                  Start Free Trial <FiArrowRight className="ml-2 animate-pulse" />
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:border-teal-600 hover:text-teal-600 transition-colors flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`/user${i}.jpg`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span>Trusted by 850+ ServiceNow developers</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl">
                <div className="px-5 py-3 bg-gray-50 flex items-center border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-500 ml-4">
                    script-include.js
                  </div>
                </div>
                <div className="p-6 font-mono text-sm bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-teal-500">
                    // Script Include: DataUtils
                  </div>
                  <div className="text-purple-500">var</div>{" "}
                  <span className="text-blue-500">DataUtils</span>{" "}
                  <span className="text-gray-700">= Class.create();</span>
                  <div className="text-purple-500">DataUtils</div>{" "}
                  <span className="text-gray-700">.prototype = {"{"}</span>
                  <div className="ml-4 text-gray-700">
                    <span className="text-purple-500">initialize</span>{" "}
                    <span className="text-gray-700">: </span>
                    <span className="text-purple-500">function</span>
                    <span className="text-gray-700">() {"{"}</span>
                  </div>
                  <div className="ml-8 text-gray-700">
                    <span className="text-green-600">
                      // Initialization code
                    </span>
                  </div>
                  <div className="ml-4 text-gray-700">{"},"}</div>
                  <div className="ml-4">
                    <span className="text-purple-500">getUserData</span>{" "}
                    <span className="text-gray-700">: </span>
                    <span className="text-purple-500">function</span>
                    <span className="text-gray-700">(userId) {"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-purple-500">var</span>{" "}
                    <span className="text-blue-500">gr</span>{" "}
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
                    <span className="text-purple-500">if</span>{" "}
                    <span className="text-gray-700">(</span>
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.next()) {"{"}</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-purple-500">return</span>{" "}
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.getValue(</span>
                    <span className="text-green-600">'name'</span>
                    <span className="text-gray-700">);</span>
                  </div>
                  <div className="ml-8 text-gray-700">{"}"}</div>
                  <div className="ml-8">
                    <span className="text-purple-500">return</span>{" "}
                    <span className="text-green-600">''</span>
                    <span className="text-gray-700">;</span>
                  </div>
                  <div className="ml-4 text-gray-700">{"}"}</div>
                  <div className="text-gray-700">{"};"}</div>
                </div>
              </div>
              
              {/* Floating elements around the code editor */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-100 rounded-2xl -z-10"
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-purple-100 rounded-full -z-10"
                animate={{
                  rotate: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* Logo cloud */}
        <section className="py-12 bg-gradient-to-r from-teal-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-500 mb-8">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {['acme', 'globex', 'stark', 'wayne', 'oscorp'].map((company) => (
                <motion.div
                  key={company}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img 
                    src={`/${company}-logo.svg`} 
                    alt={company} 
                    className="h-8"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power Up Your <span className={colors.primaryText}>ServiceNow</span> Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage scripts efficiently and collaborate seamlessly
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveFeature(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                      activeFeature === index
                        ? "bg-white shadow-lg border border-gray-200"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${feature.color} ${activeFeature === index ? 'scale-110' : ''} transition-transform`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 h-full"
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
                      <div className={`p-3 rounded-lg ${features[activeFeature].color} mr-4`}>
                        {features[activeFeature].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {features[activeFeature].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">
                      {features[activeFeature].extended}
                    </p>
                    <div className="mt-auto bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-2 text-teal-600">
                        <FiCheck className="w-5 h-5" />
                        <span className="font-medium">
                          Included in all plans
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-teal-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${stat.color} flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 text-center">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-center">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by <span className={colors.primaryText}>ServiceNow</span> Teams
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our users
              </p>
            </motion.div>

            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 bg-white p-8 rounded-2xl shadow-md flex flex-col ${activeTestimonial === index ? 'z-10' : 'z-0'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  animate={{ 
                    opacity: activeTestimonial === index ? 1 : 0.3,
                    x: activeTestimonial === index ? 0 : (index % 2 === 0 ? 50 : -50),
                    scale: activeTestimonial === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg italic flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, star) => (
                      <FiStar
                        key={star}
                        className={`w-5 h-5 ${
                          star < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 z-20">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-teal-600 w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your <span className="text-white">ServiceNow</span> Workflow?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
                Join hundreds of developers who are saving hours every week with organized, accessible scripts
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-white text-teal-600 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-teal-600 transition-all"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <FaServicestack className="text-2xl text-teal-400" />
                  <span className="text-xl font-bold text-white">
                    NowScript
                  </span>
                </div>
                <p className="mb-6">
                  The complete solution for ServiceNow script management.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">
                © {new Date().getFullYear()} NowScript. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}