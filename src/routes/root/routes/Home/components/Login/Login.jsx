import React from 'react';
import LoginPanelHeader from '../LoginPanelHeader';
import LoginPanelBody from '../LoginPanelBody';
import NewApplicationPanel from '../NewApplicationPanel';
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
