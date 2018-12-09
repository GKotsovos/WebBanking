import React from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const ContactPanel = ({ language }) => (
  <div id="contactPanel" className="panel panel-default vertical-align">
    <div className="panel-body text-center">

      <div className="phonesGroup">
        <div className="vertical-align">
          <FontAwesome className="phoneIcon" name="phone" />
          <span className="phones">14587</span>
        </div>
        <div className="comments">({localizationText[language].noCharge})</div>
      </div>

      <div className="phonesGroup">
        <div className="vertical-align">
          <FontAwesome className="phoneIcon" name="phone" />
          <span className="phones">+302115456981</span>
        </div>
        <div className="comments">({localizationText[language].internationalCalls})</div>
      </div>

      <div className="vertical-align">
        <FontAwesome id="envelope" name="envelope" size="2x" />
         <span className="email">contact@agilebank.gr</span>
      </div>

    </div>
  </div>
)

export default ContactPanel
