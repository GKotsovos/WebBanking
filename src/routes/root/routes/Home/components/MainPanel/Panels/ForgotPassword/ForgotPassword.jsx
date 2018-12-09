import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const ForgotPassword = ({ language, changePanel }) => (
  <div id="forgotPassword" className="">
    <FontAwesome className="closePanel" name="window-close-o" onClick={() => changePanel('NEWS')} />
    <h3 id="forgotTitle">{localizationText[language].forgotPasswordTitle}</h3>
    <p>{localizationText[language].forgotPasswordText}</p>
    <ul>
      <li>14587</li>
      <li>{localizationText[language].internationalPhone}</li>
    </ul>
    <p>{localizationText[language].visitBank}</p>
  </div>
)

ForgotPassword.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default ForgotPassword
