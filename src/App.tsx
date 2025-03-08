import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-indigo-600">
                WealthWeave
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="/learn" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Learn
              </a>
              <a href="/tools" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Financial Tools
              </a>
              <a href="/resources" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Resources
              </a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                About
              </a>
            </nav>

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
                <a href="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Home
                </a>
                <a href="/learn" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Learn
                </a>
                <a href="/tools" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Financial Tools
                </a>
                <a href="/resources" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  Resources
                </a>
                <a href="/about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                  About
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Private Banking Knowledge for Everyone
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Master personal finance with expert insights traditionally reserved for private banking clients. 
                Learn, grow, and make informed financial decisions with WealthWeave.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/learn"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Learning
                </a>
                <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
