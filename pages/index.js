


import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import ServiceNowAIAssistant from "../components/ServiceNowAIAssistant";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
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
import {
  FaServicestack,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import BlurText from "./BlurText";
import Header from "pages/Header";

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const containerRef = useRef(null);
  const aiAssistantRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Emerald/dark green color scheme
  const colors = {
    primary: "from-emerald-500 to-green-600",
    primaryText:
      "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500",
    primaryHover: "hover:from-emerald-600 hover:to-green-700",
    primaryBorder: "border-emerald-500",
    secondary: "bg-gray-900",
    accent: "bg-emerald-500",
    light: "bg-gray-800",
    dark: "bg-gray-900",
  };

  const scrollToAIAssistant = () => {
    aiAssistantRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Universal Script Support",
      description:
        "Store every type of ServiceNow script with proper syntax highlighting",
      extended:
        "From Business Rules to UI Policies, we support all script types with intelligent recognition and formatting.",
      color: "bg-emerald-900 text-emerald-400",
    },
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and access controls",
      extended:
        "256-bit encryption, regular backups, and granular permission controls ensure your scripts are always protected.",
      color: "bg-green-900 text-green-400",
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Project Workspaces",
      description: "Organize scripts by project, client, or instance",
      extended:
        "Create dedicated workspaces for each project with team collaboration features and custom tagging systems.",
      color: "bg-teal-900 text-teal-400",
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Instant Search",
      description: "Find any script in milliseconds",
      extended:
        "Full-text search across all your scripts with filters for script type, date modified, and custom tags.",
      color: "bg-gray-800 text-gray-300",
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
      image: "/akash.png",
    },
    {
      name: "Prakshal Jain",
      role: "Lead Developer",
      company: "Exterprise Services",
      quote:
        "Finally a solution that understands how ServiceNow developers actually work. The snippet library alone is worth the price.",
      rating: 5,
      image: "/jain.png",
    },
    {
      name: "Aditya Gupta",
      role: "ServiceNow Developer",
      company: "Exterprise Services",
      quote:
        "Our team collaboration improved dramatically after adopting this. The version history has saved us countless hours.",
      rating: 4,
      image: "/aditya.png",
    },
  ];

  const stats = [
    {
      icon: <FiUser className="w-6 h-6" />,
      value: "18+",
      label: "Active Developers",
      color: "bg-emerald-900 text-emerald-400",
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      value: "500+",
      label: "Scripts Stored",
      color: "bg-green-900 text-green-400",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      value: "100%",
      label: "Uptime Reliability",
      color: "bg-teal-900 text-teal-400",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      value: "10x",
      label: "Faster Retrieval",
      color: "bg-gray-800 text-gray-300",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <>
      <Head>
        <title>SnowScripting | Organize & Manage ServiceNow Scripts</title>
        <meta
          name="description"
          content="The complete solution for organizing and managing your ServiceNow scripts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className="min-h-screen bg-gray-900 overflow-x-hidden"
        ref={containerRef}
      >
        {/* Floating gradient background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 -left-20 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900 text-emerald-400 text-sm font-medium mb-4">
                <span className="mr-2">✨</span> AI Powdered Notes
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-100">
                <span className={colors.primaryText}>Organize</span> Your
                ServiceNow Scripts With  <span className={colors.primaryText}>SnowScripting</span>
              </h1>

              <BlurText
                text="The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl text-gray-400 mb-8 max-w-2xl"
              />

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToAIAssistant}
                  className={`px-8 py-4 bg-gradient-to-r ${colors.primary} text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center ${colors.primaryHover}`}
                >
                  Explore Our AI <FiArrowRight className="ml-2 animate-pulse" />
                </button>
                <Link
                  href="#demo"
                  className="px-8 py-4 border border-gray-700 text-gray-300 rounded-xl font-medium hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>

              <div className="flex items-center space-x-4 text-md text-gray-500">
                <span>
                  Build By ServiceNow Developer for the ServiceNow Developer
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
                <div className="px-5 py-3 bg-gray-800 flex items-center border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400 ml-4">
                    client-script.js
                  </div>
                </div>
                <div className="p-6 font-mono text-sm bg-gray-900">
                  <div className="text-emerald-400"></div>
                  <div className="text-purple-400">function</div>
                  {""}
                  <span className="text-blue-400">onLoad</span>
                  <span className="text-gray-300">() {"{"}</span>
                  <div className="ml-4 text-emerald-400"></div>
                  <div className="ml-4">
                    <span className="text-blue-400">
                      g_form.addInfoMessage.
                    </span>
                    <span className="text-gray-300">(</span>
                    <span className="text-emerald-400">
                      {`"Build By ServiceNow Developer for the ServiceNow Developer"`}
                    </span>
                    <span className="text-gray-300">);</span>
                  </div>
                  <div className="text-gray-300">{"}"}</div>
                  <div className="mt-2"></div>
                </div>
              </div>

              {/* Floating elements around the code editor */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-900 rounded-2xl -z-10"
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-green-900 rounded-full -z-10"
                animate={{
                  rotate: [0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* Logo cloud */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-300 mb-12 text-lg font-light tracking-wider">
              TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
            </p>
            <div className="flex flex-wrap justify-center items-center gap-16">
              {/* Exterprise Logo */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300 hover:drop-shadow-lg"
              >
                <img
                  src="/exterprise.png"
                  alt="Exterprise logo"
                  className="h-12 opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>

              {/* Growinity Logo */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300 hover:drop-shadow-lg"
              >
                <img
                  src="/Growinity.png"
                  alt="Growinity logo"
                  className="h-12 opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>

              {/* CodingChaska Logo */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300 hover:drop-shadow-lg"
              >
                <img
                  src="/CodingChaska.png"
                  alt="CodingChaska logo"
                  className="h-12 opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* AI Assistant Section */}
        <div ref={aiAssistantRef}>
          <ServiceNowAIAssistant />
        </div>
   
        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Power Up Your{" "}
                <span className={colors.primaryText}>ServiceNow</span>{" "}
                Development
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need to manage scripts efficiently and
                collaborate seamlessly
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveFeature(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                      activeFeature === index
                        ? "bg-gray-800 shadow-lg border border-gray-700"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg ${feature.color} ${
                          activeFeature === index ? "scale-110" : ""
                        } transition-transform`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 h-full"
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
                      <div
                        className={`p-3 rounded-lg ${features[activeFeature].color} mr-4`}
                      >
                        {features[activeFeature].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-100">
                        {features[activeFeature].title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-6 text-lg">
                      {features[activeFeature].extended}
                    </p>
                    <div className="mt-auto bg-gray-700 p-4 rounded-lg border border-gray-600">
                      <div className="flex items-center space-x-2 text-emerald-400">
                        <FiCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-emerald-500 transition-colors"
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-full ${stat.color} flex items-center justify-center`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-100 mb-2 text-center">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-center">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Trusted by{" "}
                <span className={colors.primaryText}>ServiceNow</span> Teams
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our users
              </p>
            </motion.div>

            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col ${
                    activeTestimonial === index ? "z-10" : "z-0"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0.3,
                    x:
                      activeTestimonial === index
                        ? 0
                        : index % 2 === 0
                        ? 50
                        : -50,
                    scale: activeTestimonial === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-100">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 text-lg italic flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, star) => (
                      <FiStar
                        key={star}
                        className={`w-5 h-5 ${
                          star < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 z-20">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeTestimonial === index
                        ? "bg-emerald-500 w-6"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-12">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Transform Your{" "}
                  <span className="bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
                    ServiceNow
                  </span>{" "}
                  Workflow
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Join hundreds of developers saving hours weekly with our
                  organized script solutions
                </motion.p>
              </div>

              <motion.div
                className="flex justify-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="relative px-10 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>

              <motion.div
                className="mt-16 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2 text-sm opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Trusted by leading enterprises worldwide
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <FaServicestack className="text-2xl text-emerald-400" />
                  <span className="text-xl font-bold text-white">
                    NowScript
                  </span>
                </div>
                <p className="mb-6">
                  The complete solution for ServiceNow script management.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/About_us"
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">
                © {new Date().getFullYear()} SnowScripting. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}