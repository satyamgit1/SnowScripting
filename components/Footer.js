
import {
  FaServicestack,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";



export default function Footer() {
  return (
    <div>
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
                      © {new Date().getFullYear()} NowScript. All rights reserved.
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
  )
}
