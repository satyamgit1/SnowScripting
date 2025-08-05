// 'use client';
// import { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// const teamMembers = [
//   {
//     name: 'Marc L.',
//     role: 'Frontend Architect',
//     image: 'https://i.pravatar.cc/300?img=12',
//     bio: 'Specializing in React ecosystems with 8+ years of experience building performant, accessible web applications',
//     color: 'from-blue-500 to-indigo-600',
//     accentColor: 'bg-indigo-500',
//     socials: {
//       twitter: '#',
//       linkedin: '#',
//       github: '#',
//       portfolio: '#'
//     }
//   },
//   {
//     name: 'Felicia A.',
//     role: 'UX/UI Lead Designer',
//     image: 'https://i.pravatar.cc/300?img=15',
//     bio: 'Crafting intuitive digital experiences with a focus on human-centered design principles and accessibility',
//     color: 'from-purple-500 to-pink-600',
//     accentColor: 'bg-pink-500',
//     socials: {
//       twitter: '#',
//       linkedin: '#',
//       dribbble: '#'
//     }
//   },
//   {
//     name: 'Jas G.',
//     role: 'Backend Engineer',
//     image: 'https://i.pravatar.cc/300?img=32',
//     bio: 'Building scalable microservices and APIs with Node.js, Python, and cloud-native technologies',
//     color: 'from-emerald-500 to-teal-600',
//     accentColor: 'bg-teal-500',
//     socials: {
//       twitter: '#',
//       linkedin: '#',
//       github: '#'
//     }
//   },
//   {
//     name: 'Satyam Singh.',
//     role: 'Full Stack Developer',
//     image: 'my_pic.jpg',
//     bio: 'Implementing CI/CD pipelines and infrastructure as code for seamless deployments',
//     color: 'from-amber-500 to-orange-600',
//     accentColor: 'bg-orange-500',
//     socials: {
//       linkedin: '#',
//       github: '#'
//     }
//   }
// ];

// const socialIcons = {
//   twitter: (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//     </svg>
//   ),
//   linkedin: (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//     </svg>
//   ),
//   github: (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//     </svg>
//   ),
//   dribbble: (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.847 7.929c-.235-.447-.506-.872-.812-1.272-.021.025-.042.05-.062.075-2.412 2.878-5.572 4.468-8.932 5.51 1.325 2.213 2.55 4.342 3.061 5.593 3.574-1.326 6.23-4.83 6.745-8.906zm-6.305 12.936c-.33.069-.665.117-1.005.141-.188-1.184-.741-3.205-1.89-5.471-.024.024-.048.047-.072.07-.002.002-.004.003-.006.005-3.073 2.885-5.254 7.302-5.665 9.1 1.159.388 2.408.6 3.701.6 1.822 0 3.54-.497 5.002-1.361l.002-.001c-.932-1.529-1.423-3.387-1.067-5.083zm-9.195-5.699c-.151-.004-.302-.008-.453-.008-.073 0-.146.001-.219.002.029-1.435.312-2.843.861-4.161 3.127.229 6.476-.041 9.195-1.181.166.323.323.652.47.987.023.053.046.106.068.159-3.198 1.146-6.586 1.38-9.822.202zm-2.347-5.308c-.699 1.286-1.061 2.726-1.061 4.21 0 .162.006.323.014.484-1.028-.188-1.986-.556-2.834-1.072.343-2.792 1.995-5.176 4.272-6.534-.396.813-.678 1.692-.828 2.615-.077.266-.13.539-.163.815v.002c-.313.076-.62.169-.92.275-.236.08-.466.168-.69.261-.048.019-.096.039-.143.059-.015.007-.03.014-.045.02-.012.005-.023.01-.035.016l-.001.001zm16.604-2.489c-.847.515-1.805.883-2.833 1.071.008-.161.014-.322.014-.484 0-1.484-.362-2.924-1.061-4.21-.313-.076-.62-.169-.92-.275-.236-.08-.466-.168-.69-.261-.048-.019-.096-.039-.143-.059-.015-.007-.03-.014-.045-.02-.012-.005-.023-.01-.035-.016l-.001-.001c-.313-.133-.632-.252-.957-.357.021-.277.052-.552.093-.824 2.277 1.358 3.939 3.742 4.272 6.534z" />
//     </svg>
//   ),
//   portfolio: (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M20 5.4c-.7.3-1.5.5-2.4.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.4 0-.6.8-.6 1.5-1.3 2.1-2.1z" />
//     </svg>
//   )
// };

