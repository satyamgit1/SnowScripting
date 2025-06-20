import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const colors = {
    primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600",
    primary: "from-teal-500 to-purple-600",
    primaryHover: "hover:from-teal-600 hover:to-purple-700"
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
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm"
      style={{ y: headerY }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <FaServicestack className="text-2xl text-teal-600" />
          <span className={`text-xl font-bold ${colors.primaryText}`}>
            NowScript
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Features
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Testimonials
          </button>
          <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth" className="px-4 py-2 text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Sign In
          </Link>
          <Link href="/auth" className={`px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-teal-500/20 ${colors.primaryHover}`}>
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-teal-600"
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
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left py-2 text-gray-600 hover:text-teal-600 transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block w-full text-left py-2 text-gray-600 hover:text-teal-600 transition-colors font-medium"
              >
                Testimonials
              </button>
              <Link href="/blog" className="block py-2 text-gray-600 hover:text-teal-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-teal-600 transition-colors font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link href="/auth" className={`block w-full py-2.5 text-center bg-gradient-to-r ${colors.primary} text-white rounded-lg font-medium hover:opacity-90 transition-all`}>
                  Get Started
                </Link>
                <Link href="/auth" className="block w-full py-2.5 text-center text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-all">
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}