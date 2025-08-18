

// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { FaServicestack } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { FiSend, FiHome, FiBook, FiMail } from 'react-icons/fi';
// import Header from './Header';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({
//           name: '',
//           email: '',
//           subject: '',
//           message: ''
//         });
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Header/>

//       {/* Head & Main Form */}
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 mt-12">
//         <Head>
//           <title>Contact Us | ScriptHub</title>
//           <meta name="description" content="Get in touch with our team" />
//         </Head>

//         <div className="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-md rounded-xl shadow-xl p-10 border border-gray-700">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-100">Contact Us</h1>
//             <p className="mt-2 text-gray-300">
//               We'd love to hear your thoughts, feedback, or just a hello!
//             </p>
//           </div>

//           {submitStatus === 'success' && (
//             <div className="mb-6 p-4 bg-emerald-900 text-emerald-100 border border-emerald-700 rounded-lg">
//               ✅ Thank you for your message! We'll get back to you soon.
//             </div>
//           )}

//           {submitStatus === 'error' && (
//             <div className="mb-6 p-4 bg-red-900 text-red-100 border border-red-700 rounded-lg">
//               ❌ Something went wrong. Please try again later.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {['name', 'email', 'subject', 'message'].map((field) => (
//               <div key={field}>
//                 <label htmlFor={field} className="block text-sm font-medium text-gray-300 capitalize">{field}</label>
//                 {field !== 'message' ? (
//                   <input
//                     type={field === 'email' ? 'email' : 'text'}
//                     id={field}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     className={`w-full mt-2 px-4 py-3 bg-gray-700 ${errors[field] ? 'border-red-500' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-gray-100`}
//                   />
//                 ) : (
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={6}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`w-full mt-2 px-4 py-3 bg-gray-700 ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-gray-100`}
//                   />
//                 )}
//                 {errors[field] && (
//                   <p className="mt-1 text-sm text-red-400">{errors[field]}</p>
//                 )}
//               </div>
//             ))}

//             <div>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className={`w-full flex items-center justify-center gap-2 py-3 px-6 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
//                   submitting ? 'opacity-60 cursor-not-allowed' : ''
//                 }`}
//               >
//                 <FiSend className="w-5 h-5" />
//                 {submitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
//             <h3 className="text-base font-medium text-gray-200 mb-2">Other ways to reach us</h3>
//             <p><span className="font-medium text-gray-300">Email:</span> satyamsinghwork1@gmail.com</p>
//             <p><span className="font-medium text-gray-300">Twitter:</span> @ScriptHubDev</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiHome, FiBookOpen, FiMail, FiUser, FiArrowRight } from 'react-icons/fi';
import { FaServicestack, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ServiceNow-inspired color scheme
  const colors = {
    primary: "from-[#2a5a8e] to-[#1e8c94]",
    primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-[#2a5a8e] to-[#1e8c94]",
    primaryHover: "hover:from-[#1b4f74] hover:to-[#1e8c94]",
    secondary: "bg-white",
    accent: "bg-[#1e8c94]",
    light: "bg-[#f4f8fb]",
    dark: "bg-[#1b4f74]",
    buttonHover: "hover:bg-[#0f7f71] hover:text-white"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
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
    <>
      <Head>
        <title>Contact Us | NowScript</title>
        <meta name="description" content="Get in touch with our team" />
      </Head>

      {/* Enhanced Navbar with smooth effects */}
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 z-50 shadow-xl transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <FaServicestack className="text-2xl text-[#2a5a8e] group-hover:text-[#1e8c94] transition-colors duration-300" />
            <span className={`text-xl font-bold ${colors.primaryText} group-hover:bg-gradient-to-r group-hover:from-[#2a5a8e] group-hover:to-[#1e8c94] transition-all`}>
              NowScript
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
              <FiHome className="mr-2" /> Home
            </Link>
            <Link href="/blog" className="flex items-center text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
              <FiBookOpen className="mr-2" /> Blog
            </Link>
            <Link href="/contact" className="flex items-center text-[#2a5a8e] font-medium">
              <FiMail className="mr-2" /> Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth" className="flex items-center px-4 py-2 text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
              <FiUser className="mr-2" /> Sign In
            </Link>
            <Link href="/auth" className={`flex items-center px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-[#2a5a8e]/20 ${colors.primaryHover}`}>
              Get Started <FiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-[#2a5a8e] transition-colors"
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
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm"
            >
              <div className="px-6 py-4 space-y-4">
                <Link href="/" className="flex items-center py-2 text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
                  <FiHome className="mr-3" /> Home
                </Link>
                <Link href="/blog" className="flex items-center py-2 text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
                  <FiBookOpen className="mr-3" /> Blog
                </Link>
                <Link href="/contact" className="flex items-center py-2 text-[#2a5a8e] font-medium">
                  <FiMail className="mr-3" /> Contact
                </Link>
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <Link href="/auth" className={`flex items-center justify-center w-full py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all`}>
                    Get Started <FiArrowRight className="ml-2" />
                  </Link>
                  <Link href="/auth" className="flex items-center justify-center w-full py-2.5 text-[#2a5a8e] rounded-lg font-medium hover:bg-[#2a5a8e]/20 transition-all">
                    <FiUser className="mr-2" /> Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Contact Form */}
      <div className="min-h-screen bg-[#f4f8fb] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#2a5a8e] to-[#1e8c94] p-8 text-center">
              <h1 className="text-3xl font-bold text-white">Contact Us</h1>
              <p className="mt-2 text-[#d1e0f0]">
                We'd love to hear your thoughts, feedback, or just a hello!
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-green-100 text-green-800 border border-green-200 rounded-lg"
                  >
                    ✅ Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-red-100 text-red-800 border border-red-200 rounded-lg"
                  >
                    ❌ Something went wrong. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'subject', 'message'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize mb-1">
                      {field}
                    </label>
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a5a8e] focus:border-[#2a5a8e] shadow-sm`}
                      />
                    ) : (
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a5a8e] focus:border-[#2a5a8e] shadow-sm`}
                      />
                    )}
                    {errors[field] && (
                      <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 text-white bg-gradient-to-r from-[#2a5a8e] to-[#1e8c94] hover:from-[#1b4f74] hover:to-[#1e8c94] rounded-lg text-sm font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2a5a8e] focus:ring-offset-2 ${
                      submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <FiSend className="w-5 h-5" />
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>

              <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600">
                <h3 className="text-base font-medium text-gray-800 mb-3">Other ways to reach us</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Email:</span> support@nowscript.com</p>
                  <p><span className="font-medium">Twitter:</span> @NowScriptDev</p>
                  <div className="flex space-x-4 mt-3">
                    <a href="#" className="text-[#2a5a8e] hover:text-[#1e8c94]">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#2a5a8e] hover:text-[#1e8c94]">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#2a5a8e] hover:text-[#1e8c94]">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}