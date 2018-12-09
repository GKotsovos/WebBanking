import React from 'react'
import FontAwesome from 'react-fontawesome'

export const Footer = () => (
  <nav className="footer navbar navbar-default navbar-fixed-bottom vertical-align">
    <div className="container-fluid">
      <span className="footer__copyright">
        Copyright <FontAwesome className="fa-fw" name="copyright" /> Agile Bank
      </span>
    </div>
  </nav>
)

export default Footer
