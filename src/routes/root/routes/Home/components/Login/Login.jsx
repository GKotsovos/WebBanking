import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Login.css'

export const Login = () => (
  <div className="panel panel-default">
    <div className="panel-heading ">
      <h3 className="panel-title verticalCenterLogin">
        <FontAwesome id="lockIcon" name="unlock-alt" />
        <span id="panelTitle">Είσοδος Χρήστη</span>
      </h3>
    </div>
    <div className="panel-body">
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="username" placeholder="Όνομα Χρήστη"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Κωδικός"/>
        </div>
        <button type="submit" id="loginButton" className="btn btn-default">Είσοδος</button>
      </form>
      <a href="#">
        <p id="forgotP">
          <FontAwesome name="question-circle" /> Ξεχάσατε το Όνομα Χρήστη / Κωδικό;
        </p>
      </a>
    </div>
    <ul className="list-group">
      <li id="newUser" className="list-group-item">
        <h3 id="newUserTitle" className="panel-title verticalCenterLogin">
          <FontAwesome id="userIcon" name="user" />
          <span>Νέος Χρήστης</span>
        </h3>
        <button className="btn btn-default" type="submit">Αίτηση Εγγραφής</button>
      </li>
    </ul>
  </div>
)

export default Login
