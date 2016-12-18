import React from 'react'
import './Footer.css'
import FontAwesome from 'react-fontawesome'

export const Footer = () => (
  <nav id="footer" className="navbar navbar-default navbar-fixed-bottom">
    <div className="container-fluid">
      <div className="verticalCenter">
        <span id="copyright">
          Copyright <FontAwesome className="fa-fw" name="copyright" /> Aegean Bank
        </span>
      </div>

    </div>
  </nav>
)

Footer.propTypes = {

}

export default Footer
