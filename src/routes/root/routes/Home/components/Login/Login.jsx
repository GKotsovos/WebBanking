import React from 'react';
import LoginPanelHeader from '../../containers/LoginPanelHeaderContainer';
import LoginPanelBody from '../LoginPanelBody';
import NewApplicationPanel from '../../containers/NewApplicationPanelContainer';
import './Login.css'

export const Login = ({ authenticate, changePanel, returnedError  }) => (
  <div id="loginPanel" className="panel panel-default">
    <LoginPanelHeader />
    <LoginPanelBody
      authenticate={authenticate}
      changePanel={changePanel}
      returnedError={returnedError}
    />
    <NewApplicationPanel changePanel={changePanel} />
  </div>
)

export default Login
