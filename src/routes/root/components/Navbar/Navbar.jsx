import React from 'react'
import './Navbar.css'

export const Navbar = () => (
  <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
    <div className="container">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
          <span id="brand" aria-hidden="true">Aegean Bank</span>
         </a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li ><a id="changeLang" href="#">English</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {

}

export default Navbar
