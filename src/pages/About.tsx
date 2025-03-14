import React from 'react'
import { useNavigate } from 'react-router-dom'
import { saveEmailSignup } from '../services/firebase'

const About = () => {
  const navigate = useNavigate()
  
  const stats = [
    { label: "Active Users", value: "50,000+" },
    { label: "Learning Resources", value: "1,000+" },
    { label: "Expert Advisors", value: "50+" },
    { label: "Success Rate", value: "98%" }
  ]

  const handleGetStarted = async () => {
    try {
      // Track that a user clicked "Get Started" from the About page
      await saveEmailSignup('unknown_email_about_page_click');
      navigate('/signup');
    } catch (error) {
      console.error('Error tracking conversion:', error);
      // Still navigate even if tracking fails
      navigate('/signup');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About WealthWeave
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're democratizing private banking knowledge, making expert financial insights 
            accessible to everyone. Our mission is to empower individuals with the same 
            financial strategies used by the world's most successful investors.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Mission Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Our Mission
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    We believe that everyone deserves access to high-quality financial education 
                    and tools. Our platform brings private banking expertise to the masses, 
                    helping individuals make better financial decisions and secure their future.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <button
                      onClick={() => navigate('/signup')}
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Join Our Mission
                    </button>
                    <button 
                      onClick={() => navigate('/learn')}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Learn More <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="Financial planning"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Want to Learn More?
          </h2>
          <p className="mt-4 text-gray-600">
            Get in touch with our team to learn how we can help you achieve your financial goals
          </p>
          <button 
            onClick={handleGetStarted}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default About 