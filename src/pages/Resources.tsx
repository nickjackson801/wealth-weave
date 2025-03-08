import React from 'react'

const Resources = () => {
  const categories = [
    {
      title: "Guides & Tutorials",
      items: [
        {
          title: "Private Banking 101",
          description: "A comprehensive guide to private banking services",
          type: "PDF Guide",
          length: "25 pages"
        },
        {
          title: "Investment Strategy Masterclass",
          description: "Video series on advanced investment techniques",
          type: "Video Series",
          length: "5 hours"
        },
        {
          title: "Wealth Preservation Strategies",
          description: "Expert insights on protecting and growing wealth",
          type: "eBook",
          length: "12 chapters"
        }
      ]
    },
    {
      title: "Market Research",
      items: [
        {
          title: "Global Market Trends 2024",
          description: "Analysis of current market conditions and forecasts",
          type: "Report",
          length: "Quarterly"
        },
        {
          title: "Emerging Markets Analysis",
          description: "Opportunities in developing economies",
          type: "Research Paper",
          length: "18 pages"
        }
      ]
    },
    {
      title: "Templates & Tools",
      items: [
        {
          title: "Portfolio Tracking Template",
          description: "Professional-grade Excel template for tracking investments",
          type: "Excel Template",
          length: "Multiple sheets"
        },
        {
          title: "Risk Assessment Toolkit",
          description: "Comprehensive tools for evaluating investment risks",
          type: "Digital Tool",
          length: "Interactive"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Resources
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Access our library of professional resources and educational materials
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
            <button className="absolute right-3 top-3">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mt-16 space-y-16">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                            {item.type}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">{item.length}</span>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                      <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                        Access Resource
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Get weekly updates on new resources and market insights
            </p>
            <form className="mt-8 sm:flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:max-w-md px-5 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="mt-3 sm:mt-0 sm:ml-3 px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources 