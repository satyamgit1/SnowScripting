'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Header from './Header';
import Footer from 'components/Footer';

const teamMembers = [
  {
    name: 'Satyam Singh',
    role: 'Full Stack Developer',
    image: 'me.png',
    bio: 'Full Stack Developer & ServiceNow Developer with hands-on experience in scripting,developing user-friendly portals using Next.js, React.js, and Angular.',
    color: 'from-amber-500 to-orange-600',
    accentColor: 'bg-orange-500',
    socials: {
      linkedin: 'https://www.linkedin.com/in/satyam-singh-612415223/',
      github: 'https://github.com/satyamgit1',
      portfolio: 'https://portfolio-git-main-satyamgit1s-projects.vercel.app/',

    }
  },
  {
    name: 'Akash Landge',
    role: 'ServiceNow Developer',
    image: 'akash.png',
    bio: 'ServiceNow Developer with hands-on experience in Client Scripts and Server-side Scripts. Skilled in Java development with practical expertise in building and managing applications.',
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'bg-indigo-500',
    socials: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/akash-landge-692496214/',
      // github: '#',
      portfolio: '#'
    }
  },
  {
    name: 'Prakshal Jain.',
    role: 'Senior Software Developer',
    image: 'jain.png',
    bio: 'Full-stack developer and ServiceNow expert skilled in Java, Spring Boot, and Apache Kafka. I enhance business solutions and user experience with ServiceNow ITSM and CSM modules',
    color: 'from-purple-500 to-pink-600',
    accentColor: 'bg-pink-500',
    socials: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/prakshal-jain-79379a17b/',
      dribbble: '#'
    }
  },
  {
    name: 'Priyanshu Anand',
    role: 'ServiceNow Developer',
    image: 'priyanshu.png',
    bio: 'Building scalable microservices and APIs with Node.js, Python, and cloud-native technologies',
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'bg-teal-500',
    socials: {
      // twitter: '#',
      linkedin: 'https://www.linkedin.com/in/priyanshu-anand-b57915269/',
      // github: '#'
    }
  },
  {
    name: 'M shahvez',
    role: 'Software Developer',
    image: 'shahvej.png',
    bio: '',
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'bg-teal-500',
    socials: {
      // twitter: '#',
      linkedin: 'https://www.linkedin.com/in/mohd-shahvej-629aa81a8/',
      // github: '#'
    }
  },
  {
    name: 'Aditya Gupta',
    role: 'ServiceNow Developer',
    image: 'aditya.png',
    bio: '',
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'bg-teal-500',
    socials: {
      // twitter: '#',
      linkedin: 'https://www.linkedin.com/in/aditya-gupta-675b681b0/',
      // github: '#'
    }
  }
];

const socialIcons = {

  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.230.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  dribbble: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.847 7.929c-.235-.447-.506-.872-.812-1.272-.021.025-.042.050-.062.075-2.412 2.878-5.572 4.468-8.932 5.51 1.325 2.213 2.55 4.342 3.061 5.593 3.574-1.326 6.23-4.83 6.745-8.906zm-6.305 12.936c-.33.069-.665.117-1.005.141-.188-1.184-.741-3.205-1.89-5.471-.024.024-.048.047-.072.070-.002.002-.004.003-.006.005-3.073 2.885-5.254 7.302-5.665 9.1 1.159.388 2.408.6 3.701.6 1.822 0 3.54-.497 5.002-1.361l.002-.001c-.932-1.529-1.423-3.387-1.067-5.083zm-9.195-5.699c-.151-.004-.302-.008-.453-.008-.073 0-.146.001-.219.002.029-1.435.312-2.843.861-4.161 3.127.229 6.476-.041 9.195-1.181.166.323.323.652.470.987.023.053.046.106.068.159-3.198 1.146-6.586 1.38-9.822.202zm-2.347-5.308c-.699 1.286-1.061 2.726-1.061 4.210 0 .162.006.323.014.484-1.028-.188-1.986-.556-2.834-1.072.343-2.792 1.995-5.176 4.272-6.534-.396.813-.678 1.692-.828 2.615-.077.266-.13.539-.163.815v.002c-.313.076-.62.169-.92.275-.236.08-.466.168-.69.261-.048.019-.096.039-.143.059-.015.007-.030.014-.045.020-.012.005-.023.010-.035.016l-.001.001zm16.604-2.489c-.847.515-1.805.883-2.833 1.071.008-.161.014-.322.014-.484 0-1.484-.362-2.924-1.061-4.210-.313-.076-.62-.169-.92-.275-.236-.08-.466-.168-.69-.261-.048-.019-.096-.039-.143-.059-.015-.007-.030-.014-.045-.020-.012-.005-.023-.010-.035-.016l-.001-.001c-.313-.133-.632-.252-.957-.357.021-.277.052-.552.093-.824 2.277 1.358 3.939 3.742 4.272 6.534z" />
    </svg>
  ),
  portfolio: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 5.4c-.7.3-1.5.5-2.4.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1 .9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.4 0-.6.8-.6 1.5-1.3 2.1-2.1z" />
    </svg>
  )
};

