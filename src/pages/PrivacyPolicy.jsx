const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="w-full pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy <span className="text-orange-500">Policy</span>
              </h1>
              <p className="text-gray-700 text-base leading-relaxed">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700"><strong>Personal Information:</strong> Name, email address, phone number, and other details provided during registration or contact.</li>
                <li className="text-gray-700"><strong>Usage Data:</strong> Information about how you interact with our website or app, such as IP address, browser type, and pages visited.</li>
                <li className="text-gray-700"><strong>Cookies:</strong> Data collected through cookies and similar technologies for website functionality and analytics.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The information we collect is used to:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="text-gray-700">Provide and maintain our services</li>
                <li className="text-gray-700">Respond to inquiries and customer support requests</li>
                <li className="text-gray-700">Improve our website and services</li>
                <li className="text-gray-700">Send updates, promotional offers, and newsletters (with your consent)</li>
                <li className="text-gray-700">Ensure security and prevent fraudulent activities</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Sharing Your Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We do not sell or share your personal information with third parties except in the following cases:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="text-gray-700">When required by law or to comply with legal obligations</li>
                <li className="text-gray-700">To trusted service providers who assist us in delivering our services (under strict confidentiality agreements)</li>
                <li className="text-gray-700">During business transfers, such as mergers or acquisitions</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We take appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Your Rights</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You have the following rights regarding your information:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="text-gray-700">Access your personal data</li>
                <li className="text-gray-700">Request correction of incorrect or incomplete data</li>
                <li className="text-gray-700">Request deletion of your data</li>
                <li className="text-gray-700">Withdraw consent for data processing</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, contact us at <span className="text-blue-600">hello@parnetsgroup.com</span>.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to enhance your experience and analyze website traffic. By using our website, you agree to our use of cookies. You can manage your cookie preferences through your browser settings.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and significant changes will be communicated via email or website notification.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Contact Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="ml-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <span className="text-blue-600">hello@parnetsgroup.com</span></p>
                <p className="text-gray-700"><strong>Phone:</strong> <span className="text-gray-700">+91 9740016068</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
