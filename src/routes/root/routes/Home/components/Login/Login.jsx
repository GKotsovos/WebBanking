import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'
require('bootstrap-validator');
import './Login.css'

class Login extends Component {
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
    const { returnedError, changePanel } = this.props;
    return (
      <div id="loginPanel" className="panel panel-default">
        <div id="loginHead" className="panel-heading">
          <h3 className="panel-title titles verticalCenterLogin">
            <FontAwesome id="lockIcon" name="unlock-alt" />
            <span id="panelTitle">Είσοδος Χρήστη</span>
          </h3>
        </div>
        <div id="loginPanelBody" className="panel-body">
          <form id="loginForm" data-toggle="validator" onSubmit={this.validateForm}>
            <div className="form-group">
              <input
                type="text"
                id="userId"
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
                id="password"
                className="form-control formControls"
                placeholder="Κωδικός"
                ref={ node => this.password = node }
                data-error="Ο κωδικός είναι υποχρεωτικός"
                required
              />
              <div className="help-block with-errors"></div>
            </div>
            <button
              type="submit"
              id="loginButton"
              className="btn btn-default buttons">
              Είσοδος
            </button>
          </form>
          <p id="forgotP" onClick={() => changePanel('FOTGOT_PASSWORD')}>
            <FontAwesome name="question-circle" /> Ξεχάσατε το Όνομα Χρήστη / Κωδικό;
          </p>
          <div
            id="returnedError"
            style={
              returnedError == 'none' ? { visibility: 'hidden' } : {}
            }>{returnedError}
          </div>
        </div>
        <ul className="list-group">
          <li id="newUser" className="list-group-item">
            <h3 id="newUserTitle" className="panel-title titles verticalCenterLogin">
              <FontAwesome id="userIcon" name="user" />
              <span>Νέος Χρήστης</span>
            </h3>
            <button
              onClick={() => changePanel('NEW_APPLICATION')}
              id="newUserButton"
              className="btn btn-default buttons"
              type="submit">
              Αίτηση Εγγραφής
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

Login.PropTypes = {
  authenticate: PropTypes.func.isRequired,
  changePanel: PropTypes.func.isRequired
};

export default Login