// const TeamCarousel = () => {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const carouselRef = useRef(null);
//   const x = useMotionValue(0);
//   const rotateY = useTransform(x, [-100, 0, 100], [-15, 0, 15], { clamp: true });

//   const paginate = (newDirection) => {
//     setDirection(newDirection);
//     setCurrent((prev) => (prev + newDirection + teamMembers.length) % teamMembers.length);
//   };

//   useEffect(() => {
//     if (isHovering) return;
    
//     const timer = setInterval(() => {
//       paginate(1);
//     }, 5000);
    
//     return () => clearInterval(timer);
//   }, [isHovering]);

//   // Enhanced animation variants
//   const cardVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8,
//       rotateY: direction > 0 ? 30 : -30,
//       filter: 'blur(4px)'
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       rotateY: 0,
//       filter: 'blur(0px)',
//       transition: {
//         x: { type: "spring", stiffness: 400, damping: 30 },
//         opacity: { duration: 0.4 },
//         scale: { duration: 0.4 },
//         rotateY: { duration: 0.6 },
//         filter: { duration: 0.3 }
//       }
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8,
//       rotateY: direction < 0 ? 30 : -30,
//       filter: 'blur(4px)',
//       transition: {
//         x: { type: "spring", stiffness: 400, damping: 30 },
//         opacity: { duration: 0.3 },
//         scale: { duration: 0.3 },
//         rotateY: { duration: 0.4 },
//         filter: { duration: 0.2 }
//       }
//     })
//   };

//   const handleDragEnd = (event, info) => {
//     if (info.offset.x > 100) {
//       paginate(-1);
//     } else if (info.offset.x < -100) {
//       paginate(1);
//     }
//   };

//   return (
//     <div 
//       className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden"
//       ref={carouselRef}
//     >
//       {/* Floating background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-10"
//             style={{
//               width: `${Math.random() * 300 + 100}px`,
//               height: `${Math.random() * 300 + 100}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               x: [0, Math.random() * 200 - 100],
//               y: [0, Math.random() * 200 - 100],
//               rotate: [0, Math.random() * 360],
//             }}
//             transition={{
//               duration: Math.random() * 20 + 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Header section */}
//       <div className="text-center mb-12 md:mb-16 z-10 max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white shadow-sm mb-4"
//         >
//           <span className="text-sm font-medium text-gray-600">✨ Meet the Team</span>
//         </motion.div>
        
//         <motion.h1 
//           className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           Our Creative Minds
//         </motion.h1>
        
//         <motion.p 
//           className="text-lg text-gray-500 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           A team of passionate professionals dedicated to crafting exceptional digital experiences
//         </motion.p>
//       </div>

//       {/* Carousel container */}
//       <div 
//         className="relative h-[500px] w-full max-w-4xl flex items-center justify-center overflow-visible"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Navigation arrows */}
//         <motion.button 
//           onClick={() => paginate(-1)}
//           className="absolute left-0 md:left-[-80px] z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
//           aria-label="Previous team member"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="relative">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             <motion.span 
//               className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 -z-10"
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0, 0.3, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity
//               }}
//             />
//           </div>
//         </motion.button>
        
//         <motion.button 
//           onClick={() => paginate(1)}
//           className="absolute right-0 md:right-[-80px] z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
//           aria-label="Next team member"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="relative">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//             <motion.span 
//               className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 -z-10"
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0, 0.3, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity
//               }}
//             />
//           </div>
//         </motion.button>

//         {/* Main carousel */}
//         <AnimatePresence initial={false} custom={direction} mode="wait">
//           <motion.div
//             key={current}
//             custom={direction}
//             variants={cardVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             drag="x"
//             dragConstraints={carouselRef}
//             onDragEnd={handleDragEnd}
//             style={{ x, rotateY }}
//             className="absolute w-[300px] md:w-[360px] h-[480px] bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-between text-center p-6 border border-gray-100 overflow-hidden cursor-grab active:cursor-grabbing"
//           >
//             {/* Gradient accent */}
//             <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${teamMembers[current].color}`}></div>
            