const OurTeam = () => {
  const [current, setCurrent] = useState(0); // Start with Satyam Singh (index 0)
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 0, 100], [-15, 0, 15], { clamp: true });

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + teamMembers.length) % teamMembers.length);
  };

  useEffect(() => {
    if (isHovering) return;
    
    // On initial load, show Satyam for longer before starting rotation
    if (isInitialLoad) {
      const initialTimer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 3000); // Show Satyam for 3 seconds initially
      
      return () => clearTimeout(initialTimer);
    }
    
    // Regular rotation after initial load
    const timer = setInterval(() => {
      paginate(1);
    }, 2000);
    
    return () => clearInterval(timer);
  }, [isHovering, current, isInitialLoad]);

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
    <div className='pt-15'>
      <Header />
      <div 
        className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden"
        ref={carouselRef}
      >
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-emerald-900/10 to-green-900/10 opacity-20"
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
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Team
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* A team of passionate professionals dedicated to crafting exceptional digital experiences */}
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
            className="absolute left-0 md:left-[-80px] z-20 bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-emerald-800"
            aria-label="Previous team member"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <motion.span 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-900/20 to-green-900/20 opacity-0 group-hover:opacity-100 -z-10"
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
            className="absolute right-0 md:right-[-80px] z-20 bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-emerald-800"
            aria-label="Next team member"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <motion.span 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-900/20 to-green-900/20 opacity-0 group-hover:opacity-100 -z-10"
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
                  className={`absolute w-[300px] md:w-[360px] h-[480px] bg-gray-800 rounded-3xl shadow-xl flex flex-col items-center justify-between text-center p-6 border border-emerald-800 overflow-hidden ${
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
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 opacity-60 blur-md -z-10 -inset-1 group-hover:opacity-80 transition-opacity"></div>
                      <img
                        src={teamMembers[index].image}
                        alt={teamMembers[index].name}
                        className="w-32 h-32 rounded-full border-4 border-gray-700 shadow-lg object-cover z-10"
                      />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${teamMembers[index].color} opacity-20`}></div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{teamMembers[index].name}</h3>
                    <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${teamMembers[index].color} bg-clip-text text-transparent`}>
                      {teamMembers[index].role}
                    </p>
                    <p className="text-gray-400 mb-6 px-4">{teamMembers[index].bio}</p>
                  </div>
                  
                  {/* Social links */}
                  <div className="flex space-x-4 mb-8">
                    {Object.entries(teamMembers[index].socials).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${teamMembers[index].accentColor} bg-opacity-10 hover:bg-opacity-20 transition-all border border-gray-700`}
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
                        className={`text-xs font-medium px-3 py-1 rounded-full ${teamMembers[index].accentColor} bg-opacity-10 text-gray-300 border border-gray-700`}
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
              <div className={`w-3 h-3 rounded-full ${idx === current ? teamMembers[current].accentColor : 'bg-gray-600'}`} />
              {idx === current && (
                <motion.span 
                  className="absolute inset-0 rounded-full border-2 border-emerald-400 border-opacity-50"
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
        <div className="mt-8 w-64 h-1.5 bg-gray-700 rounded-full overflow-hidden z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: isInitialLoad ? 3 : 2, repeat: Infinity, ease: "linear" }}
            key={current}
          />
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;