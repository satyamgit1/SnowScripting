import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaServicestack,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiHome,
  FiBook,
  FiMail,
  FiUser,
  FiArrowRight,
  FiX,
  FiMenu,
} from "react-icons/fi";
import Footer from "components/Footer";

const colors = {
    primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600",
  };

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const MAX_MESSAGE_LENGTH = 1000;

  
  // Load saved draft from localStorage
  useEffect(() => {
    const savedForm = localStorage.getItem("contactFormDraft");
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
      setCharCount(JSON.parse(savedForm).message.length);
    }
  }, []);

  // Auto-save draft
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(formData).some((val) => val.trim() !== "")) {
        localStorage.setItem("contactFormDraft", JSON.stringify(formData));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "message") {
      setCharCount(value.length);
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      setSubmitStatus("success");
      return;
    }

    if (!validateForm()) return;

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (window.gtag) {
          window.gtag("event", "contact_form_submit", {
            event_category: "engagement",
            event_label: "Contact Form",
          });
        }

        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setCharCount(0);
        localStorage.removeItem("contactFormDraft");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | ScriptHub</title>
        <meta name="description" content="Get in touch with our team" />
      </Head>

      {/* Navbar - Kept exactly as in original */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800/90 backdrop-blur-md z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* <Link href="/" className="flex items-center space-x-2">
            <FaServicestack className="text-2xl text-emerald-400" />
            <span className="text-xl font-bold text-white">NowScript</span>
          </Link> */}
           <Link 
          href="/" 
          className="flex items-center space-x-2"
          onClick={() => trackEvent({
            action: 'navigation',
            category: 'engagement',
            label: 'logo_click'
          })}
        >
          <div className="relative w-8 h-8">
            <img 
              src="/snowslogo.png"
              alt="SnowScripting Logo"
              fill
              className="object-contain"
              sizes="60px"
              priority
            />
          </div>
          <span className={`text-xl font-bold ${colors.primaryText}`}>
            SnowScripting
          </span>
        </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              <FiHome className="inline mr-2" /> Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              <FiBook className="inline mr-2" /> Blog
            </Link>
            <Link href="/contact" className="text-white font-medium">
              <FiMail className="inline mr-2" /> Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/auth"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium"
            >
              <FiUser className="inline mr-2" /> Sign In
            </Link>
            <Link
              href="/auth"
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all shadow-md"
            >
              Get Started <FiArrowRight className="inline ml-2" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-gray-800"
            >
              <div className="px-6 py-4 space-y-4">
                <Link
                  href="/"
                  className="block py-2 text-gray-300 hover:text-white transition-colors font-medium"
                >
                  <FiHome className="inline mr-3" /> Home
                </Link>
                <Link
                  href="/blog"
                  className="block py-2 text-gray-300 hover:text-white transition-colors font-medium"
                >
                  <FiBook className="inline mr-3" /> Blog
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-white font-medium"
                >
                  <FiMail className="inline mr-3" /> Contact
                </Link>
                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <Link
                    href="/auth"
                    className="block w-full py-2.5 text-center bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/auth"
                    className="block w-full py-2.5 text-center text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-all"
                  >
                    <FiUser className="inline mr-2" /> Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Form - Kept original styling */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-md rounded-xl shadow-xl p-10 border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-100">Contact Us</h1>
            <p className="mt-2 text-gray-300">
              We'd love to hear your thoughts, feedback, or just a hello!
            </p>
          </div>

          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-emerald-900 text-emerald-100 border border-emerald-700 rounded-lg"
              >
                <div className="flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    ✅
                  </motion.div>
                  <span className="ml-2">
                    Thank you for your message! We'll get back to you soon.
                  </span>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-red-900 text-red-100 border border-red-700 rounded-lg"
              >
                ❌ Something went wrong. Please try again later.
              </motion.div>
            )}
          </AnimatePresence>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-labelledby="contact-heading"
          >
            <h1 id="contact-heading" className="sr-only">
              Contact Form
            </h1>

            {/* Honeypot field */}
            <div className="absolute opacity-0 h-0 w-0 overflow-hidden">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {["name", "email", "subject"].map((field) => (
              <motion.div
                key={field}
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.02 }}
              >
                <div>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-300 capitalize"
                  >
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    aria-invalid={errors[field] ? "true" : "false"}
                    aria-describedby={
                      errors[field] ? `${field}-error` : undefined
                    }
                    className={`w-full mt-2 px-4 py-3 bg-gray-700 ${
                      errors[field] ? "border-red-500" : "border-gray-600"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-gray-100`}
                  />
                  <AnimatePresence>
                    {errors[field] && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        id={`${field}-error`}
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors[field]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileFocus={{ scale: 1.02 }}
            >
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={MAX_MESSAGE_LENGTH}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full mt-2 px-4 py-3 bg-gray-700 ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm text-gray-100`}
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {charCount}/{MAX_MESSAGE_LENGTH}
                </div>
              </div>
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    id="message-error"
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
            <h3 className="text-base font-medium text-gray-200 mb-2">
              Other ways to reach us
            </h3>
            <p>
              <span className="font-medium text-gray-300">Email:</span>{" "}
              satyamsingh2003a@gmail.com
            </p>
            <p>
              <span className="font-medium text-gray-300">LinkedIn:</span>{" "}
              https://www.linkedin.com/in/satyam-singh-612415223/
            </p>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://wa.me/9730447447"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="tel:+9730447447"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaPhone className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/satyamgit1"
                target="blank"
                className="text-gray-400  hover:text-emerald-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
