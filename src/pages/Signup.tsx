import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    experience: 'beginner', // Default value
    interests: [] as string[]
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner - New to Private Banking' },
    { value: 'intermediate', label: 'Intermediate - Some Financial Knowledge' },
    { value: 'advanced', label: 'Advanced - Experienced Investor' }
  ]

  const interestAreas = [
    { value: 'investment', label: 'Investment Strategies' },
    { value: 'estate', label: 'Estate Planning' },
    { value: 'tax', label: 'Tax Optimization' },
    { value: 'retirement', label: 'Retirement Planning' },
    { value: 'wealth', label: 'Wealth Preservation' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Implement actual API call to save user data
      console.log('Form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitSuccess(true)
      setTimeout(() => {
        navigate('/learn') // Redirect to Learning Center after successful signup
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <svg
            className="mx-auto h-12 w-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome aboard!</h2>
          <p className="mt-2 text-gray-600">
            Thank you for joining WealthWeave. Redirecting you to our Learning Center...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Join WealthWeave
          </h1>
          <p className="mt-2 text-gray-600">
            Get free access to expert private banking education resources
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Your Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
              >
                {experienceLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Interest
              </label>
              <div className="space-y-2">
                {interestAreas.map(area => (
                  <div key={area.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={area.value}
                      name="interests"
                      value={area.value}
                      checked={formData.interests.includes(area.value)}
                      onChange={handleInterestChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor={area.value} className="ml-2 text-sm text-gray-700">
                      {area.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Creating your account...' : 'Get Free Access'}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              No credit card required.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup 