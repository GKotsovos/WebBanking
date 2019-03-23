import React from 'react';
import LoginPanelHeader from '../../containers/LoginPanelHeaderContainer';
import LoginPanelBody from '../LoginPanelBody';
import NewApplicationPanel from '../../containers/NewApplicationPanelContainer';

export const Login = ({ authenticate, changePanel, returnedError  }) => (
  <div className="login-panel panel panel-default">
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
