

// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { FaServicestack } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { FiSend } from 'react-icons/fi';
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
//      <Header/>

//       {/* Head & Main Form */}
//       <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
//         <Head>
//           <title>Contact Us | ScriptHub</title>
//           <meta name="description" content="Get in touch with our team" />
//         </Head>

//         <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-10 border border-gray-200">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
//             <p className="mt-2 text-gray-500">
//               We'd love to hear your thoughts, feedback, or just a hello!
//             </p>
//           </div>

//           {submitStatus === 'success' && (
//             <div className="mb-6 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg">
//               ✅ Thank you for your message! We'll get back to you soon.
//             </div>
//           )}

//           {submitStatus === 'error' && (
//             <div className="mb-6 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg">
//               ❌ Something went wrong. Please try again later.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {['name', 'email', 'subject', 'message'].map((field) => (
//               <div key={field}>
//                 <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
//                 {field !== 'message' ? (
//                   <input
//                     type={field === 'email' ? 'email' : 'text'}
//                     id={field}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     className={`w-full mt-1 px-4 py-2 border ${errors[field] ? 'border-red-400' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm`}
//                   />
//                 ) : (
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`w-full mt-1 px-4 py-2 border ${errors.message ? 'border-red-400' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm`}
//                   />
//                 )}
//                 {errors[field] && (
//                   <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
//                 )}
//               </div>
//             ))}

//             <div>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className={`w-full flex items-center justify-center gap-2 py-2 px-6 text-white bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
//                   submitting ? 'opacity-60 cursor-not-allowed' : ''
//                 }`}
//               >
//                 <FiSend className="w-5 h-5" />
//                 {submitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-10 border-t pt-6 text-sm text-gray-600">
//             <h3 className="text-base font-medium text-gray-800 mb-2">Other ways to reach us</h3>
//             <p><span className="font-medium">Email:</span> satyamsinghwork1@gmail.com</p>
//             <p><span className="font-medium">Twitter:</span> @ScriptHubDev</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { FaServicestack } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { FiSend, FiHome, FiBook, FiMail } from 'react-icons/fi'; // Added icons here
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
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-12"> {/* Added margin-top here */}
//         <Head>
//           <title>Contact Us | ScriptHub</title>
//           <meta name="description" content="Get in touch with our team" />
//         </Head>

//         <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-10 border border-gray-200">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
//             <p className="mt-2 text-gray-500">
//               We'd love to hear your thoughts, feedback, or just a hello!
//             </p>
//           </div>

//           {submitStatus === 'success' && (
//             <div className="mb-6 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg">
//               ✅ Thank you for your message! We'll get back to you soon.
//             </div>
//           )}

//           {submitStatus === 'error' && (
//             <div className="mb-6 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg">
//               ❌ Something went wrong. Please try again later.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {['name', 'email', 'subject', 'message'].map((field) => (
//               <div key={field}>
//                 <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
//                 {field !== 'message' ? (
//                   <input
//                     type={field === 'email' ? 'email' : 'text'}
//                     id={field}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     className={`w-full mt-2 px-4 py-3 border ${errors[field] ? 'border-red-400' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm`}
//                   />
//                 ) : (
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={6}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`w-full mt-2 px-4 py-3 border ${errors.message ? 'border-red-400' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm`}
//                   />
//                 )}
//                 {errors[field] && (
//                   <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
//                 )}
//               </div>
//             ))}

//             <div>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className={`w-full flex items-center justify-center gap-2 py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
//                   submitting ? 'opacity-60 cursor-not-allowed' : ''
//                 }`}
//               >
//                 <FiSend className="w-5 h-5" />
//                 {submitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-10 border-t pt-6 text-sm text-gray-600">
//             <h3 className="text-base font-medium text-gray-800 mb-2">Other ways to reach us</h3>
//             <p><span className="font-medium">Email:</span> satyamsinghwork1@gmail.com</p>
//             <p><span className="font-medium">Twitter:</span> @ScriptHubDev</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaServicestack } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiSend, FiHome, FiBook, FiMail } from 'react-icons/fi';
import Header from './Header';

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
      <Header/>

      {/* Head & Main Form */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <Head>
          <title>Contact Us | ScriptHub</title>
          <meta name="description" content="Get in touch with our team" />
        </Head>

        <div className="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-md rounded-xl shadow-xl p-10 border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-100">Contact Us</h1>
            <p className="mt-2 text-gray-300">
              We'd love to hear your thoughts, feedback, or just a hello!
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-emerald-900 text-emerald-100 border border-emerald-700 rounded-lg">
              ✅ Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900 text-red-100 border border-red-700 rounded-lg">
              ❌ Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email', 'subject', 'message'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-300 capitalize">{field}</label>
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full mt-2 px-4 py-3 bg-gray-700 ${errors[field] ? 'border-red-500' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-gray-100`}
                  />
                ) : (
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full mt-2 px-4 py-3 bg-gray-700 ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-gray-100`}
                  />
                )}
                {errors[field] && (
                  <p className="mt-1 text-sm text-red-400">{errors[field]}</p>
                )}
              </div>
            ))}

            <div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  submitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                <FiSend className="w-5 h-5" />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
            <h3 className="text-base font-medium text-gray-200 mb-2">Other ways to reach us</h3>
            <p><span className="font-medium text-gray-300">Email:</span> satyamsinghwork1@gmail.com</p>
            <p><span className="font-medium text-gray-300">Twitter:</span> @ScriptHubDev</p>
          </div>
        </div>
      </div>
    </>
  );
}