import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight, FiBookOpen, FiHome, FiMail, FiUser } from "react-icons/fi";
import { FaServicestack, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react"; // Import useState

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ServiceNow-inspired color scheme (more creative and beautiful)
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
        <title>Blog | NowScript</title>
        <meta name="description" content="Interesting facts and blog posts about NowScript and ServiceNow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          className="absolute top-1/4 -right-20 w-96 h-96 bg-[#1e8c94] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="absolute bottom-1/3 -left-20 w-96 h-96 bg-[#2a5a8e] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
            <Link href="/blog" className="flex items-center text-[#2a5a8e] font-medium">
              <FiBookOpen className="mr-2" /> Blog
            </Link>
            <Link href="/contact" className="flex items-center text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
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
                <Link href="/blog" className="flex items-center py-2 text-[#2a5a8e] font-medium">
                  <FiBookOpen className="mr-3" /> Blog
                </Link>
                <Link href="/contact" className="flex items-center py-2 text-gray-600 hover:text-[#2a5a8e] transition-colors font-medium">
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 mt-24">
        {/* Article Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00b5a8] text-white text-sm font-medium mb-6">
            <span className="mr-2">📚</span> Latest Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            <span className={colors.primaryText}>ServiceNow</span> Development Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, tips, and best practices in ServiceNow development
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image 
            src="/snlogo.png" 
            alt="ServiceNow Platform" 
            width={1200} 
            height={630} 
            className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
            priority
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-4xl mx-auto"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            ServiceNow is revolutionizing how businesses manage digital workflows and automate key processes. From IT service management to customer service and HR operations, ServiceNow provides comprehensive solutions that transform organizational efficiency.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center">
            <span className="w-8 h-8 bg-[#00b5a8] text-white rounded-full flex items-center justify-center mr-4">1</span>
            What is ServiceNow?
          </h2>
          <p className="mb-6">
            ServiceNow is a cloud-based platform offering software solutions for business process automation. It excels in workflow automation, incident management, and service desk operations, connecting people, systems, and data to enhance efficiency and reduce costs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center">
            <span className="w-8 h-8 bg-[#00b5a8] text-white rounded-full flex items-center justify-center mr-4">2</span>
            Key ServiceNow Products
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">IT Service Management</h3>
              <p>Manages incidents, service requests, and change management to streamline IT operations and improve service delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">Customer Service Management</h3>
              <p>Enables businesses to handle customer inquiries and support tickets with greater efficiency and visibility.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">HR Service Delivery</h3>
              <p>Automates HR tasks and creates seamless employee experiences through digital workflows.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#00b5a8] mb-3">Governance, Risk & Compliance</h3>
              <p>Provides comprehensive tools for managing risks and meeting compliance requirements effectively.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1b4f74] text-gray-400 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FaServicestack className="text-2xl text-[#00b5a8]" />
                <span className="text-xl font-bold text-white">
                  NowScript
                </span>
              </div>
              <p className="mb-6">
                The complete solution for ServiceNow script management and developer productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} NowScript. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
