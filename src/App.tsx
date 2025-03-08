import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const basePath = '/wealth-weave'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email signup logic
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white text-sm font-medium">
              ✨ Access Private Banking Knowledge, 100% Free Forever ✨
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href={basePath + '/'} className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-2xl font-bold text-gray-900">WealthWeave</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href={basePath + '/'} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href={basePath + '/learn'} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Learning Center
              </a>
              <a href={basePath + '/tools'} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Financial Tools
              </a>
              <a href={basePath + '/resources'} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Resources
              </a>
              <a href={basePath + '/about'} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                About Us
              </a>
            </nav>

            {/* Get Started Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#signup"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started Free
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href={basePath + '/'} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Home
                </a>
                <a href={basePath + '/learn'} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Learning Center
                </a>
                <a href={basePath + '/tools'} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Financial Tools
                </a>
                <a href={basePath + '/resources'} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Resources
                </a>
                <a href={basePath + '/about'} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main>
        {/* Background pattern */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-12 sm:py-20 lg:py-28">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
                Expert Private Banking Knowledge,{' '}
                <span className="text-indigo-600">100% Free</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Join thousands of others learning private banking secrets. Get access to expert financial knowledge typically reserved for high-net-worth clients, now available to everyone.
              </p>
              
              {/* Email Signup Section */}
              <div className="mt-12 flex flex-col items-center" id="signup">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-2xl">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Start Your Financial Journey Today</h2>
                  <p className="text-gray-600 mb-6">Sign up for free access to all our resources and tools</p>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Get Free Access
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-gray-500">
                    No credit card required. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-indigo-100 p-3 mb-4">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Bank-Level Security</h3>
                  <p className="mt-2 text-sm text-gray-500">Your data is protected with enterprise-grade encryption</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-indigo-100 p-3 mb-4">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Instant Access</h3>
                  <p className="mt-2 text-sm text-gray-500">Start learning immediately after signing up</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-indigo-100 p-3 mb-4">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Always Free</h3>
                  <p className="mt-2 text-sm text-gray-500">No hidden fees or surprise charges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
