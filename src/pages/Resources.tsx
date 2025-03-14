import React from 'react'
import { useNavigate } from 'react-router-dom'
import { saveEmailSignup } from '../services/firebase'

const Resources = () => {
  const navigate = useNavigate()

  const resourceCategories = [
    {
      title: "Guides & Tutorials",
      description: "Step-by-step guides on private banking concepts and strategies",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      resources: [
        "Private Banking Fundamentals Guide",
        "Investment Strategy Handbook",
        "Estate Planning Workbook",
        "Tax Optimization Guide"
      ]
    },
    {
      title: "Market Research",
      description: "In-depth analysis and reports on global markets and trends",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      resources: [
        "Global Market Trends Report",
        "Investment Opportunities Analysis",
        "Economic Outlook",
        "Sector Performance Reviews"
      ]
    },
    {
      title: "Templates & Tools",
      description: "Professional templates and calculators for financial planning",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      resources: [
        "Investment Portfolio Template",
        "Financial Goal Planner",
        "Risk Assessment Calculator",
        "Estate Distribution Planner"
      ]
    }
  ]

  const handleResourceAccess = (categoryTitle: string, resourceName: string) => {
    navigate('/coming-soon', {
      state: {
        title: `${resourceName} Coming Soon`,
        description: "We're currently preparing this resource. Sign up for beta access to be the first to know when it becomes available!",
        returnLink: "/resources",
        returnText: "Return to Resources"
      }
    })
  }

  const handleSubscribe = async () => {
    try {
      // Track that a user clicked "Subscribe Now" from the Resources page
      await saveEmailSignup('unknown_email_resources_subscribe');
      navigate('/signup');
    } catch (error) {
      console.error('Error tracking subscription:', error);
      // Still navigate even if tracking fails
      navigate('/signup');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Resources
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Access our comprehensive collection of private banking resources
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="mt-1 text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900">Available Resources:</h4>
                  <ul className="mt-4 space-y-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex}>
                        <button
                          onClick={() => handleResourceAccess(category.title, resource)}
                          className="group flex items-center text-left w-full"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                              {resource}
                            </p>
                          </div>
                          <div className="ml-4">
                            <span className="text-indigo-600 group-hover:text-indigo-800 text-sm font-medium inline-flex items-center">
                              Access
                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="bg-indigo-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 max-w-3xl mx-auto text-center sm:px-12">
              <h2 className="text-3xl font-bold text-white">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Subscribe to our newsletter to receive updates when new resources become available
              </p>
              <button
                onClick={handleSubscribe}
                className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources 