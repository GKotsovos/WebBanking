import React from 'react'
import './Footer.css'
import FontAwesome from 'react-fontawesome'

export const Footer = () => (
  <nav id="footer" className="navbar navbar-default navbar-fixed-bottom verticalCenter">
    <div className="container-fluid ">
      <span id="copyright">
        Copyright <FontAwesome className="fa-fw" name="copyright" /> Aegean Bank
      </span>
    </div>
  </nav>
)

Footer.propTypes = {

}

export default Footer
