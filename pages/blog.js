import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | NowScript</title>
        <meta name="description" content="Interesting facts and blog posts about NowScript and ServiceNow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 sm:p-10 z-90 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <div className="text-3xl sm:text-4xl font-extrabold text-orange-600">
          <Link href="/">ScriptHub</Link>
        </div>
        <div className="space-x-6 text-sm sm:text-lg font-medium">
          <Link href="/" className="text-gray-800 hover:text-orange-600 transform hover:scale-110 transition duration-300">Home</Link>
          <Link href="/contact" className="text-gray-800 hover:text-orange-600 transform hover:scale-110 transition duration-300">Contact Us</Link>
          <Link href="/auth" className="text-gray-800 hover:text-orange-600 transform hover:scale-110 transition duration-300">Sign In</Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-8 py-12 mt-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-xl animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-orange-600 mb-12 animate__animated animate__bounceIn animate__delay-1s">Interesting Facts About ServiceNow</h1>

        <div className="flex justify-center mb-12 animate__animated animate__fadeIn">
          <Image 
            src="/snlogo.png" 
            alt="ServiceNow Better Than Others" 
            width={600} 
            height={350} 
            className="rounded-lg shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 max-w-full h-auto"
          />
        </div>

        <div className="space-y-8 text-lg sm:text-xl text-gray-700 leading-relaxed">
          <p className="text-gray-800 mb-6">
            ServiceNow is a powerful platform used by businesses to manage digital workflows and automate key business processes. It has revolutionized the way organizations manage their internal processes, from IT service management (ITSM) to customer service and HR services. Let’s explore some interesting facts about ServiceNow and how it’s transforming industries worldwide.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. What is ServiceNow?</h2>
          <p className="mb-6">
            ServiceNow is a cloud-based platform that offers a wide range of software solutions for automating business processes. It helps companies with workflow automation, incident management, and service desk operations, among other things. It connects people, systems, and data to help organizations improve efficiency and reduce operational costs.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. Key ServiceNow Products</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>IT Service Management (ITSM):</strong> Manages incidents, service requests, and change management to improve IT operations.</li>
            <li><strong>Customer Service Management (CSM):</strong> Helps businesses handle customer inquiries and support tickets efficiently.</li>
            <li><strong>Human Resources Service Delivery (HRSD):</strong> Automates HR tasks and improves employee experiences.</li>
            <li><strong>Governance, Risk, and Compliance (GRC):</strong> Provides tools to manage risks and compliance requirements effectively.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Interesting Facts About ServiceNow</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Founded in 2004:</strong> ServiceNow was founded by Fred Luddy and has grown into one of the leading cloud platforms globally.</li>
            <li><strong>Global Reach:</strong> ServiceNow is used by over 6,000 organizations across more than 70 countries worldwide.</li>
            <li><strong>Platform as a Service (PaaS):</strong> ServiceNow operates as a Platform as a Service (PaaS), enabling businesses to build and customize workflows without writing code.</li>
            <li><strong>Innovative AI Integration:</strong> ServiceNow is integrating AI capabilities like machine learning and predictive analytics into their platform, enhancing decision-making and automation.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. How ScriptHub Relates to ServiceNow</h2>
          <p className="mb-6">
            ScriptHub is a tool designed to help ServiceNow developers and administrators manage their scripts and notes more effectively. With the ability to store, search, and share code snippets, ScriptHub is tailored for ServiceNow professionals who want to increase productivity and collaborate seamlessly. The platform simplifies script management and makes it easier for users to access important scripts and business rules.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. The Future of ServiceNow</h2>
          <p className="mb-6">
            ServiceNow’s future is promising, with continuous innovation in artificial intelligence, machine learning, and the Internet of Things (IoT). The platform will continue to evolve and automate business processes, making it easier for organizations to work smarter and improve customer and employee experiences.
          </p>
        </div>

        <div className="mt-12 text-center animate__animated animate__fadeIn animate__delay-2s">
          <Link href="/">
            <span className="text-orange-500 hover:text-blue-700 text-lg font-medium transform hover:scale-110 transition duration-300">Back to Home</span>
          </Link>
        </div>
      </div>
    </>
  );
}
