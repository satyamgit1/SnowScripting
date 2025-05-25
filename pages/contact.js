// import { useState } from 'react';
// import Head from 'next/head';

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
//     // Clear error when user types
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
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <Head>
//         <title>Contact Us | ServiceNow Dev Notes</title>
//         <meta name="description" content="Get in touch with our team" />
//       </Head>

//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div className="p-8">
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
//             <p className="mt-2 text-gray-600">
//               Have questions or feedback? We'd love to hear from you!
//             </p>
//           </div>

//           {submitStatus === 'success' && (
//             <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
//               Thank you for your message! We'll get back to you soon.
//             </div>
//           )}

//           {submitStatus === 'error' && (
//             <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
//               Something went wrong. Please try again later.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Your Name
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                 />
//                 {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                 />
//                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                 Subject
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${errors.subject ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                 />
//                 {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <div className="mt-1">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                 />
//                 {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//               >
//                 {submitting ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </>
//                 ) : 'Send Message'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-8 border-t border-gray-200 pt-6">
//             <h3 className="text-sm font-medium text-gray-700">Other ways to reach us</h3>
//             <div className="mt-4 space-y-1">
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Email:</span> support@servicenowdevnotes.com
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Twitter:</span> @SNDevNotes
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaServicestack } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

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

  return (
    <>
      {/* Navbar */}
      <nav className="relative px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <FaServicestack className="text-3xl text-orange-600" />
          
          <Link href="/"><span className="text-2xl font-bold text-orange-600">ScriptHub</span></Link>
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

      {/* Head & Main Form */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Contact Us | ScriptHub</title>
          <meta name="description" content="Get in touch with our team" />
        </Head>

        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-10 border border-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-2 text-gray-500">
              We'd love to hear your thoughts, feedback, or just a hello!
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg">
              ✅ Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg">
              ❌ Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email', 'subject', 'message'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full mt-1 px-4 py-2 border ${errors[field] ? 'border-red-400' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm`}
                  />
                ) : (
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full mt-1 px-4 py-2 border ${errors.message ? 'border-red-400' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm`}
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
                className={`w-full flex items-center justify-center gap-2 py-2 px-6 text-white bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                  submitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                <FiSend className="w-5 h-5" />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-10 border-t pt-6 text-sm text-gray-600">
            <h3 className="text-base font-medium text-gray-800 mb-2">Other ways to reach us</h3>
            <p><span className="font-medium">Email:</span> satyamsinghwork1@gmail.com</p>
            <p><span className="font-medium">Twitter:</span> @ScriptHubDev</p>
          </div>
        </div>
      </div>
    </>
  );
}
