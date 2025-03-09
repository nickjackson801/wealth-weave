import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdvancedCourse = () => {
  const navigate = useNavigate()
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  const modules = [
    {
      title: "Estate Planning Mastery",
      duration: "55 minutes",
      topics: [
        "Complex Trust Structures",
        "International Estate Planning",
        "Business Succession",
        "Legacy Planning"
      ]
    },
    {
      title: "Tax Strategy & Optimization",
      duration: "50 minutes",
      topics: [
        "International Tax Planning",
        "Corporate Structure Optimization",
        "Tax-Efficient Investment Strategies",
        "Regulatory Compliance"
      ]
    },
    {
      title: "Wealth Transfer Strategies",
      duration: "45 minutes",
      topics: [
        "Multi-Generational Planning",
        "Family Governance",
        "Philanthropic Structures",
        "Asset Protection"
      ]
    }
  ]

  const handleStartLesson = (moduleTitle: string) => {
    navigate('/coming-soon', {
      state: {
        title: `${moduleTitle} Coming Soon`,
        description: "We're currently developing this lesson. Sign up for beta access to be the first to know when it launches!",
        returnLink: "/learn/advanced",
        returnText: "Return to Course"
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Estate Planning</h1>
          <p className="mt-4 text-lg text-gray-600">
            Understanding wealth transfer and legacy planning
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                  <span className="text-sm text-gray-500">{module.duration}</span>
                </div>
                
                {/* Module Content */}
                <div className={`mt-4 ${selectedModule === index ? 'block' : 'hidden'}`}>
                  <h4 className="text-sm font-medium text-gray-900">Topics covered:</h4>
                  <ul className="mt-2 space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleStartLesson(module.title)}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Start Lesson
                  </button>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => setSelectedModule(selectedModule === index ? null : index)}
                  className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  {selectedModule === index ? 'Show Less' : 'Show More'}
                  <svg
                    className={`ml-2 h-5 w-5 transform transition-transform ${
                      selectedModule === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvancedCourse 