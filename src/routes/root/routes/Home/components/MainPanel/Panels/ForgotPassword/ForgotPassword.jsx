import React  from 'react'
import ClosePanelButton from 'routes/root/routes/Home/containers/ClosePanelButtonContainer';
import localizationText from './localizationText';

export const ForgotPassword = ({ language }) => (
  <div className="forgot-password-panel">
    <ClosePanelButton />
    <h3 className="forgot-password-panel__title">{localizationText[language].forgotPasswordTitle}</h3>
    <p>{localizationText[language].forgotPasswordText}</p>
    <ul>
      <li>14587</li>
      <li>{localizationText[language].internationalPhone}</li>
    </ul>
    <p>{localizationText[language].visitBank}</p>
  </div>
)

export default ForgotPassword
