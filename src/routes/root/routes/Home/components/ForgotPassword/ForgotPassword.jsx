import React from 'react'
import FontAwesome from 'react-fontawesome'
import './ForgotPassword.css'

export const ForgotPassword = ({ changePanel }) => (
  <p
    id="forgotP"
    onClick={() => changePanel('FOTGOT_PASSWORD')}>
    <FontAwesome name="question-circle" />
    Ξεχάσατε το Όνομα Χρήστη / Κωδικό;
  </p>
)

export default ForgotPassword