//             {/* Profile section */}
//             <div className="mt-8 flex flex-col items-center">
//               {/* Floating avatar with shadow */}
//               <motion.div 
//                 className="relative mb-6 group"
//                 animate={{ 
//                   y: [0, -15, 0],
//                   rotate: [0, 5, -5, 0]
//                 }}
//                 transition={{ 
//                   duration: 8, 
//                   repeat: Infinity, 
//                   ease: "easeInOut" 
//                 }}
//               >
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-60 blur-md -z-10 -inset-1 group-hover:opacity-80 transition-opacity"></div>
//                 <img
//                   src={teamMembers[current].image}
//                   alt={teamMembers[current].name}
//                   className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover z-10"
//                 />
//                 <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${teamMembers[current].color} opacity-20`}></div>
//               </motion.div>
              
//               <h3 className="text-2xl font-bold text-gray-800 mb-1">{teamMembers[current].name}</h3>
//               <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${teamMembers[current].color} bg-clip-text text-transparent`}>
//                 {teamMembers[current].role}
//               </p>
//               <p className="text-gray-600 mb-6 px-4">{teamMembers[current].bio}</p>
//             </div>
            
//             {/* Social links */}
//             <div className="flex space-x-4 mb-8">
//               {Object.entries(teamMembers[current].socials).map(([platform, url]) => (
//                 <motion.a
//                   key={platform}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-10 h-10 rounded-full flex items-center justify-center ${teamMembers[current].accentColor} bg-opacity-10 hover:bg-opacity-20 transition-all`}
//                   whileHover={{ 
//                     scale: 1.2,
//                     y: -5,
//                     backgroundColor: `rgba(var(--${teamMembers[current].accentColor.replace('bg-', '').replace('-500', '')}, 0.3)`
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {socialIcons[platform]}
//                 </motion.a>
//               ))}
//             </div>
            
//             {/* Skill tags */}
//             <div className="flex flex-wrap justify-center gap-2 mb-6">
//               {['React', 'TypeScript', 'Node.js', 'Figma', 'AWS'].map((skill) => (
//                 <motion.span
//                   key={skill}
//                   className={`text-xs font-medium px-3 py-1 rounded-full ${teamMembers[current].accentColor} bg-opacity-10 text-gray-700`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Enhanced pagination indicators */}
//       <div className="mt-12 flex items-center space-x-4 z-10">
//         {teamMembers.map((_, idx) => (
//           <motion.button
//             key={idx}
//             onClick={() => {
//               setDirection(idx > current ? 1 : -1);
//               setCurrent(idx);
//             }}
//             className="relative"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <div className={`w-3 h-3 rounded-full ${idx === current ? teamMembers[current].accentColor : 'bg-gray-300'}`} />
//             {idx === current && (
//               <motion.span 
//                 className="absolute inset-0 rounded-full border-2 border-gray-400 border-opacity-50"
//                 animate={{
//                   scale: [1, 1.6, 1],
//                   opacity: [0, 0.5, 0]
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity
//                 }}
//               />
//             )}
//           </motion.button>
//         ))}
//       </div>

//       {/* Animated progress bar */}
//       <div className="mt-8 w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden z-10">
//         <motion.div
//           className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//           key={current}
//         />
//       </div>

//       {/* Team stats footer */}
//       <motion.div 
//         className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto z-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <div className="text-2xl font-bold text-indigo-600">8+</div>
//           <div className="text-gray-500 text-sm">Years Experience</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <div className="text-2xl font-bold text-pink-600">50+</div>
//           <div className="text-gray-500 text-sm">Projects Completed</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <div className="text-2xl font-bold text-teal-600">100%</div>
//           <div className="text-gray-500 text-sm">Client Satisfaction</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <div className="text-2xl font-bold text-orange-500">∞</div>
//           <div className="text-gray-500 text-sm">Creative Ideas</div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default TeamCarousel;


'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Header from './Header';

