import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaServicestack } from 'react-icons/fa';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

export default function About() {
  return (
    <>
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
          <Link href="/features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</Link>
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
      <Head>
      
        <title>About Us | ScriptHub</title>
        <meta name="description" content="About Satyam Singh - ServiceNow Developer, Full Stack Developer, and Web Development Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 px-4"
        >
          <motion.div 
            className="mb-8"
            whileHover={{ rotate: 5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/my_pic.jpg"
              alt="Satyam Singh"
              width={192}
              height={192}
              className="w-48 h-48 mx-auto rounded-full border-4 border-orange-500 shadow-2xl object-cover"
              priority
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Satyam Singh
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I transform visions into digital reality. As a passionate developer, I combine technical expertise with creative problem-solving to build exceptional web experiences.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="https://www.linkedin.com/in/satyam-singh-612415223/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center"
            >
              <FiLinkedin className="mr-2" /> LinkedIn
            </a>
            <a 
              href="https://github.com/satyamgit1" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-all flex items-center"
            >
              <FiGithub className="mr-2" /> GitHub
            </a>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 py-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            variants={item}
          >
            Professional Journey
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience 1 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500"
              variants={item}
              whileHover={hoverEffect}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">ServiceNow Developer</h3>
                  <p className="text-gray-600">@Exterprise • Jan 2025 – Present</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Developed and customized ServiceNow modules to streamline IT service management
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Designed business rules and workflows to automate complex processes
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Collaborated with cross-functional teams to deliver high-quality solutions
                </li>
              </ul>
            </motion.div>

            {/* Experience 2 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
              variants={item}
              whileHover={hoverEffect}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Full Stack Developer</h3>
                  <p className="text-gray-600">Freelance • 2020 – Present</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Built responsive web applications using modern JavaScript frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Implemented RESTful APIs and database architectures
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Optimized applications for performance and user experience
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 - SocietySathi */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">SocietySathi</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Apartment Management System</h3>
                <p className="text-gray-600 mb-4">Next.js, Express, Node.js, MongoDB</p>
                <p className="text-gray-700 mb-6">A comprehensive solution for apartment management with features for residents and administrators.</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/satyamgit1/SocietySathi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-orange-500 hover:text-orange-700"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://society-sathi.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-orange-500 hover:text-orange-700"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Varuna Realty */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Varuna Realty</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Real Estate Platform</h3>
                <p className="text-gray-600 mb-4">Next.js, Tailwind CSS, Firebase</p>
                <p className="text-gray-700 mb-6">A modern real estate platform showcasing properties with filters, search functionality, and contact forms.</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/satyamgit1/varunarealty" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://www.varunarealty.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3 - JavaScript Quiz */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">JavaScript Quiz</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">100 JavaScript Questions</h3>
                <p className="text-gray-600 mb-4">React, TypeScript, Next.js</p>
                <p className="text-gray-700 mb-6">Interactive quiz application featuring 100+ JavaScript questions to test and improve coding knowledge.</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/satyamgit1/100-javascript-question-app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-500 hover:text-purple-700"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://100-javascript-question-app.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-500 hover:text-purple-700"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 4 - Bhagavad-gita */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Bhagavad-gita</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Scripture Exploration Platform</h3>
                <p className="text-gray-600 mb-4">Next.js, Tailwind CSS, API Integration</p>
                <p className="text-gray-700 mb-6">Interactive platform for exploring the Bhagavad Gita with dynamic chapter and verse retrieval.</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/satyamgit1/bhagavad_gita" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-green-500 hover:text-green-700"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://bhagavad-gita-bm6e-git-main-satyamgit1s-projects.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-green-500 hover:text-green-700"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 5 - Portfolio */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">My Portfolio</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Personal Portfolio</h3>
                <p className="text-gray-600 mb-4">Next.js, Tailwind CSS, Framer Motion</p>
                <p className="text-gray-700 mb-6">A showcase of my skills, projects, and professional journey with interactive animations.</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/satyamgit1/portfolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-yellow-500 hover:text-yellow-700"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://portfolio-flame-two-34.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-yellow-500 hover:text-yellow-700"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 6 - Codeverse */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Codeverse</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Real-time Code Editor</h3>
                <p className="text-gray-600 mb-4">React, Next.js, Firebase, Tailwind CSS</p>
                <p className="text-gray-700 mb-6">Collaborative coding environment with live previews, authentication, and project management.</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/satyamgit1/CodeVerse" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-red-500 hover:text-red-700"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href="https://code-verse-xi.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-red-500 hover:text-red-700"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Education Item 1 */}
            <motion.div 
              className="mb-12"
              whileInView={{ x: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-6 mt-1">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Bachelor of Engineering in Computer Science</h3>
                  <p className="text-lg text-gray-600 mb-3">Thakur College of Engineering (2020-2024)</p>
                  <p className="text-gray-700">Courses: Data Structures, Web Design, Cloud Computing, AI/ML</p>
                </div>
              </div>
            </motion.div>
            
            {/* Education Item 2 */}
            <motion.div 
              className="mb-12"
              whileInView={{ x: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Higher Secondary School</h3>
                  <p className="text-lg text-gray-600 mb-3">St. Anne's Junior College (2018-2020)</p>
                  <p className="text-gray-700">Computer Science with 70%. Began freelancing in web development.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Education Item 3 */}
            <motion.div 
              whileInView={{ x: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-6 mt-1">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Secondary School Education</h3>
                  <p className="text-lg text-gray-600 mb-3">St. Francis High School (2017-2018)</p>
                  <p className="text-gray-700">Developed discipline and teamwork through academics and sports.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold mb-8"
              whileInView={{ scale: [0.9, 1], opacity: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Build Something Amazing
            </motion.h2>
            
            <motion.p 
              className="text-xl max-w-2xl mx-auto mb-12"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </motion.p>
            
            <motion.div
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="mailto:satyamsingh2003a@gmail.com" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                <FiMail className="mr-2" /> Get In Touch
              </a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-6 mt-12"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://github.com/satyamgit1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/satyam-singh-612415223/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/satyamgit1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}