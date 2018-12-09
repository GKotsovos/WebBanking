import React from 'react';
import LoginForm from '../../containers/LoginFormContainer';
import ForgotPassword from '../../containers/ForgotPasswordContainer';
import ReturnedError from '../ReturnedError';

export const LoginPanelBody = ({ returnedError, changePanel, authenticate }) => (
  <div id="loginPanelBody" className="panel-body">
    <LoginForm authenticate={authenticate} />
    <ForgotPassword changePanel={changePanel} />
    <ReturnedError returnedError={returnedError} />
  </div>
)

export default LoginPanelBody
