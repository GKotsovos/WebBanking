import React from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText'

export const LoginPanelHeader = ({ language }) => (
  <div id="loginHead" className="panel-heading">
    <h3 className="panel-title titles vertical-alignLogin">
      <FontAwesome id="lockIcon" name="unlock-alt" />
      <span>{localizationText[language].userLogIn}</span>
    </h3>
  </div>
)

export default LoginPanelHeader
