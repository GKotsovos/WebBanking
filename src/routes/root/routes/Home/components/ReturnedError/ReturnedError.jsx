import React from 'react'

export const ReturnedError = ({ returnedError }) => (
  <div
    className="returned-error-text"
    style={returnedError === 'none' ? { visibility: 'hidden' } : {}}>
    {returnedError}
  </div>
)

export default ReturnedError
