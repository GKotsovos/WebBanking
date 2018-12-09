import React from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText'

export const ForgotPassword = ({ language, changePanel }) => (
  <p
    className="forgot-password__text"
    onClick={() => changePanel('FORGOT_PASSWORD')}>
    <FontAwesome name="question-circle" />
    {localizationText[language].forgotPassword}
  </p>
)

export default ForgotPassword
