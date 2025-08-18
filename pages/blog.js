import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight, FiBookOpen, FiHome, FiMail, FiUser, FiExternalLink } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub, FaRegLightbulb, FaCode, FaChartLine, FaCloud } from "react-icons/fa";
import { useState } from "react";

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dark theme with green/emerald color scheme
  const colors = {
    primary: "from-emerald-600 to-green-600",
    primaryText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400",
    primaryHover: "hover:from-emerald-500 hover:to-green-500",
    secondary: "bg-gray-900",
    accent: "bg-emerald-600",
    light: "bg-gray-800",
    dark: "bg-gray-900",
    buttonHover: "hover:bg-emerald-500 hover:text-gray-900"
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

  // ServiceNow features data
  const features = [
    {
      icon: <FaCloud className="text-3xl text-emerald-400" />,
      title: "Cloud-Based Platform",
      description: "ServiceNow operates entirely in the cloud, eliminating the need for on-premise infrastructure and ensuring automatic updates."
    },
    {
      icon: <FaCode className="text-3xl text-emerald-400" />,
      title: "Low-Code Development",
      description: "With its intuitive App Engine, ServiceNow enables rapid application development with minimal coding required."
    },
    {
      icon: <FaChartLine className="text-3xl text-emerald-400" />,
      title: "Workflow Automation",
      description: "Automate complex business processes across departments with ServiceNow's powerful workflow engine."
    },
    {
      icon: <FaRegLightbulb className="text-3xl text-emerald-400" />,
      title: "AI & Machine Learning",
      description: "Leverage built-in AI capabilities like predictive intelligence and virtual agents for smarter operations."
    }
  ];

  // ServiceNow modules data
  const modules = [
    {
      title: "IT Service Management",
      description: "Streamline IT operations with incident, problem, change, and service request management.",
      link: "https://www.servicenow.com/products/itsm.html"
    },
    {
      title: "Customer Service Management",
      description: "Deliver exceptional customer experiences with omnichannel support and case management.",
      link: "https://www.servicenow.com/products/customer-service-management.html"
    },
    {
      title: "HR Service Delivery",
      description: "Transform HR services with employee and manager self-service portals and case management.",
      link: "https://www.servicenow.com/products/hr-service-delivery.html"
    },
    {
      title: "Security Operations",
      description: "Improve security posture with vulnerability response and threat intelligence capabilities.",
      link: "https://www.servicenow.com/products/security-operations.html"
    },
    {
      title: "App Engine",
      description: "Build custom applications quickly with low-code development tools and templates.",
      link: "https://www.servicenow.com/products/app-engine.html"
    },
    {
      title: "Integration Hub",
      description: "Connect ServiceNow with other enterprise systems using pre-built integrations.",
      link: "https://www.servicenow.com/products/integration-hub.html"
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Increased Efficiency",
      percent: "75%",
      description: "Average reduction in manual processes reported by ServiceNow customers"
    },
    {
      title: "Cost Reduction",
      percent: "40%",
      description: "Typical decrease in operational costs after ServiceNow implementation"
    },
    {
      title: "Faster Resolution",
      percent: "60%",
      description: "Improvement in incident resolution times with automated workflows"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | SnowScripting</title>
        <meta name="description" content="Interesting facts and blog posts about SnowScripting and ServiceNow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gray-900">
        <motion.div 
          className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="absolute bottom-1/3 -left-20 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-2xl opacity-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Enhanced Navbar with dark theme */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md border-b border-gray-800 z-50 shadow-xl transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
            <Image 
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              <FiHome className="mr-2" /> Home
            </Link>
            <Link href="/blog" className="flex items-center text-emerald-400 font-medium">
              <FiBookOpen className="mr-2" /> Blog
            </Link>
            <Link href="/contact" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              <FiMail className="mr-2" /> Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth" className="flex items-center px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              <FiUser className="mr-2" /> Sign In
            </Link>
            <Link href="/auth" className={`flex items-center px-5 py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-emerald-400/20 ${colors.primaryHover}`}>
              Get Started <FiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-emerald-400 transition-colors"
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
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm"
            >
              <div className="px-6 py-4 space-y-4">
                <Link href="/" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
                  <FiHome className="mr-3" /> Home
                </Link>
                <Link href="/blog" className="flex items-center py-2 text-emerald-400 font-medium">
                  <FiBookOpen className="mr-3" /> Blog
                </Link>
                <Link href="/contact" className="flex items-center py-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium">
                  <FiMail className="mr-3" /> Contact
                </Link>
                <div className="pt-4 border-t border-gray-800 space-y-3">
                  <Link href="/auth" className={`flex items-center justify-center w-full py-2.5 bg-gradient-to-r ${colors.primary} text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all`}>
                    Get Started <FiArrowRight className="ml-2" />
                  </Link>
                  <Link href="/auth" className="flex items-center justify-center w-full py-2.5 text-emerald-400 rounded-lg font-medium hover:bg-emerald-400/20 transition-all">
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium mb-6">
            <span className="mr-2">📚</span> Latest Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            <span className={colors.primaryText}>ServiceNow</span> Development Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the latest trends, tips, and best practices in ServiceNow development
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative group"
        >
          <Image 
            src="/snlogo.png" 
            alt="ServiceNow Platform" 
            width={1200} 
            height={630} 
            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20 flex items-end p-8">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-gray-900/80 rounded-full mb-2">
                Featured Platform
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">The Complete ServiceNow Platform Overview</h2>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-4xl mx-auto dark:prose-invert"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            ServiceNow is revolutionizing how businesses manage digital workflows and automate key processes. From IT service management to customer service and HR operations, ServiceNow provides comprehensive solutions that transform organizational efficiency. In this comprehensive guide, we'll explore the platform's capabilities, benefits, and how it's shaping the future of enterprise workflow automation.
          </p>

          {/* Key Features Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">✨</span>
              Why ServiceNow Stands Out
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-emerald-600/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What is ServiceNow Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">1</span>
              What is ServiceNow?
            </h2>
            <p className="mb-6 text-gray-300">
              ServiceNow is a cloud-based platform that delivers digital workflows that create great experiences and unlock productivity for employees and enterprises. Originally focused on IT service management (ITSM), ServiceNow has expanded to become a comprehensive platform for digital business transformation.
            </p>
            <p className="mb-6 text-gray-300">
              The platform provides a system of action for the enterprise, with a single data model and architecture that connects people, functions, and systems across the organization. This unified approach eliminates silos and provides a single source of truth for all business operations.
            </p>
            
            {/* Stats Section */}
            <div className="my-10 grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-4xl font-bold text-emerald-400 mb-2">{benefit.percent}</h3>
                  <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Products Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">2</span>
              Key ServiceNow Products & Modules
            </h2>
            <p className="mb-8 text-gray-300">
              ServiceNow offers a comprehensive suite of products that extend across various business functions. Here are some of the most widely used modules:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {modules.map((module, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-all hover:border-emerald-500 group"
                >
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 group-hover:text-green-400 transition-colors">{module.title}</h3>
                  <p className="mb-4 text-gray-300">{module.description}</p>
                  <a 
                    href={module.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 hover:text-green-400 transition-colors"
                  >
                    Learn more <FiExternalLink className="ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">3</span>
              ServiceNow Development Ecosystem
            </h2>
            <p className="mb-6 text-gray-300">
              ServiceNow provides a robust development environment with tools and technologies that enable both professional developers and citizen developers to create powerful applications and automate workflows.
            </p>
            
            <div className="my-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-4">Key Development Components</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">ServiceNow Studio:</strong> Integrated development environment for building applications</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">App Engine:</strong> Low-code development platform for creating custom applications</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">Flow Designer:</strong> Visual workflow automation tool with drag-and-drop interface</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">Integration Hub:</strong> Pre-built connectors and integration capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mr-3 mt-1">•</span>
                  <span className="text-gray-300"><strong className="text-emerald-400">Now Platform APIs:</strong> REST and GraphQL APIs for extending platform capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Future Trends Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">4</span>
              The Future of ServiceNow
            </h2>
            <p className="mb-6 text-gray-300">
              ServiceNow continues to evolve with new technologies and capabilities that position it as a leader in digital transformation:
            </p>
            
            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">AI-Powered Automation</h3>
                <p className="text-gray-300">ServiceNow is integrating AI and machine learning across its platform to enable predictive intelligence, virtual agents, and automated decision-making.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Industry-Specific Solutions</h3>
                <p className="text-gray-300">Expanding vertical solutions for healthcare, financial services, government, and other industries with tailored workflows and compliance features.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Hyperautomation</h3>
                <p className="text-gray-300">Combining RPA, AI, and process mining to automate complex, end-to-end business processes across the enterprise.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Developer Experience</h3>
                <p className="text-gray-300">Enhanced tools and frameworks to streamline application development and customization on the platform.</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="my-16 bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-8 rounded-xl border border-emerald-900/50">
            <h2 className="text-2xl font-bold text-white mb-4">Final Thoughts</h2>
            <p className="mb-4 text-gray-300">
              ServiceNow has grown from an IT service management tool to a comprehensive platform for digital transformation. Its ability to connect people, processes, and systems across the enterprise makes it uniquely positioned to help organizations navigate the challenges of digital business.
            </p>
            <p className="text-gray-300">
              As the platform continues to evolve with AI, industry solutions, and enhanced developer tools, ServiceNow is becoming an essential platform for enterprises looking to streamline operations, improve employee and customer experiences, and drive innovation.
            </p>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="my-20 bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-900 rounded-full opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-green-900 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with ServiceNow</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Subscribe to our newsletter for the latest ServiceNow tips, tutorials, and industry insights delivered to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <button 
                type="submit" 
                className={`px-6 py-3 bg-gradient-to-r ${colors.primary} text-gray-900 font-medium rounded-lg hover:opacity-90 transition-all shadow-md`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer - Dark theme */}
      <footer className="bg-gray-900 text-gray-400 py-16 mt-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FaCloud className="text-2xl text-emerald-400" />
                <span className="text-xl font-bold text-white">
                 SnowScripting 
                </span>
              </div>
              <p className="mb-6 text-gray-400">
                The complete solution for ServiceNow script management and developer productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-gray-500">
              © {new Date().getFullYear()} SnowScripting. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}