const teamMembers = [
  {
    name: 'Akash Landge',
    role: 'Frontend Architect',
    image: 'akash.png',
    bio: 'Specializing in React ecosystems with 8+ years of experience building performant, accessible web applications',
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'bg-indigo-500',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      portfolio: '#'
    }
  },
  {
    name: 'Prakshal Jain.',
    role: 'Senior Software Engineer',
    image: 'jain.png',
    bio: 'Crafting intuitive digital experiences with a focus on human-centered design principles and accessibility',
    color: 'from-purple-500 to-pink-600',
    accentColor: 'bg-pink-500',
    socials: {
      twitter: '#',
      linkedin: '#',
      dribbble: '#'
    }
  },
  {
    name: 'Aditya Gupta',
    role: 'ServiceNow Developer',
    image: 'aditya.png',
    bio: 'Building scalable microservices and APIs with Node.js, Python, and cloud-native technologies',
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'bg-teal-500',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Satyam Singh',
    role: 'Full Stack Developer',
    image: 'my_pic.jpg',
    bio: 'Implementing CI/CD pipelines and infrastructure as code for seamless deployments',
    color: 'from-amber-500 to-orange-600',
    accentColor: 'bg-orange-500',
    socials: {
      linkedin: '#',
      github: '#'
    }
  }
];

const socialIcons = {
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  dribbble: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.847 7.929c-.235-.447-.506-.872-.812-1.272-.021.025-.042.05-.062.075-2.412 2.878-5.572 4.468-8.932 5.51 1.325 2.213 2.55 4.342 3.061 5.593 3.574-1.326 6.23-4.83 6.745-8.906zm-6.305 12.936c-.33.069-.665.117-1.005.141-.188-1.184-.741-3.205-1.89-5.471-.024.024-.048.047-.072.07-.002.002-.004.003-.006.005-3.073 2.885-5.254 7.302-5.665 9.1 1.159.388 2.408.6 3.701.6 1.822 0 3.54-.497 5.002-1.361l.002-.001c-.932-1.529-1.423-3.387-1.067-5.083zm-9.195-5.699c-.151-.004-.302-.008-.453-.008-.073 0-.146.001-.219.002.029-1.435.312-2.843.861-4.161 3.127.229 6.476-.041 9.195-1.181.166.323.323.652.47.987.023.053.046.106.068.159-3.198 1.146-6.586 1.38-9.822.202zm-2.347-5.308c-.699 1.286-1.061 2.726-1.061 4.21 0 .162.006.323.014.484-1.028-.188-1.986-.556-2.834-1.072.343-2.792 1.995-5.176 4.272-6.534-.396.813-.678 1.692-.828 2.615-.077.266-.13.539-.163.815v.002c-.313.076-.62.169-.92.275-.236.08-.466.168-.69.261-.048.019-.096.039-.143.059-.015.007-.03.014-.045.02-.012.005-.023.01-.035.016l-.001.001zm16.604-2.489c-.847.515-1.805.883-2.833 1.071.008-.161.014-.322.014-.484 0-1.484-.362-2.924-1.061-4.21-.313-.076-.62-.169-.92-.275-.236-.08-.466-.168-.69-.261-.048-.019-.096-.039-.143-.059-.015-.007-.03-.014-.045-.02-.012-.005-.023-.01-.035-.016l-.001-.001c-.313-.133-.632-.252-.957-.357.021-.277.052-.552.093-.824 2.277 1.358 3.939 3.742 4.272 6.534z" />
    </svg>
  ),
  portfolio: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 5.4c-.7.3-1.5.5-2.4.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.4 0-.6.8-.6 1.5-1.3 2.1-2.1z" />
    </svg>
  )
};

