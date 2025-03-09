import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import ComingSoon from '../../components/ComingSoon'

interface LocationState {
  title: string
  description: string
  returnLink: string
  returnText: string
}

const GenericComingSoon = () => {
  const location = useLocation()
  const state = location.state as LocationState

  if (!state) {
    return <Navigate to="/" replace />
  }

  return (
    <ComingSoon
      title={state.title}
      description={state.description}
      returnLink={state.returnLink}
      returnText={state.returnText}
    />
  )
}

export default GenericComingSoon 