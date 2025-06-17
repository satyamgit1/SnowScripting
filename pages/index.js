import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiLock,
  FiLayers,
  FiZap,
  FiArrowRight,
  FiCheck,
  FiStar,
  FiChevronRight,
  FiUser,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { FaServicestack, FaGithub, FaTwitter } from "react-icons/fa";
import BlurText from "./BlurText";
// import SplashCursor from './SplashCursor'

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Universal Script Support",
      description:
        "Store every type of ServiceNow script with proper syntax highlighting and categorization",
      extended:
        "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting.",
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: "Bank-Level Security",
      description:
        "Enterprise-grade encryption and access controls for your scripts",
      extended:
        "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected.",
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Project Workspaces",
      description:
        "Organize scripts by project, client, or instance with custom tags",
      extended:
        "Create dedicated workspaces for each project with team collaboration features and custom tagging systems.",
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Instant Search",
      description:
        "Find any script in milliseconds with our indexed search engine",
      extended:
        "Full-text search across all your scripts with filters for script type, date modified, and custom tags.",
    },
  ];

  const testimonials = [
    {
      name: "Akash Landge",
      role: "ServiceNow Developer",
      company: "Exterprise Services",
      quote:
        "This tool cut our script retrieval time by 80%. The organization system is exactly what our team needed.",
      rating: 5,
      image: "/akash.png", // Add image URL for Akash
    },
    {
      name: "Prakshal jain",
      role: "Lead Developer",
      company: "Exterprise Services",
      quote:
        "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
      rating: 5,
      image: "/jain.png", // Add image URL for Prakshal
    },
    {
      name: "Aditya Gupta",
      role: "Servicenow Developer",
      company: "Exterprise Services",
      quote:
        "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
      rating: 4,
      image: "/aditya.png", // Add image URL for Aditya
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <Head>
        <title> NowScript| Organize & Manage Scripts</title>
        <meta
          name="description"
          content="The complete solution for organizing and managing your ServiceNow scripts"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-40 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        {/* Navigation */}
        <nav className="relative px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <FaServicestack className="text-3xl text-orange-600" />
            <Link href="/">
              <span className="text-2xl font-bold text-orange-600">
                NowScript
              </span>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/About_us"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              About us
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/auth"
              className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth"
              className="px-6 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-md hover:shadow-orange-500/30"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Organize Your{" "}
                <span className="text-orange-600">ServiceNow</span> Scripts Like
                Never Before
              </h1>

              <BlurText
                text="The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace."
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-1xl mb-8"
              />
              {/* <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace.
              </p> */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center"
                >
                  Start Free Trial{" "}
                  <FiArrowRight className="ml-2 animate-pulse" />
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-4 border border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>
              {/* Highlighted line added here */}
              <div className="mt-6 text-sm text-orange-600 font-medium border-l-4 border-orange-500 pl-3 py-1 bg-orange-50 inline-block">
                Built by ServiceNow developers for ServiceNow developers
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full bg-orange-100 rounded-2xl -z-10"></div>
              <div className="relative bg-white rounded-xl border border-orange-200 overflow-hidden shadow-xl">
                <div className="px-5 py-3 bg-gray-50 flex items-center border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-500 ml-4">
                    script-include.js
                  </div>
                </div>
                <div className="p-6 font-mono text-sm bg-white">
                  <div className="text-orange-400">
                    // Script Include: DataUtils
                  </div>
                  <div className="text-purple-500">var</div>{" "}
                  <span className="text-blue-500">DataUtils</span>{" "}
                  <span className="text-gray-700">= Class.create();</span>
                  <div className="text-purple-500">DataUtils</div>{" "}
                  <span className="text-gray-700">.prototype = {"{"}</span>
                  <div className="ml-4 text-gray-700">
                    <span className="text-purple-500">initialize</span>{" "}
                    <span className="text-gray-700">: </span>
                    <span className="text-purple-500">function</span>
                    <span className="text-gray-700">() {"{"}</span>
                  </div>
                  <div className="ml-8 text-gray-700">
                    <span className="text-green-600">
                      // Initialization code
                    </span>
                  </div>
                  <div className="ml-4 text-gray-700">{"},"}</div>
                  <div className="ml-4">
                    <span className="text-purple-500">getUserData</span>{" "}
                    <span className="text-gray-700">: </span>
                    <span className="text-purple-500">function</span>
                    <span className="text-gray-700">(userId) {"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-purple-500">var</span>{" "}
                    <span className="text-blue-500">gr</span>{" "}
                    <span className="text-gray-700">= new GlideRecord(</span>
                    <span className="text-green-600">'sys_user'</span>
                    <span className="text-gray-700">);</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.addQuery(</span>
                    <span className="text-green-600">'sys_id'</span>
                    <span className="text-gray-700">, userId);</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.query();</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-purple-500">if</span>{" "}
                    <span className="text-gray-700">(</span>
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.next()) {"{"}</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-purple-500">return</span>{" "}
                    <span className="text-blue-500">gr</span>
                    <span className="text-gray-700">.getValue(</span>
                    <span className="text-green-600">'name'</span>
                    <span className="text-gray-700">);</span>
                  </div>
                  <div className="ml-8 text-gray-700">{"}"}</div>
                  <div className="ml-8">
                    <span className="text-purple-500">return</span>{" "}
                    <span className="text-green-600">''</span>
                    <span className="text-gray-700">;</span>
                  </div>
                  <div className="ml-4 text-gray-700">{"}"}</div>
                  <div className="text-gray-700">{"};"}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Spotlight */}
        <section id="features" className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power Up Your{" "}
                <span className="text-orange-600">ServiceNow</span> Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage scripts efficiently and
                collaborate seamlessly
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveFeature(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                      activeFeature === index
                        ? "bg-white shadow-lg border border-orange-200"
                        : "bg-orange-100 hover:bg-orange-200/50"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg ${
                          activeFeature === index
                            ? "bg-orange-100 text-orange-600"
                            : "bg-white text-orange-600"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 h-full"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-orange-100 text-orange-600 mr-4">
                        {features[activeFeature].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {features[activeFeature].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {features[activeFeature].extended}
                    </p>
                    <div className="mt-auto bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-center space-x-2 text-orange-600">
                        <FiCheck className="w-5 h-5" />
                        <span className="font-medium">
                          Included in all plans
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FiUser className="w-8 h-8" />,
                  value: "850+",
                  label: "Active Developers",
                },
                {
                  icon: <FiCode className="w-8 h-8" />,
                  value: "12K+",
                  label: "Scripts Stored",
                },
                {
                  icon: <FiShield className="w-8 h-8" />,
                  value: "100%",
                  label: "Uptime Reliability",
                },
                {
                  icon: <FiClock className="w-8 h-8" />,
                  value: "10x",
                  label: "Faster Script Retrieval",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 p-8 rounded-xl text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by <span className="text-orange-600">ServiceNow</span>{" "}
                Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our users
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />{" "}
                    {/* Added image here */}
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, star) => (
                      <FiStar
                        key={star}
                        className={`w-5 h-5 ${
                          star < testimonial.rating
                            ? "text-orange-500 fill-orange-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your{" "}
                <span className="text-white">ServiceNow</span> Workflow?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
                Join hundreds of developers who are saving hours every week with
                organized, accessible scripts
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <FaServicestack className="text-2xl text-orange-600" />
                  <span className="text-xl font-bold text-orange-600">
                    NowScript
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  The complete solution for ServiceNow script management.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.servicenow.com/docs/"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@satyamsingh2003a/servicenow-notes-application-apis-e006e32938cb"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="/https://www.servicenow.com/community/"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  NowScript
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/About_us"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      href="/blog"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} ScriptHub. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="/Terms"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}
