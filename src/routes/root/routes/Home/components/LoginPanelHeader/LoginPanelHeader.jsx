import React from 'react'
import FontAwesome from 'react-fontawesome'
import './LoginPanelHeader.css'

export const LoginPanelHeader = () => (
  <div id="loginHead" className="panel-heading">
    <h3 className="panel-title titles verticalCenterLogin">
      <FontAwesome id="lockIcon" name="unlock-alt" />
      <span>Είσοδος Χρήστη</span>
    </h3>
  </div>
)

export default LoginPanelHeader
