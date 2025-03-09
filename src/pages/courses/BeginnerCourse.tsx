import React, { useState } from 'react'

const BeginnerCourse = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const modules = [
    {
      id: 'intro',
      title: 'Introduction to Private Banking',
      duration: '45 minutes',
      topics: [
        {
          title: 'What is Private Banking?',
          content: 'Learn about the fundamentals of private banking and how it differs from retail banking. Understand the exclusive services and personalized attention that private banks offer to high-net-worth individuals.',
          videoUrl: '#',
          duration: '15 min'
        },
        {
          title: 'Private Banking Services Overview',
          content: 'Explore the range of services offered by private banks, including wealth management, investment advisory, estate planning, and concierge services.',
          videoUrl: '#',
          duration: '15 min'
        },
        {
          title: 'Getting Started with Private Banking',
          content: 'Understand the requirements and steps to access private banking services, including minimum asset requirements and relationship management.',
          videoUrl: '#',
          duration: '15 min'
        }
      ]
    },
    {
      id: 'wealth-basics',
      title: 'Wealth Management Basics',
      duration: '1 hour',
      topics: [
        {
          title: 'Understanding Asset Classes',
          content: 'Learn about different types of investments including stocks, bonds, real estate, and alternative investments.',
          videoUrl: '#',
          duration: '20 min'
        },
        {
          title: 'Risk Management Fundamentals',
          content: 'Understand the basics of risk assessment and how to protect your wealth through diversification and proper asset allocation.',
          videoUrl: '#',
          duration: '20 min'
        },
        {
          title: 'Building Your First Portfolio',
          content: 'Learn how to create a balanced investment portfolio that aligns with your financial goals and risk tolerance.',
          videoUrl: '#',
          duration: '20 min'
        }
      ]
    },
    {
      id: 'planning',
      title: 'Financial Planning Essentials',
      duration: '1 hour',
      topics: [
        {
          title: 'Goal Setting and Planning',
          content: 'Learn how to set realistic financial goals and create a comprehensive plan to achieve them.',
          videoUrl: '#',
          duration: '20 min'
        },
        {
          title: 'Understanding Financial Statements',
          content: 'Master the basics of reading and understanding key financial statements and reports.',
          videoUrl: '#',
          duration: '20 min'
        },
        {
          title: 'Tax Planning Basics',
          content: 'Learn fundamental tax planning strategies and how they impact your wealth management decisions.',
          videoUrl: '#',
          duration: '20 min'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Private Banking Fundamentals
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Master the basics of private banking and wealth management
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
              <h4 className="font-medium text-gray-900">Recommended Reading</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>• Introduction to Private Banking (PDF Guide)</li>
                <li>• Understanding Wealth Management (eBook)</li>
                <li>• Financial Planning Basics (Article)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Interactive Tools</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>• Risk Assessment Calculator</li>
                <li>• Portfolio Builder Tool</li>
                <li>• Goal Setting Worksheet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginnerCourse 