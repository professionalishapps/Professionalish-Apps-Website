import Link from "next/link";
import { Smartphone, Target, Gamepad2, TrendingUp, Shield, Sparkles } from "lucide-react";

export default function Home() {
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
              <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Innovative Mobile Solutions</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Transform Your Life,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              One App at a Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover powerful mobile applications designed to help you build better habits, 
            achieve your goals, and enjoy engaging entertainment experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apps"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Apps
            </a>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-full hover:bg-gray-50 transition-all border-2 border-gray-200"
            >
              <Shield className="h-5 w-5 mr-2" />
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="apps" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse portfolio of applications tailored to enhance your daily life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Self-Improvement Apps */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-Improvement</h3>
              <p className="text-gray-700 mb-6">
                Build lasting habits, track your progress, and achieve your personal goals with 
                our intuitive habit tracking and goal-setting applications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Habit Trackers
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Goal Setting Tools
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Progress Analytics
                </li>
              </ul>
            </div>

            {/* Mobile Games */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Gamepad2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Games</h3>
              <p className="text-gray-700 mb-6">
                Enjoy engaging and entertaining mobile games designed for fun, challenge, 
                and relaxation during your leisure time.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Casual Gaming
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Engaging Gameplay
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Regular Updates
                </li>
              </ul>
            </div>

            {/* Quality & Privacy */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Focused</h3>
              <p className="text-gray-700 mb-6">
                Your privacy and security are our top priorities. We implement industry-standard 
                practices to protect your data.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Secure Data Storage
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  GDPR & CCPA Compliant
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Transparent Policies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-blue-100 text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.5★</div>
              <div className="text-blue-100 text-lg">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-100 text-lg">Apps Published</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download our apps from the App Store or Google Play and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all"
            >
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all"
            >
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
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
