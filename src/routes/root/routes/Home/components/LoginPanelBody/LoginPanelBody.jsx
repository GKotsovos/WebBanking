import React from 'react';
import LoginForm from '../../containers/LoginFormContainer';
import ForgotPassword from '../../containers/ForgotPasswordContainer';
import ReturnedError from '../ReturnedError';

export const LoginPanelBody = ({ returnedError, changePanel, authenticate }) => (
  <div className="login-panel-body panel-body">
    <LoginForm authenticate={authenticate} />
    <ForgotPassword changePanel={changePanel} />
    <ReturnedError returnedError={returnedError} />
  </div>
)

export default LoginPanelBody
