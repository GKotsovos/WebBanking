import React from 'react'
import FontAwesome from 'react-fontawesome'
import _ from 'underscore';
import './Navbar.css'

export const Navbar = ({ customer, logOut }) => (
  <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
    <div className="container">

      <div className="navbar-header">
        <button type="button" className="btn-sample navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="javascript:;">
          <span id="brand" aria-hidden="true">Agile Bank</span>
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          {
            _.isEmpty(customer) ? [
              <li>
                <a id="changeLang" href="javascript:;">EN</a>
              </li>,
              <li id="aa" className="active">
                <a id="changeLang" href="javascript:;">GR</a>
              </li>
            ] : [
              <li>
                <a id="changeLang" href="javascript:;">
                  <FontAwesome className="user" name="user-circle"/>{`${customer.firstName} ${customer.lastName}`}
                </a>
              </li>,
              <li id="aa" className="active" onClick={() => logOut()}>
                <a id="changeLang" href="javascript:;">
                  <FontAwesome className="logoff" name="sign-out"/>Αποσύνδεση
                </a>
              </li>
            ]
          }
        </ul>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {

}

export default Navbar