const TeamCarousel = () => {
  const [current, setCurrent] = useState(1); // Start with middle card
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 0, 100], [-15, 0, 15], { clamp: true });

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + teamMembers.length) % teamMembers.length);
  };

  useEffect(() => {
    if (isHovering) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, 2000);
    
    return () => clearInterval(timer);
  }, [isHovering, current]);

  // Calculate visible cards (previous, current, next)
  const getVisibleCards = () => {
    const prev = (current - 1 + teamMembers.length) % teamMembers.length;
    const next = (current + 1) % teamMembers.length;
    return [prev, current, next];
  };

  const visibleCards = getVisibleCards();

  // Card animation variants
  const cardVariants = {
    left: {
      x: -200,
      scale: 0.85,
      opacity: 0.7,
      zIndex: 1,
      filter: 'blur(1px)',
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 2,
      filter: 'blur(0px)',
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    right: {
      x: 200,
      scale: 0.85,
      opacity: 0.7,
      zIndex: 1,
      filter: 'blur(1px)',
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      paginate(-1);
    } else if (info.offset.x < -100) {
      paginate(1);
    }
  };

  return (
    <div className='p-15'>
    <Header />
 <div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden"
      ref={carouselRef}
    >
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Header section */}
      <div className="text-center mb-12 md:mb-16 z-10 max-w-4xl mx-auto">  
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Team
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A team of passionate professionals dedicated to crafting exceptional digital experiences
        </motion.p>
      </div>

      {/* Carousel container */}
      <div 
        className="relative h-[500px] w-full max-w-4xl flex items-center justify-center overflow-visible"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Navigation arrows */}
        <motion.button 
          onClick={() => paginate(-1)}
          className="absolute left-0 md:left-[-80px] z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Previous team member"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <motion.span 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 -z-10"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </div>
        </motion.button>
        
        <motion.button 
          onClick={() => paginate(1)}
          className="absolute right-0 md:right-[-80px] z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Next team member"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <motion.span 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 -z-10"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </div>
        </motion.button>

        {/* Main carousel with three visible cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence custom={direction}>
            {visibleCards.map((index, position) => (
              <motion.div
                key={index}
                custom={position}
                variants={cardVariants}
                initial={direction === 1 ? "right" : "left"}
                animate={position === 1 ? "center" : position === 0 ? "left" : "right"}
                exit="exit"
                drag={position === 1 ? "x" : false}
                dragConstraints={carouselRef}
                onDragEnd={position === 1 ? handleDragEnd : undefined}
                style={position === 1 ? { x, rotateY } : {}}
                className={`absolute w-[300px] md:w-[360px] h-[480px] bg-white rounded-3xl shadow-xl flex flex-col items-center justify-between text-center p-6 border border-gray-100 overflow-hidden ${
                  position === 1 ? "cursor-grab active:cursor-grabbing z-10" : "z-0"
                }`}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${teamMembers[index].color}`}></div>
                
                {/* Profile section */}
                <div className="mt-8 flex flex-col items-center">
                  {/* Floating avatar with shadow */}
                  <motion.div 
                    className="relative mb-6 group"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-60 blur-md -z-10 -inset-1 group-hover:opacity-80 transition-opacity"></div>
                    <img
                      src={teamMembers[index].image}
                      alt={teamMembers[index].name}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover z-10"
                    />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${teamMembers[index].color} opacity-20`}></div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{teamMembers[index].name}</h3>
                  <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${teamMembers[index].color} bg-clip-text text-transparent`}>
                    {teamMembers[index].role}
                  </p>
                  <p className="text-gray-600 mb-6 px-4">{teamMembers[index].bio}</p>
                </div>
                
                {/* Social links */}
                <div className="flex space-x-4 mb-8">
                  {Object.entries(teamMembers[index].socials).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${teamMembers[index].accentColor} bg-opacity-10 hover:bg-opacity-20 transition-all`}
                      whileHover={{ 
                        scale: 1.2,
                        y: -5,
                        backgroundColor: `rgba(var(--${teamMembers[index].accentColor.replace('bg-', '').replace('-500', '')}, 0.3)`
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {socialIcons[platform]}
                    </motion.a>
                  ))}
                </div>
                
                {/* Skill tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {['React', 'TypeScript', 'Node.js', 'Figma', 'AWS'].map((skill) => (
                    <motion.span
                      key={skill}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${teamMembers[index].accentColor} bg-opacity-10 text-gray-700`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced pagination indicators */}
      <div className="mt-12 flex items-center space-x-4 z-10">
        {teamMembers.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className="relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-3 h-3 rounded-full ${idx === current ? teamMembers[current].accentColor : 'bg-gray-300'}`} />
            {idx === current && (
              <motion.span 
                className="absolute inset-0 rounded-full border-2 border-gray-400 border-opacity-50"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Animated progress bar */}
      <div className="mt-8 w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden z-10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          key={current}
        />
      </div>

      {/* Team stats footer */}
      <motion.div 
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-indigo-600">8+</div>
          <div className="text-gray-500 text-sm">Years Experience</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-pink-600">50+</div>
          <div className="text-gray-500 text-sm">Projects Completed</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-teal-600">100%</div>
          <div className="text-gray-500 text-sm">Client Satisfaction</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-orange-500">∞</div>
          <div className="text-gray-500 text-sm">Creative Ideas</div>
        </div>
      </motion.div>
    </div>
    </div>
   
  );
};

export default TeamCarousel;