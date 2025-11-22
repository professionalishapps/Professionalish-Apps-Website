import Link from "next/link";
import { Smartphone, ArrowLeft, Shield, Mail, Globe, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Professionalish Apps",
  description: "Privacy Policy for Professionalish Apps mobile applications including self-improvement apps and mobile games.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Professionalish Apps</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-600 mb-2">Professionalish Apps</p>
          <p className="text-gray-500">Last Updated: November 22, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Privacy Policy explains how Professionalish Apps ("we," "us," or "our") collects, uses, and protects your information when you use our mobile applications, including self-improvement apps (such as habit trackers), mobile games, and any related services that may include advertisements and in-app purchases ("Services").
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">1</span>
                Information We Collect
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">1.1 Information You Provide</h3>
              <p className="text-gray-700 mb-3">We may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Account information (email, username, password), if account creation is supported</li>
                <li>Profile details (name, avatar, preferences)</li>
                <li>Self-improvement data such as habit entries, goals, or progress logs</li>
                <li>Support requests or communications</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-3">When you use our apps, we automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Device information (model, OS version, unique identifiers)</li>
                <li>Usage data (features used, clicks, session lengths)</li>
                <li>Crash logs and diagnostic data</li>
                <li>Approximate location (region-level), used for analytics or personalized ads depending on your settings</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1.3 Information From Third Parties</h3>
              <p className="text-gray-700 mb-3">We may receive information from:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ad networks (for ad delivery and measurement)</li>
                <li>Analytics providers (for usage trends and performance insights)</li>
                <li>Payment processors (purchase confirmations only – we do not receive full payment details)</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">2</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3">We may use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Operate, maintain, and improve our apps</li>
                <li>Customize content and app functionality</li>
                <li>Deliver personalized or non-personalized advertisements</li>
                <li>Process in-app purchases securely</li>
                <li>Track habit progress or app-based self-improvement data</li>
                <li>Analyze usage and app performance</li>
                <li>Prevent fraud, enhance security, and debug issues</li>
                <li>Communicate with you about updates or support</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">3</span>
                Advertising and In-App Purchases
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.1 Advertising</h3>
              <p className="text-gray-700 mb-3">
                Some Professionalish Apps products display ads served by third-party advertising partners.
              </p>
              <p className="text-gray-700 mb-3">These partners may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Device identifiers</li>
                <li>General location</li>
                <li>Ad engagement information</li>
                <li>App interactions</li>
              </ul>
              <p className="text-gray-700 mb-3">You can disable personalized ads through your device settings:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Android:</strong> Settings → Google → Ads → Opt out</li>
                <li><strong>iOS:</strong> Settings → Privacy → Apple Advertising</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.2 In-App Purchases (IAP)</h3>
              <p className="text-gray-700 mb-3">We use:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
                <li>Google Play Billing</li>
                <li>Apple In-App Purchases</li>
              </ul>
              <p className="text-gray-700 mb-2">We do not store or receive full credit card information.</p>
              <p className="text-gray-700">We only receive confirmation that a purchase occurred.</p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">4</span>
                Data Storage and Security
              </h2>
              <p className="text-gray-700 mb-3">
                We use reasonable technical and organizational measures to safeguard your data.
              </p>
              <p className="text-gray-700">
                However, no method of storage or transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">5</span>
                Data Sharing
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">We do not sell your personal information.</p>
              <p className="text-gray-700 mb-3">We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Trusted service providers (analytics, ads, crash logging)</li>
                <li>Legal authorities if required by law</li>
                <li>Business partners or acquiring companies in case of mergers or restructuring (with notice)</li>
              </ul>
              <p className="text-gray-700">
                All partners must follow strict confidentiality and data protection rules.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">6</span>
                Children's Privacy
              </h2>
              <p className="text-gray-700 mb-3">
                Our apps are not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
              <p className="text-gray-700">
                If we learn that information was collected from a child under 13, we will delete it promptly.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">7</span>
                Your Rights
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">For Users in the EU/EEA (GDPR)</h3>
              <p className="text-gray-700 mb-3">You may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Restrict processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">For California Users (CCPA/CPRA)</h3>
              <p className="text-gray-700 mb-3">You may:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Request details about the categories of data collected</li>
                <li>Request deletion of personal data</li>
                <li>Opt out of data sharing for advertising</li>
                <li>Exercise rights without discrimination</li>
              </ul>
              <p className="text-gray-700">
                To make a request, contact us using the information in section 12.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">8</span>
                Data Retention
              </h2>
              <p className="text-gray-700 mb-3">
                We retain your data only as long as necessary for the purposes stated in this policy or as required by law.
              </p>
              <p className="text-gray-700">
                Self-improvement entries (e.g., habit logs) remain stored until you delete them through the app or request deletion.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">9</span>
                Third-Party Links
              </h2>
              <p className="text-gray-700 mb-3">
                Our apps may contain links to third-party websites or services.
              </p>
              <p className="text-gray-700">
                We are not responsible for their content, privacy practices, or data handling.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">10</span>
                International Data Transfers
              </h2>
              <p className="text-gray-700 mb-3">
                Your information may be transferred to and processed on servers outside your home country.
              </p>
              <p className="text-gray-700">
                We ensure that adequate safeguards (such as Standard Contractual Clauses) are in place to protect your information.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">11</span>
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 mb-3">
                We may update this Privacy Policy occasionally.
              </p>
              <p className="text-gray-700 mb-3">
                Revised versions will be posted with an updated "Last Updated" date.
              </p>
              <p className="text-gray-700">
                We encourage you to review the Policy from time to time.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-xl">12</span>
                Contact Us
              </h2>
              <p className="text-gray-700 mb-6">
                For questions, concerns, or data requests, contact us at:
              </p>
              <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Professionalish Apps</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      <strong>Email:</strong> contact@professionalishapps.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      <strong>Website:</strong> www.professionalishapps.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      <strong>Address:</strong> [Business Address]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Smartphone className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">Professionalish Apps</span>
              </div>
              <p className="text-gray-400">
                Creating innovative mobile applications for self-improvement and entertainment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@professionalishapps.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Professionalish Apps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

