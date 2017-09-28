import React from 'react';
import LoginForm from '../LoginForm';
import ForgotPassword from '../ForgotPassword';
import ReturnedError from '../ReturnedError';
import './LoginPanelBody.css'

export const LoginPanelBody = ({ returnedError, changePanel, authenticate }) => (
  <div id="loginPanelBody" className="panel-body">
    <LoginForm authenticate={authenticate} />
    <ForgotPassword changePanel={changePanel} />
    <ReturnedError returnedError={returnedError} />
  </div>
)

export default LoginPanelBody
