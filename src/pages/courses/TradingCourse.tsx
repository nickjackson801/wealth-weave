import React, { useState } from 'react'

const TradingCourse = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const modules = [
    {
      id: 'trading-basics',
      title: 'Trading Fundamentals',
      duration: '2 hours',
      topics: [
        {
          title: 'Understanding Market Orders',
          content: 'Learn the basics of market orders, limit orders, stop orders, and other common order types. Understand how orders are executed and the importance of timing.',
          videoUrl: '#',
          duration: '40 min'
        },
        {
          title: 'Reading Market Data',
          content: 'Master the interpretation of market data, including price action, volume analysis, bid-ask spreads, and market depth.',
          videoUrl: '#',
          duration: '40 min'
        },
        {
          title: 'Technical Analysis Basics',
          content: 'Introduction to technical analysis, including chart patterns, trend lines, support and resistance levels, and basic technical indicators.',
          videoUrl: '#',
          duration: '40 min'
        }
      ]
    },
    {
      id: 'advanced-trading',
      title: 'Advanced Trading Strategies',
      duration: '3 hours',
      topics: [
        {
          title: 'Options Trading',
          content: 'Deep dive into options trading, including calls, puts, spreads, straddles, and complex option strategies for both hedging and speculation.',
          videoUrl: '#',
          duration: '60 min'
        },
        {
          title: 'Futures and Derivatives',
          content: 'Understanding futures contracts, forward contracts, swaps, and other derivatives. Learn how institutions use these instruments for risk management.',
          videoUrl: '#',
          duration: '60 min'
        },
        {
          title: 'Algorithmic Trading',
          content: 'Introduction to algorithmic trading strategies, including momentum trading, mean reversion, statistical arbitrage, and high-frequency trading concepts.',
          videoUrl: '#',
          duration: '60 min'
        }
      ]
    },
    {
      id: 'risk-execution',
      title: 'Risk Management & Trade Execution',
      duration: '2.5 hours',
      topics: [
        {
          title: 'Position Sizing and Risk Control',
          content: 'Learn professional position sizing techniques, risk-to-reward ratios, and portfolio-level risk management strategies.',
          videoUrl: '#',
          duration: '50 min'
        },
        {
          title: 'Advanced Order Execution',
          content: 'Master sophisticated order types and execution strategies used by institutional traders, including VWAP, TWAP, and dark pool trading.',
          videoUrl: '#',
          duration: '50 min'
        },
        {
          title: 'Trading Psychology',
          content: 'Develop the mental framework needed for successful trading, including emotional control, discipline, and decision-making under pressure.',
          videoUrl: '#',
          duration: '50 min'
        }
      ]
    },
    {
      id: 'institutional',
      title: 'Institutional Trading Practices',
      duration: '2 hours',
      topics: [
        {
          title: 'Block Trading',
          content: 'Understanding how institutions execute large orders while minimizing market impact, including block trading strategies and liquidity management.',
          videoUrl: '#',
          duration: '40 min'
        },
        {
          title: 'Market Making',
          content: 'Learn about market making strategies, bid-ask management, and how professional traders provide liquidity to markets.',
          videoUrl: '#',
          duration: '40 min'
        },
        {
          title: 'Regulatory Compliance',
          content: 'Navigate trading regulations, including insider trading rules, market manipulation laws, and reporting requirements.',
          videoUrl: '#',
          duration: '40 min'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
            Bonus Content
          </span>
          <h1 className="text-4xl font-bold text-gray-900">
            Securities Trading Mastery
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            From basic orders to institutional trading strategies
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
          <h3 className="text-lg font-semibold text-gray-900">Trading Resources</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Trading Tools</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>• Advanced Charting Platform</li>
                <li>• Options Calculator</li>
                <li>• Risk Management Calculator</li>
                <li>• Market Scanner</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Market Resources</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>• Real-time Market Data</li>
                <li>• Economic Calendar</li>
                <li>• Trading Journal Template</li>
                <li>• Regulatory Guidelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-lg font-semibold text-yellow-800">Risk Warning</h3>
          </div>
          <p className="mt-2 text-sm text-yellow-700">
            Trading securities involves substantial risk. Past performance is not indicative of future results. 
            Please ensure you understand the risks involved and seek independent advice if necessary.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TradingCourse 