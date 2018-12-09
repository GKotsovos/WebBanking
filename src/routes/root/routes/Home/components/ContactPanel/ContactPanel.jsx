import React from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const ContactPanel = ({ language }) => (
  <div className="contact-panel panel panel-default vertical-align">
    <div className="panel-body text-center">

      <div className="contact-panel-phone">
        <div className="vertical-align">
          <FontAwesome className="contact-panel-phone__icon" name="phone" />
          <span className="contact-panel-phone__number">14587</span>
        </div>
        <div className="contact-panel-phone__comment">({localizationText[language].noCharge})</div>
      </div>

      <div className="contact-panel-phone">
        <div className="vertical-align">
          <FontAwesome className="contact-panel-phone__icon" name="phone" />
          <span className="contact-panel-phone__number">+302115456981</span>
        </div>
        <div className="contact-panel-phone__comment">({localizationText[language].internationalCalls})</div>
      </div>

      <div className="vertical-align">
        <FontAwesome className="contact-panel__envelop-icon" name="envelope" size="2x" />
        <a className="contact-panel__email" href="javascript:void(0)">contact@agilebank.gr</a>
      </div>

    </div>
  </div>
)

export default ContactPanel
