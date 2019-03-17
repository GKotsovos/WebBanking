import React from 'react'
import FontAwesome from 'react-fontawesome'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export const Navbar = ({
  customer,
  timeLeftToLogOut,
  language,
  setLanguage,
  logOut
}) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="btn-sample navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand">
          <span className="navbar-brand__text" aria-hidden="true">Agile Bank</span>
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-items nav navbar-nav navbar-right">
          {
            isEmpty(customer) ? [
              <li className={`${language === 'greek' ? 'active' : ''}`}>
                <a
                  className="navbar-button"
                  onClick={() => {
                    setLanguage('greek');
                    $('.collapse').collapse('hide');
                  }}>
                  GR
                </a>
              </li>,
              <li className={`${language === 'english' ? 'active' : ''}`}>
                <a
                  className="navbar-button"
                  onClick={() => {
                    setLanguage('english');
                    $('.collapse').collapse('hide')
                  }}>
                  EN
                </a>s
              </li>
            ] : [
              <li>
                <a className="navbar-button">
                  <FontAwesome className="navbar-items__user-icon" name="user-circle"/>{`${customer.firstName} ${customer.lastName}`}
                </a>
              </li>,
              <li onClick={() => logOut()}>
                <a className="navbar-button navbar-button__logout">
                  <FontAwesome className="navbar-items__logout-icon" name="sign-out"/>{localizationText[language].signOut}
                </a>
              </li>,
              <li>
                <a className="navbar-items__counter">{localizationText[language].timeLeft}<br/>{timeLeftToLogOut}</a>
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
