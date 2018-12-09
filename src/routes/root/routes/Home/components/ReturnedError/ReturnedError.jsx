import React from 'react'
import FontAwesome from 'react-fontawesome'

export const ReturnedError = ({ returnedError }) => (
  <div
    id="returnedError"
    style={returnedError == 'none' ? { visibility: 'hidden' } : {}}>
    {returnedError}
  </div>
)

export default ReturnedError
