import React from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText'

export const ForgotPassword = ({ language, changePanel }) => (
  <p
    id="forgotP"
    onClick={() => changePanel('FOTGOT_PASSWORD')}>
    <FontAwesome name="question-circle" />
    {localizationText[language].forgotPassword}
  </p>
)

export default ForgotPassword
