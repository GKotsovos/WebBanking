import React from 'react'
import './Login.css'

export const Login = () => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">Είσοδος Χρήστη</h3>
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
      <a href="#"><p id="forgotP">Ξεχάσατε το Όνομα Χρήστη / Κωδικό;</p></a>
    </div>
    <ul className="list-group">
      <li id="newUser" className="list-group-item">
        <h3 id="newUserTitle" className="panel-title">Νέος Χρήστης</h3>
        <button className="btn btn-default" type="submit">Αίτηση Εγγραφής</button>
      </li>
    </ul>
  </div>
)

export default Login
