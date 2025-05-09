import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | ScriptHub</title>
        <meta name="description" content="Terms and Conditions for ScriptHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-orange-600">
          <Link href="/">ScriptHub</Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-800 hover:text-orange-600">Home</Link>
          <Link href="/features" className="text-gray-800 hover:text-orange-600">Features</Link>
          <Link href="/contact" className="text-gray-800 hover:text-orange-600">Contact Us</Link>
          <Link href="/auth" className="text-gray-800 hover:text-orange-600">Sign In</Link>
        </div>
      </nav>

      <div className="container mx-auto px-8 py-12 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">Terms and Conditions</h1>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to ScriptHub! By using our services, you agree to comply with the following Terms and Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p>
            By accessing or using ScriptHub's website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you are prohibited from using our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">2. User Responsibilities</h2>
          <p>
            As a user of ScriptHub, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provide accurate and up-to-date information during registration.</li>
            <li>Use the services in a lawful and responsible manner.</li>
            <li>Not use our services for any illegal or unauthorized activities.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">3. Intellectual Property</h2>
          <p>
            All content and materials available on ScriptHub, including text, logos, graphics, and software, are the property of ScriptHub and are protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">4. Privacy and Data Collection</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">5. Termination of Access</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time without prior notice if we believe you have violated these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">6. Limitation of Liability</h2>
          <p>
            ScriptHub is not liable for any damages, losses, or legal claims arising from your use of our services. You agree to use our platform at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">7. Modifications to Terms</h2>
          <p>
            We may update or change these Terms and Conditions from time to time. Any changes will be posted on this page, and your continued use of the services constitutes acceptance of those changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">8. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of the state or country in which ScriptHub is operated. Any disputes will be resolved in the appropriate legal forum.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">9. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms and Conditions, please contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Email: [Insert your contact email]</li>
            <li>Address: [Insert your business address]</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <span className="text-blue-500 hover:text-blue-700 text-lg font-medium">Back to Home</span>
          </Link>
        </div>
      </div>
    </>
  );
}
