import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

// Knowledge base for courses and website information
const knowledgeBase = {
  courses: {
    beginner: {
      title: 'Private Banking Fundamentals',
      topics: [
        {
          name: 'What is Private Banking',
          content: 'Private banking provides personalized financial services to high-net-worth individuals. The course covers the fundamentals of private banking services, client relationships, and wealth preservation strategies.'
        },
        {
          name: 'High Net Worth Services',
          content: 'Learn about exclusive services offered to high-net-worth clients, including personalized portfolio management, estate planning, tax optimization, and concierge banking services.'
        },
        {
          name: 'Wealth Preservation',
          content: 'Understand key strategies for preserving and growing wealth across generations, including risk management, diversification, and long-term investment planning.'
        }
      ],
      duration: '2 hours',
      prerequisites: 'No prior experience required',
      certification: 'Certificate of completion provided'
    },
    intermediate: {
      title: 'Investment Strategies',
      topics: [
        {
          name: 'Portfolio Management',
          content: 'Master advanced portfolio management techniques, including asset allocation, rebalancing strategies, and risk-adjusted return optimization.'
        },
        {
          name: 'Risk Assessment',
          content: 'Learn comprehensive risk assessment methodologies, including market risk, credit risk, and operational risk analysis for high-net-worth portfolios.'
        },
        {
          name: 'Asset Allocation',
          content: 'Explore sophisticated asset allocation strategies across multiple asset classes, considering tax efficiency and client-specific objectives.'
        }
      ],
      duration: '3 hours',
      prerequisites: 'Basic understanding of financial markets',
      certification: 'Advanced certification available'
    },
    advanced: {
      title: 'Estate Planning',
      topics: [
        {
          name: 'Trust Structures',
          content: 'Deep dive into various trust structures, including revocable, irrevocable, charitable, and dynasty trusts, with their specific applications and benefits.'
        },
        {
          name: 'Tax Optimization',
          content: 'Advanced tax planning strategies for high-net-worth individuals, including international tax considerations and estate tax minimization techniques.'
        },
        {
          name: 'Succession Planning',
          content: 'Comprehensive approach to succession planning, including business succession, wealth transfer strategies, and family governance structures.'
        }
      ],
      duration: '2.5 hours',
      prerequisites: 'Completion of intermediate course recommended',
      certification: 'Expert level certification provided'
    },
    trading: {
      title: 'Securities Trading Mastery',
      topics: [
        {
          name: 'Trading Fundamentals',
          content: 'Master the basics of market orders, limit orders, stop orders, and technical analysis. Learn to read market data and understand price action.'
        },
        {
          name: 'Advanced Trading Strategies',
          content: 'Comprehensive coverage of options trading, futures, derivatives, and algorithmic trading strategies used by institutional investors.'
        },
        {
          name: 'Risk Management',
          content: 'Professional position sizing techniques, risk-to-reward ratios, and portfolio-level risk management strategies.'
        },
        {
          name: 'Institutional Practices',
          content: 'Learn about block trading, market making, and regulatory compliance in institutional trading environments.'
        }
      ],
      duration: '9.5 hours',
      prerequisites: 'Intermediate level market knowledge recommended',
      certification: 'Professional trading certification available'
    }
  },
  website: {
    pricing: {
      beta: 'All courses are currently free during our beta period',
      future: 'After beta, we will offer flexible subscription tiers to suit different learning needs',
      enterprise: 'Custom enterprise solutions available for institutions'
    },
    features: {
      learning: [
        'Expert-led video courses',
        'Interactive assessments',
        'Real-world case studies',
        'Progress tracking',
        'Certification programs'
      ],
      tools: [
        'Portfolio analysis tools',
        'Risk assessment calculators',
        'Investment planning software',
        'Market research dashboard'
      ],
      resources: [
        'Comprehensive guides',
        'Market research reports',
        'Expert webinars',
        'Community forums'
      ]
    },
    support: {
      hours: '24/7 chat support',
      email: 'support@wealthweave.com',
      response: 'Typical response time under 2 hours'
    }
  }
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Initial greeting based on current page
  useEffect(() => {
    const getInitialGreeting = () => {
      const path = location.pathname
      if (path.includes('/learn/beginner')) {
        return "Welcome to the Private Banking Fundamentals course! I can help you understand the basics of private banking. What would you like to know?"
      } else if (path.includes('/learn/intermediate')) {
        return "Welcome to the Investment Strategies course! I can help you with portfolio management and risk assessment. What questions do you have?"
      } else if (path.includes('/learn/advanced')) {
        return "Welcome to the Estate Planning course! I can assist you with understanding complex trust structures and succession planning. How can I help?"
      } else if (path.includes('/learn/trading')) {
        return "Welcome to the Securities Trading Mastery course! I can help you understand trading strategies and risk management. What would you like to learn?"
      } else if (path.includes('/learn')) {
        return "Welcome to the Learning Center! I can help you choose the right course or answer questions about our educational programs. What would you like to know?"
      } else if (path === '/about') {
        return "Hello! I can tell you more about WealthWeave and our mission. What would you like to know?"
      } else {
        return "Welcome to WealthWeave! I'm your AI assistant, ready to help you with courses, tools, and resources. How can I assist you today?"
      }
    }

    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          type: 'bot',
          content: getInitialGreeting(),
          timestamp: new Date()
        }
      ])
    }
  }, [location, messages.length])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      // Simulate response time for natural feeling
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: generateDetailedResponse(inputMessage, location.pathname),
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
    } catch (error) {
      console.error('Error getting bot response:', error)
      setIsTyping(false)
    }
  }

  // Enhanced response generation with detailed course content
  const generateDetailedResponse = (input: string, currentPath: string) => {
    const lowerInput = input.toLowerCase()
    
    // Course-specific responses based on current page
    if (currentPath.includes('/learn/')) {
      const coursePath = currentPath.split('/learn/')[1]
      const courseInfo = knowledgeBase.courses[coursePath as keyof typeof knowledgeBase.courses]
      
      if (courseInfo) {
        // Topic-specific responses
        for (const topic of courseInfo.topics) {
          if (lowerInput.includes(topic.name.toLowerCase())) {
            return topic.content
          }
        }

        // Course-specific questions
        if (lowerInput.includes('duration') || lowerInput.includes('how long')) {
          return `This course is ${courseInfo.duration} in length. ${courseInfo.prerequisites}`
        }
        if (lowerInput.includes('prerequisite') || lowerInput.includes('required')) {
          return courseInfo.prerequisites
        }
        if (lowerInput.includes('certification') || lowerInput.includes('certificate')) {
          return courseInfo.certification
        }
      }
    }

    // General course inquiries
    if (lowerInput.includes('course') || lowerInput.includes('learn')) {
      if (lowerInput.includes('beginner') || lowerInput.includes('fundamental')) {
        return `Our Private Banking Fundamentals course covers ${knowledgeBase.courses.beginner.topics.map(t => t.name).join(', ')}. The course is ${knowledgeBase.courses.beginner.duration} long and ${knowledgeBase.courses.beginner.prerequisites}.`
      }
      if (lowerInput.includes('intermediate') || lowerInput.includes('investment')) {
        return `Our Investment Strategies course covers ${knowledgeBase.courses.intermediate.topics.map(t => t.name).join(', ')}. The course is ${knowledgeBase.courses.intermediate.duration} long and ${knowledgeBase.courses.intermediate.prerequisites}.`
      }
      if (lowerInput.includes('advanced') || lowerInput.includes('estate')) {
        return `Our Estate Planning course covers ${knowledgeBase.courses.advanced.topics.map(t => t.name).join(', ')}. The course is ${knowledgeBase.courses.advanced.duration} long and ${knowledgeBase.courses.advanced.prerequisites}.`
      }
      if (lowerInput.includes('trading')) {
        return `Our Securities Trading Mastery course covers ${knowledgeBase.courses.trading.topics.map(t => t.name).join(', ')}. The course is ${knowledgeBase.courses.trading.duration} long and ${knowledgeBase.courses.trading.prerequisites}.`
      }
      return "We offer four comprehensive courses: Private Banking Fundamentals (beginner), Investment Strategies (intermediate), Estate Planning (advanced), and Securities Trading Mastery (bonus course). Which one would you like to know more about?"
    }

    // Pricing and subscription inquiries
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('subscription')) {
      return `${knowledgeBase.website.pricing.beta}. ${knowledgeBase.website.pricing.future}. For institutions, ${knowledgeBase.website.pricing.enterprise}.`
    }

    // Feature inquiries
    if (lowerInput.includes('feature') || lowerInput.includes('offer')) {
      return `We offer comprehensive learning features including: ${knowledgeBase.website.features.learning.join(', ')}. Our platform also provides tools such as: ${knowledgeBase.website.features.tools.join(', ')}.`
    }

    // Support inquiries
    if (lowerInput.includes('support') || lowerInput.includes('help') || lowerInput.includes('contact')) {
      return `We provide ${knowledgeBase.website.support.hours}. You can reach us at ${knowledgeBase.website.support.email}. ${knowledgeBase.website.support.response}.`
    }

    // Trading-specific inquiries
    if (lowerInput.includes('trading') || lowerInput.includes('market') || lowerInput.includes('stock')) {
      return `Our Securities Trading Mastery course covers everything from basic market orders to advanced institutional trading practices. Topics include ${knowledgeBase.courses.trading.topics.map(t => t.name).join(', ')}. Would you like specific information about any of these topics?`
    }

    // Default response with suggestion for topics
    return "I can help you with information about our courses, pricing, features, or support. Feel free to ask about specific topics like 'trading strategies', 'estate planning', or 'private banking basics'."
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[32rem] bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-4 border-b bg-indigo-600 rounded-t-lg">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              WealthWeave Assistant
            </h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatBot 