


// import { FaServicestack, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Footer() {
//   // Define colors directly in the component or use Tailwind config
//   const colors = {
//     primaryText: 'text-[#00c16d]', // Custom color code #00c16d
//     secondaryText: 'text-white',
//     linkHover: 'hover:text-white transition-colors',
//   };

//   return (
//     <div>
//       <footer className="py-16 bg-gray-900 text-gray-400">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <Link
//                 href=""
//                 className="flex items-center space-x-2"
//                 onClick={() =>
//                   trackEvent({
//                     action: 'navigation',
//                     category: 'engagement',
//                     label: 'logo_click',
//                   })
//                 }
//               >
//                 <div className="relative w-8 h-8">
//                   <Image
//                     src="/snowslogo.png"
//                     alt="SnowScripting Logo"
//                     fill
//                     className="object-contain"
//                     sizes="60px"
//                     priority
//                   />
//                 </div>
//                 <span className={`text-xl font-bold ${colors.primaryText}`}>
//                   SnowScripting
//                 </span>
//               </Link>
//               <p className="mb-6">
//                 The complete solution for ServiceNow script management.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className={`${colors.linkHover}`}
//                 >
//                   <FaTwitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className={`${colors.linkHover}`}
//                 >
//                   <FaGithub className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className={`${colors.linkHover}`}
//                 >
//                   <FaLinkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className={`${colors.secondaryText} text-lg font-semibold mb-4`}>
//                 Product
//               </h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a href="#features" className={colors.linkHover}>
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className={colors.linkHover}>
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className={colors.linkHover}>
//                     Integrations
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className={colors.linkHover}>
//                     Changelog
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className={`${colors.secondaryText} text-lg font-semibold mb-4`}>
//                 Resources
//               </h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a href="#" className={colors.linkHover}>
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className={colors.linkHover}>
//                     API Reference
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className={colors.linkHover}>
//                     Community
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className={colors.linkHover}>
//                     Support
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className={`${colors.secondaryText} text-lg font-semibold mb-4`}>
//                 Company
//               </h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a href="/About_us" className={colors.linkHover}>
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/blog" className={colors.linkHover}>
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/careers" className={colors.linkHover}>
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/contact" className={colors.linkHover}>
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <p className="mb-4 md:mb-0">
//               © {new Date().getFullYear()} SnowScripting. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="/privacy" className={colors.linkHover}>
//                 Privacy
//               </a>
//               <a href="/terms" className={colors.linkHover}>
//                 Terms
//               </a>
//               <a href="#" className={colors.linkHover}>
//                 Cookies
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



import { FaServicestack, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  // Define colors directly in the component or use Tailwind config
  const colors = {
    primaryText: 'text-[#00c16d]', // Custom color code #00c16d
    secondaryText: 'text-white',
    linkHover: 'hover:text-white transition-colors',
  };

  // Track event function (Google Analytics)
  const trackEvent = ({ action, category, label }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };

  // Handle page reload on logo click
  const handleReload = (e) => {
    e.preventDefault(); // Prevent default link behavior
    trackEvent({
      action: 'navigation',
      category: 'engagement',
      label: 'logo_click',
    });
    router.reload(); // Reload the current page
  };

  return (
    <div>
      <footer className="py-16 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Link
                href="#"
                className="flex items-center space-x-2"
                onClick={handleReload} // Call handleReload function
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
              <p className="mb-6">
                The complete solution for ServiceNow script management.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`${colors.linkHover}`}
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className={`${colors.linkHover}`}
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className={`${colors.linkHover}`}
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className={`${colors.secondaryText} text-lg font-semibold mb-4`}>
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className={colors.linkHover}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className={colors.linkHover}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className={colors.linkHover}>
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className={colors.linkHover}>
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`${colors.secondaryText} text-lg font-semibold mb-4`}>
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={colors.linkHover}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className={colors.linkHover}>
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className={colors.linkHover}>
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className={colors.linkHover}>
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`${colors.secondaryText} text-lg font-semibold mb-4`}>
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/About_us" className={colors.linkHover}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className={colors.linkHover}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/careers" className={colors.linkHover}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className={colors.linkHover}>
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
              <a href="/privacy" className={colors.linkHover}>
                Privacy
              </a>
              <a href="/terms" className={colors.linkHover}>
                Terms
              </a>
              <a href="#" className={colors.linkHover}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
