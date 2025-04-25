// // pages/index.js
// import { useAuth } from '../services/auth'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import NoteList from '../components/Notes/NoteList'
// import Link from 'next/link'

// export default function Home() {
//   const { user, loading: authLoading } = useAuth()
//   const router = useRouter()

//   useEffect(() => {
//     if (!authLoading && !user) {
//       router.push('/auth')
//     }
//   }, [user, authLoading, router])

//   if (authLoading || !user) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-xl">Loading...</div>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">
//           My ServiceNow Scripts
//         </h1>
//         <Link 
//           href="/note/new"
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
//         >
//           + New Script
//         </Link>
//       </div>
      
//       <NoteList userId={user.uid} />
//     </div>
//   )
// }


import Link from 'next/link';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>ScriptVault - ServiceNow Developer Notes</title>
        <meta name="description" content="Organize and manage all your ServiceNow scripts in one secure place" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800">ScriptVault</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/auth" className="text-gray-600 hover:text-indigo-600 transition">
                Sign In
              </Link>
              <Link href="/auth?mode=signup" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md">
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Organize Your ServiceNow <span className="text-indigo-600">Scripts</span> Like Never Before
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            The ultimate notebook for ServiceNow developers. Store, categorize, and access your scripts anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth?mode=signup" className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg text-lg font-medium">
              Start For Free
            </Link>
            <Link href="#features" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition shadow-lg text-lg font-medium border border-gray-200">
              Explore Features
            </Link>
          </div>
        </section>

        {/* App Preview */}
        <div className="max-w-6xl mx-auto px-6 mb-28">
          <div className="rounded-xl shadow-2xl overflow-hidden border-8 border-white transform rotate-1 hover:rotate-0 transition duration-300">
            <div className="bg-gray-800 py-3 px-4 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <img 
              src="/app-preview.png" // Replace with your actual screenshot
              alt="ScriptVault App Preview"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-t-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Powerful Features for Developers</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Script Organization</h3>
              <p className="text-gray-600">
                Categorize your scripts by type (Business Rules, Client Scripts, etc.), project, or custom tags.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Code Formatting</h3>
              <p className="text-gray-600">
                Syntax highlighting and proper formatting for all your ServiceNow scripts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Export</h3>
              <p className="text-gray-600">
                Download your scripts as text, JSON, or XML files with a single click.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Organize Your Scripts?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Join hundreds of ServiceNow developers who are saving hours every week with ScriptVault.
          </p>
          <Link href="/auth?mode=signup" className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg text-lg font-medium">
            Get Started - It's Free
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xl font-bold">ScriptVault</span>
              </div>
              <p className="text-gray-400">
                The ultimate notebook for ServiceNow developers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition">Features</Link></li>
                <li><Link href="/auth" className="text-gray-400 hover:text-white transition">Sign In</Link></li>
                <li><Link href="/auth?mode=signup" className="text-gray-400 hover:text-white transition">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">API</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ScriptVault. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}