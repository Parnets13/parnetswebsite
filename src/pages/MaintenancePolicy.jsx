const MaintenancePolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="w-full pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Maintenance <span className="text-orange-500">Policy</span>
              </h1>
              <p className="text-gray-700 text-base leading-relaxed">
                This Maintenance Policy outlines the terms and conditions under which ParNets Software PVT LTD provides ongoing maintenance and support services to our Clients.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Scope of Maintenance Services</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We provide the following maintenance and support services:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700">Fixing bugs and resolving technical issues</li>
                <li className="text-gray-700">Updating software to ensure compatibility with the latest operating systems and browsers</li>
                <li className="text-gray-700">Adding minor enhancements or improvements</li>
                <li className="text-gray-700">Regular backups and recovery support</li>
                <li className="text-gray-700">Monitoring website or app performance</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Services beyond this scope, such as significant feature additions or redesigns, will be treated as new projects and billed separately.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Maintenance Plans</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We offer the following maintenance plans:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700"><strong>Basic Plan:</strong> Covers essential updates and bug fixes.</li>
                <li className="text-gray-700"><strong>Standard Plan:</strong> Includes all services in the Basic Plan plus performance monitoring and monthly backups.</li>
                <li className="text-gray-700"><strong>Premium Plan:</strong> Includes all services in the Standard Plan plus priority support and minor feature updates.</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                The details and pricing for these plans are outlined in your agreement or proposal.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Response Time</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We aim to address maintenance requests within the following timeframes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700"><strong>Critical Issues:</strong> Resolved within 48 hours</li>
                <li className="text-gray-700"><strong>Minor Issues:</strong> Resolved within 2-5 business days</li>
                <li className="text-gray-700"><strong>Major Issues:</strong> Resolved within 5-10 business days</li>
                <li className="text-gray-700"><strong>Complex Issues:</strong> As per timeline conveyed</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Response times may vary depending on the complexity of the issue and your chosen maintenance plan.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To ensure effective maintenance services, the Client must:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="text-gray-700">Provide access to necessary systems and credentials</li>
                <li className="text-gray-700">Report issues promptly with clear descriptions</li>
                <li className="text-gray-700">Ensure timely payments for ongoing maintenance services</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Exclusions</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The following are not included in the maintenance services:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className="text-gray-700">Third-party software issues or failures</li>
                <li className="text-gray-700">Damage caused by unauthorized modifications or actions</li>
                <li className="text-gray-700">Major redesigns or overhauls</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate the maintenance agreement by providing 30 days' written notice. Upon termination, all maintenance services will cease, and the Client will be responsible for any pending payments.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Maintenance fees must be paid as per the agreed schedule (monthly, quarterly, or annually). Late payments may result in suspension of services.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                While we take reasonable efforts to ensure the availability and functionality of your website or app, we are not liable for any downtime or data loss caused by factors beyond our control, such as server failures or cyberattacks.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contact Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions about this Maintenance Policy or wish to request maintenance services, contact us at:
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

export default MaintenancePolicy;
