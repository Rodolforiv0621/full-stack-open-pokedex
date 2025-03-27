import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Error occured: {error.toString()}</div>
)

export default ErrorMessage
