import React, { Component } from 'react';
require('bootstrap-validator');
import localizationText from './localicationText'

class LoginForm extends Component {
  validateForm = () => {
    const { authenticate } = this.props;
    $('#loginForm').validator().on('submit', (e) => {
      if (!e.isDefaultPrevented()) {
        e.preventDefault();
        authenticate(this.userId.value, this.password.value)
      }
    })
  }

  render () {
    const { language } = this.props;
    return (
      <form
        id="loginForm"
        data-toggle="validator"
        onSubmit={this.validateForm}>
        <div className="form-group">
          <input
            type="text"
            className="form-control formControls"
            placeholder={localizationText[language].userIdPlaceholder}
            ref={ node => this.userId = node }
            data-error={localizationText[language].mandatoryUserId}
            required
          />
          <div className="help-block with-errors"></div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control formControls"
            placeholder={localizationText[language].passwordPlaceholder}
            ref={ node => this.password = node }
            data-error={localizationText[language].mandatoryPassword}
            required
          />
          <div className="help-block with-errors"></div>
        </div>
        <button
          id="loginButton"
          type="submit"
          className="btn btn-default buttons">
          {localizationText[language].logIn}
        </button>
      </form>
    )
  }
}

export default LoginForm
