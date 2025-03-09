import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

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

  const bonusCourse = {
    title: "Securities Trading Mastery",
    description: "From basic orders to institutional trading strategies",
    topics: ["Market Orders & Execution", "Advanced Trading Strategies", "Risk Management", "Institutional Practices"],
    level: "Bonus",
    duration: "9.5 hours",
    path: "/learn/trading"
  }

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

        {/* Bonus Course */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-white/95 backdrop-blur-sm p-8">
              <div className="flex items-center justify-between">
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {bonusCourse.level}
                </span>
                <span className="text-sm text-gray-500">{bonusCourse.duration}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{bonusCourse.title}</h3>
              <p className="mt-2 text-gray-600">{bonusCourse.description}</p>
              
              {/* Topics */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Comprehensive Coverage:</h4>
                <ul className="mt-3 grid grid-cols-2 gap-4">
                  {bonusCourse.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => navigate(bonusCourse.path)}
                className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium text-lg"
              >
                Access Bonus Content
              </button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Additional Resources</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Live Webinars</h3>
              <p className="mt-2 text-gray-600">Join our weekly live sessions with private banking experts</p>
              <button 
                onClick={() => navigate('/coming-soon', {
                  state: {
                    title: "Live Webinars Coming Soon",
                    description: "Our expert-led webinars will cover the latest trends in private banking, investment strategies, and wealth management.",
                    returnLink: "/learn",
                    returnText: "Return to Learning Center"
                  }
                })}
                className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
              >
                View Schedule 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Expert Articles</h3>
              <p className="mt-2 text-gray-600">Read in-depth analysis from industry professionals</p>
              <button 
                onClick={() => navigate('/coming-soon', {
                  state: {
                    title: "Expert Articles Coming Soon",
                    description: "In-depth analysis and insights from industry professionals on private banking, wealth management, and investment strategies.",
                    returnLink: "/learn",
                    returnText: "Return to Learning Center"
                  }
                })}
                className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
              >
                Browse Articles
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningCenter 