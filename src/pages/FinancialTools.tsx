import React from 'react'
import { useNavigate } from 'react-router-dom'

const FinancialTools = () => {
  const navigate = useNavigate()

  const tools = [
    {
      title: "Investment Portfolio Analyzer",
      description: "Analyze your portfolio's performance, risk metrics, and allocation",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Retirement Calculator",
      description: "Plan your retirement with our advanced forecasting tools",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Tax Optimization Tool",
      description: "Optimize your investment tax strategy across multiple accounts",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Estate Planning Assistant",
      description: "Create and manage your estate planning strategy",
      icon: (
        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  const handleToolClick = (toolName: string) => {
    navigate('/coming-soon', {
      state: {
        title: `${toolName} Coming Soon`,
        description: "We're currently developing this powerful financial tool. Sign up for beta access to be the first to know when it launches!",
        returnLink: "/tools",
        returnText: "Return to Financial Tools"
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Financial Tools
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Professional-grade tools to optimize your wealth management strategy
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleToolClick(tool.title)}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {tool.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                    <p className="mt-1 text-gray-600">{tool.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                    Try Now
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Tool */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">
                Wealth Management Dashboard
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Get a comprehensive view of your entire financial portfolio with our premium dashboard. 
                Track investments, analyze performance, and make informed decisions.
              </p>
              <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Try Premium Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Need Help?</h2>
          <p className="mt-4 text-gray-600">
            Our financial experts are available 24/7 to help you make the most of our tools
          </p>
          <button className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinancialTools 