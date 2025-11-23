import Link from "next/link";
import { Smartphone, ArrowLeft, Mail, MessageCircle, FileText, HelpCircle, Send } from "lucide-react";

export const metadata = {
  title: "Support - Professionalish Apps",
  description: "Get help and support for Professionalish Apps. Contact us with questions, report issues, or request features.",
};

export default function Support() {
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
              <Link href="/support" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                Support
              </Link>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
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
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Support</h1>
          </div>
          <p className="text-xl text-gray-600">
            We're here to help! Get assistance with our apps or reach out with any questions.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Support */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-700 mb-6">
                Send us an email and we'll get back to you within 24-48 hours.
              </p>
              <a
                href="mailto:professionalishapps@gmail.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                professionalishapps@gmail.com
                <Send className="h-4 w-4 ml-2" />
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h3>
              <p className="text-gray-700 mb-6">
                Check out our frequently asked questions for quick answers.
              </p>
              <a
                href="#faq"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                View FAQ
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll respond as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="app" className="block text-sm font-semibold text-gray-700 mb-2">
                  Which App? (Optional)
                </label>
                <input
                  type="text"
                  id="app"
                  name="app"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g., Habit Tracker Pro"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your question or issue..."
                ></textarea>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> This is a static form for demonstration. To enable functionality, please send your message directly to{" "}
                  <a href="mailto:professionalishapps@gmail.com" className="underline font-semibold">
                    professionalishapps@gmail.com
                  </a>
                </p>
              </div>

              <a
                href="mailto:professionalishapps@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3">Q:</span>
                How do I reset my password?
              </h3>
              <p className="text-gray-700 ml-8">
                Open the app, go to Settings, and tap "Forgot Password." Follow the instructions sent to your email to reset your password.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3">Q:</span>
                How do I restore my in-app purchases?
              </h3>
              <p className="text-gray-700 ml-8">
                Go to the app's Settings menu and tap "Restore Purchases." Make sure you're signed in with the same Apple ID or Google account used for the original purchase.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3">Q:</span>
                Can I sync my data across multiple devices?
              </h3>
              <p className="text-gray-700 ml-8">
                Yes! Create an account in the app and sign in on all your devices. Your data will automatically sync across all devices where you're logged in.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3">Q:</span>
                How do I delete my account and data?
              </h3>
              <p className="text-gray-700 ml-8">
                Go to Settings → Account → Delete Account. You can also email us at professionalishapps@gmail.com to request account deletion. We'll process your request within 30 days.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3">Q:</span>
                How do I turn off ads?
              </h3>
              <p className="text-gray-700 ml-8">
                Most of our apps offer an ad-free premium version available through in-app purchase. Look for the "Remove Ads" or "Go Premium" option in the app's settings or main menu.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3">Q:</span>
                The app is crashing or not working properly. What should I do?
              </h3>
              <p className="text-gray-700 ml-8">
                First, try restarting the app and your device. Make sure you have the latest version installed from the App Store or Google Play. If the issue persists, email us at professionalishapps@gmail.com with details about your device and the problem.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:professionalishapps@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </a>
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
                  <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                    Support
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
                Email: professionalishapps@gmail.com
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

