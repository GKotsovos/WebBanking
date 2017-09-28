import React, { Component } from 'react';
require('bootstrap-validator');
import './LoginForm.css'

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
    return (
      <form
        id="loginForm"
        data-toggle="validator"
        onSubmit={this.validateForm}>
        <div className="form-group">
          <input
            type="text"
            className="form-control formControls"
            placeholder="ID Χρήστη"
            ref={ node => this.userId = node }
            data-error="Το ID χρήστη είναι υποχρεωτικό"
            required
          />
          <div className="help-block with-errors"></div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control formControls"
            placeholder="Κωδικός"
            ref={ node => this.password = node }
            data-error="Ο κωδικός είναι υποχρεωτικός"
            required
          />
          <div className="help-block with-errors"></div>
        </div>
        <button
          id="loginButton"
          type="submit"
          className="btn btn-default buttons">
          Είσοδος
        </button>
      </form>
    )
  }
}

export default LoginForm
