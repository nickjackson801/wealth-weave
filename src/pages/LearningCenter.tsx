import React from 'react'
import { useNavigate } from 'react-router-dom'

const LearningCenter = () => {
  const navigate = useNavigate()
  
  const courses = [
    {
      title: "Private Banking Fundamentals",
      description: "Learn the basics of private banking and wealth management",
      topics: ["What is Private Banking?", "High Net Worth Services", "Wealth Preservation"],
      level: "Beginner",
      duration: "2 hours",
      path: "/learn/beginner"
    },
    {
      title: "Investment Strategies",
      description: "Master advanced investment techniques used by private bankers",
      topics: ["Portfolio Management", "Risk Assessment", "Asset Allocation"],
      level: "Intermediate",
      duration: "3 hours",
      path: "/learn/intermediate"
    },
    {
      title: "Estate Planning",
      description: "Understanding wealth transfer and legacy planning",
      topics: ["Trust Structures", "Tax Optimization", "Succession Planning"],
      level: "Advanced",
      duration: "2.5 hours",
      path: "/learn/advanced"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Learning Center
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Access expert-curated courses on private banking and wealth management
          </p>
        </div>

        {/* Course Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
                
                {/* Topics */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Topics covered:</h4>
                  <ul className="mt-2 space-y-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => navigate(course.path)}
                  className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Additional Resources</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Live Webinars</h3>
              <p className="mt-2 text-gray-600">Join our weekly live sessions with private banking experts</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                View Schedule →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Expert Articles</h3>
              <p className="mt-2 text-gray-600">Read in-depth analysis from industry professionals</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                Browse Articles →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningCenter 