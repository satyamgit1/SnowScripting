import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ScriptHub</title>
        <meta name="description" content="Privacy Policy for ScriptHub" />
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
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">Privacy Policy</h1>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            At ScriptHub, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By accessing or using our services, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p>
            We collect information that you provide to us directly, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal Identification Information: Name, email address, phone number, etc.</li>
            <li>Usage Data: IP address, browser type, device information, and pages visited.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Providing and improving our services</li>
            <li>Communicating with you (e.g., to send newsletters, respond to inquiries, etc.)</li>
            <li>Personalizing your experience</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">3. How We Protect Your Information</h2>
          <p>
            We use commercially reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">4. Sharing Your Information</h2>
          <p>
            We may share your information in the following situations:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>With service providers who assist in operating our services (e.g., hosting, email delivery).</li>
            <li>To comply with legal obligations or to protect the rights, property, and safety of ScriptHub and others.</li>
            <li>With your consent, for any other purpose.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">5. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your user experience. You can set your browser to refuse cookies, but some features of the website may not function properly if you do so.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">6. Your Rights and Choices</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Access, update, or delete your information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Withdraw your consent at any time (where applicable).</li>
          </ul>
          <p>If you wish to exercise any of these rights, please contact us at [Insert contact info].</p>

          <h2 className="text-2xl font-semibold text-gray-800">7. Children's Privacy</h2>
          <p>
            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have inadvertently collected personal information from a child under 13, we will take steps to delete that information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Email: [satyamsingh2003a@gmail.com]</li>
            <li>Address: [ServiceNow Developer Heart]</li>
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
