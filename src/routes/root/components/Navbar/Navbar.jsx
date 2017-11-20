import React from 'react'
import FontAwesome from 'react-fontawesome'
import _ from 'underscore';
import localizationText from './localizationText';
import './Navbar.css'

export const Navbar = ({
  customer,
  timeLeftToLogOut,
  language,
  setLanguage,
  logOut
}) => (
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
              <li className={`${language === 'greek' ? 'active' : ''}`}>
                <a
                  id="greekLanguage"
                  href="javascript:;"
                  onClick={() => {
                    setLanguage('greek');
                    $('.collapse').collapse('hide');
                  }}>
                  GR
                </a>
              </li>,
                <li className={`${language === 'english' ? 'active' : ''}`}>
                <a
                  id="englishLanguage"
                  href="javascript:;"
                  onClick={() => {
                    setLanguage('english');
                    $('.collapse').collapse('hide')
                  }}>
                  EN
                </a>
              </li>
            ] : [
              <li>
                <a id="customerName" href="javascript:;">
                  <FontAwesome className="user" name="user-circle"/>{`${customer.firstName} ${customer.lastName}`}
                </a>
              </li>,
              <li onClick={() => logOut()}>
                <a id="logOut" href="javascript:;">
                  <FontAwesome className="logoff" name="sign-out"/>{localizationText[language].signOut}
                </a>
              </li>,
              <li>
                <a id="counter" >{localizationText[language].timeLeft}<br/>{timeLeftToLogOut}</a>
              </li>,
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
