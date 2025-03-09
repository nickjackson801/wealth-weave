import React, { useState } from 'react'

const IntermediateCourse = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const modules = [
    {
      id: 'advanced-investments',
      title: 'Advanced Investment Strategies',
      duration: '1.5 hours',
      topics: [
        {
          title: 'Portfolio Management Techniques',
          content: 'Learn advanced portfolio management strategies including factor investing, smart beta, and tactical asset allocation.',
          videoUrl: '#',
          duration: '30 min'
        },
        {
          title: 'Alternative Investments',
          content: 'Explore private equity, hedge funds, real estate investment trusts (REITs), and other alternative investment vehicles.',
          videoUrl: '#',
          duration: '30 min'
        },
        {
          title: 'Global Market Analysis',
          content: 'Understand how to analyze international markets and create globally diversified portfolios.',
          videoUrl: '#',
          duration: '30 min'
        }
      ]
    },
    {
      id: 'wealth-structuring',
      title: 'Wealth Structuring & Protection',
      duration: '2 hours',
      topics: [
        {
          title: 'Trust Structures and Usage',
          content: 'Learn about different types of trusts and how they can be used for wealth protection and transfer.',
          videoUrl: '#',
          duration: '40 min'
        },
        {
          title: 'Advanced Tax Planning',
          content: 'Master sophisticated tax planning strategies used by private banking clients.',
          videoUrl: '#',
          duration: '40 min'
        },
        {
          title: 'Insurance Strategies',
          content: 'Explore advanced insurance products and strategies for wealth protection and transfer.',
          videoUrl: '#',
          duration: '40 min'
        }
      ]
    },
    {
      id: 'risk-management',
      title: 'Advanced Risk Management',
      duration: '1.5 hours',
      topics: [
        {
          title: 'Derivatives and Hedging',
          content: 'Understand how to use options, futures, and other derivatives for portfolio protection.',
          videoUrl: '#',
          duration: '30 min'
        },
        {
          title: 'Risk Analytics',
          content: 'Learn to use sophisticated risk metrics and analysis tools used by professional investors.',
          videoUrl: '#',
          duration: '30 min'
        },
        {
          title: 'Currency Risk Management',
          content: 'Master strategies for managing currency exposure in international portfolios.',
          videoUrl: '#',
          duration: '30 min'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Advanced Wealth Management
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Take your private banking knowledge to the next level
          </p>
        </div>

        <div className="mt-16">
          {modules.map((module) => (
            <div key={module.id} className="mb-8">
              <div 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{module.duration}</p>
                    </div>
                    <svg
                      className={`h-6 w-6 text-gray-400 transform transition-transform ${
                        selectedModule === module.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {selectedModule === module.id && (
                  <div className="border-t border-gray-200">
                    {module.topics.map((topic, index) => (
                      <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-gray-900">{topic.title}</h4>
                            <p className="mt-2 text-gray-600">{topic.content}</p>
                            <div className="mt-4 flex items-center text-sm text-gray-500">
                              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {topic.duration}
                            </div>
                          </div>
                          <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Start Lesson
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900">Your Progress</h3>
          <div className="mt-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                    In Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    0%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                <div className="w-0 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900">Additional Resources</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Advanced Reading Materials</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>• Advanced Portfolio Theory (Research Paper)</li>
                <li>• Global Wealth Management Strategies (Case Studies)</li>
                <li>• Risk Management in Practice (Technical Guide)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Professional Tools</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>• Portfolio Analytics Suite</li>
                <li>• Risk Assessment Platform</li>
                <li>• Tax Strategy Calculator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntermediateCourse 