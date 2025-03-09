import React from 'react'
import { Link } from 'react-router-dom'

interface ComingSoonProps {
  title: string
  description: string
  returnLink: string
  returnText: string
}

const ComingSoon = ({ title, description, returnLink, returnText }: ComingSoonProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Coming Soon Icon */}
        <div className="mx-auto h-24 w-24 bg-indigo-100 rounded-full flex items-center justify-center">
          <svg className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-lg text-gray-600">
          {description}
        </p>

        {/* Beta Access Note */}
        <div className="mt-4 bg-indigo-50 rounded-lg p-4">
          <p className="text-sm text-indigo-700">
            We're currently in beta and actively developing new content. Sign up now to get notified when this section becomes available!
          </p>
        </div>

        {/* Return Link */}
        <div className="mt-6">
          <Link
            to={returnLink}
            className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {returnText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon 