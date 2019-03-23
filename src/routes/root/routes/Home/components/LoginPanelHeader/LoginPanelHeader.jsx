import React from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText'

export const LoginPanelHeader = ({ language }) => (
  <div className="login-panel-header panel-heading">
    <h3 className="panel-title">
      <FontAwesome className="login-panel-header__icon" name="unlock-alt" />
      <span>{localizationText[language].userLogIn}</span>
    </h3>
  </div>
)

export default LoginPanelHeader
