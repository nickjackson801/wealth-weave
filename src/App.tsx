import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import { saveEmailSignup } from './services/firebase'

// Import pages
import LearningCenter from './pages/LearningCenter'
import FinancialTools from './pages/FinancialTools'
import Resources from './pages/Resources'
import About from './pages/About'
import Signup from './pages/Signup'
import BeginnerCourse from './pages/courses/BeginnerCourse'
import IntermediateCourse from './pages/courses/IntermediateCourse'
import AdvancedCourse from './pages/courses/AdvancedCourse'
import GenericComingSoon from './pages/coming-soon/GenericComingSoon'
import ChatBot from './components/ChatBot'
import AdminDashboard from './pages/admin/Dashboard'
import FirebaseTest from './pages/FirebaseTest'

// Import coming soon pages
import WebinarComingSoon from './pages/coming-soon/WebinarComingSoon'
import ArticlesComingSoon from './pages/coming-soon/ArticlesComingSoon'
import ToolsComingSoon from './pages/coming-soon/ToolsComingSoon'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const basePath = '/wealth-weave'

  // Test Firebase connection
  useEffect(() => {
    const testFirebase = async () => {
      try {
        const result = await saveEmailSignup('test@example.com', 'connection_test');
        if (result.success) {
          console.log('Firebase connection successful!');
        } else {
          console.error('Firebase connection failed:', result.error);
        }
      } catch (error) {
        console.error('Firebase connection error:', error);
      }
    };
    testFirebase();
  }, []);

  const HomeIcon = () => (
    <svg 
      className="h-5 w-5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      aria-label="Home"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
      />
    </svg>
  )

  const HomePage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitError('')

      try {
        // Save the email to Firebase before redirecting
        const result = await saveEmailSignup(email)
        
        if (result.success) {
          console.log('Email lead saved successfully!')
          // Navigate to signup page with email pre-filled
          navigate('/signup', { state: { email } })
        } else {
          throw new Error('Failed to save email lead')
        }
      } catch (error) {
        console.error('Error saving email:', error)
        setSubmitError('There was an error saving your email. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }

    return (
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
                <span className="text-indigo-600">Free During Beta</span>
              </h1>

              {/* Private Banking Description */}
              <div className="mt-8 mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Private Banking?</h2>
                <div className="max-w-4xl mx-auto text-left bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg">
                  {/* Simple Explanation Section */}
                  <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <h3 className="text-xl font-medium text-indigo-600 mb-3">Private Banking Simplified</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Think of private banking like having your own personal financial team - similar to how celebrities have personal assistants who handle everything for them. But instead of managing your schedule, these experts manage your money.
                    </p>
                    <div className="grid gap-4">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">🏦</span>
                        <p className="text-gray-700">Regular banking is like going to a restaurant where everyone gets the same menu. Private banking is like having your own personal chef who creates meals just for you.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">💡</span>
                        <p className="text-gray-700">Instead of figuring out everything about money by yourself, you get a team of experts who help you make smart decisions about saving, investing, and growing your wealth.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">🎯</span>
                        <p className="text-gray-700">They help with everything money-related: from basic things like better interest rates on your accounts, to complex things like planning how to pass money to your children while paying less in taxes.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">
                    Imagine having a team of financial experts dedicated to helping you grow and protect your money - that's private banking. It's like having a personal financial command center that goes far beyond regular banking services.
                  </p>

                  {/* Real-World Examples Section */}
                  <div className="mb-8 bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-medium text-indigo-600 mb-3">Real-World Examples</h3>
                    <p className="text-gray-700 mb-4">Here's what private bankers actually do for their clients:</p>
                    <div className="grid gap-4">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">📈</span>
                        <div>
                          <p className="font-medium text-gray-900">Better Returns on Your Money</p>
                          <p className="text-gray-700">Instead of a regular savings account paying 0.01%, they might get you 3-4% or suggest better ways to grow your money.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">🏠</span>
                        <div>
                          <p className="font-medium text-gray-900">Special Mortgage Rates</p>
                          <p className="text-gray-700">When buying a house, they might get you a better mortgage rate than what's advertised to everyone else.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">👨‍👩‍👧‍👦</span>
                        <div>
                          <p className="font-medium text-gray-900">Family Money Planning</p>
                          <p className="text-gray-700">They help set up accounts for your kids' education or create a plan to pass down your business to your children while paying less in taxes.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-indigo-600 mb-3">Why Private Banking Exists</h3>
                    <p className="text-gray-700 mb-4">
                      As your money grows, managing it becomes more complicated. You might need help with:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Keeping track of multiple bank accounts and investments</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Finding ways to pay less in taxes (legally)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Making sure your family is taken care of in the future</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Getting access to better investment opportunities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-indigo-50 rounded-lg p-6">
                      <h3 className="text-xl font-medium text-indigo-600 mb-4">What You Get</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-medium text-gray-900">Your Own Money Expert</span>
                            <p className="text-sm text-gray-700">Someone who knows your situation and is always available to help</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-medium text-gray-900">Personal Investment Plan</span>
                            <p className="text-sm text-gray-700">A money plan made just for you, based on what you're comfortable with</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-medium text-gray-900">Team of Specialists</span>
                            <p className="text-sm text-gray-700">Tax experts, investment pros, and other specialists when you need them</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50 rounded-lg p-6">
                      <h3 className="text-xl font-medium text-indigo-600 mb-4">How It Makes Your Life Better</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-medium text-gray-900">More Money Growth</span>
                            <p className="text-sm text-gray-700">Better ways to make your money grow than regular bank accounts</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-medium text-gray-900">Peace of Mind</span>
                            <p className="text-sm text-gray-700">Experts watching over your money and protecting it from risks</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-medium text-gray-900">Future Security</span>
                            <p className="text-sm text-gray-700">Help making sure your family is taken care of for years to come</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">The Best Part:</span> While private banking usually requires $1 million or more in the bank, our platform gives you access to the same knowledge these experts use. You'll learn the strategies and tips that wealthy people use to grow their money, without needing to be wealthy yourself.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Join thousands of others learning private banking secrets. Get early access to expert financial knowledge typically reserved for high-net-worth clients.
              </p>
              
              {/* Email Signup Section */}
              <div className="mt-12 flex flex-col items-center" id="signup">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-2xl">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Start Your Financial Journey Today</h2>
                  <p className="text-gray-600 mb-6">Sign up now to secure free access during our beta period</p>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    {submitError && (
                      <div className="w-full p-2 bg-red-50 border border-red-100 rounded-lg mb-2">
                        <p className="text-sm text-red-700">{submitError}</p>
                      </div>
                    )}
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
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Get Beta Access'}
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-gray-500">
                    Limited time offer. No credit card required.
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
                  <h3 className="text-lg font-semibold text-gray-900">Free Beta Access</h3>
                  <p className="mt-2 text-sm text-gray-500">Get early access free during our beta period</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <Router basename={basePath}>
      <div className="min-h-screen bg-white">
        {/* Announcement Banner */}
        <div className="bg-indigo-600">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-white text-sm font-medium">
                ✨ Access Private Banking Knowledge, Free During Beta Launch ✨
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
                <Link to="/" className="flex items-center space-x-2">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">WealthWeave</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium inline-flex items-center">
                  <HomeIcon />
                </Link>
                <Link to="/learn" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Learning Center
                </Link>
                <Link to="/tools" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Financial Tools
                </Link>
                <Link to="/resources" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Resources
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  About Us
                </Link>
              </nav>

              {/* Get Started Button */}
              <div className="hidden md:flex items-center">
                <Link
                  to="/signup"
                  className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started Free
                </Link>
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
                  <Link to="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium inline-flex items-center">
                    <HomeIcon />
                  </Link>
                  <Link to="/learn" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                    Learning Center
                  </Link>
                  <Link to="/tools" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                    Financial Tools
                  </Link>
                  <Link to="/resources" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                    Resources
                  </Link>
                  <Link to="/about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                    About Us
                  </Link>
                  <Link to="/signup" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
                    Get Started Free
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearningCenter />} />
          <Route path="/learn/beginner" element={<BeginnerCourse />} />
          <Route path="/learn/intermediate" element={<IntermediateCourse />} />
          <Route path="/learn/advanced" element={<AdvancedCourse />} />
          <Route path="/tools" element={<FinancialTools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/coming-soon" element={<GenericComingSoon />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/firebase-test" element={<FirebaseTest />} />
        </Routes>

        {/* ChatBot */}
        <ChatBot />
      </div>
    </Router>
  )
}

export default App
