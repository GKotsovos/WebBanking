import React from 'react'
import FontAwesome from 'react-fontawesome'
import './ContactPanel.css'

export const ContactPanel = () => (
  <div id="contactPanel" className="panel panel-default verticalCenter">
    <div className="panel-body text-center">

      <div className="phonesGroup">
        <div className="verticalCenter">
          <FontAwesome className="phoneIcon" name="phone" />
          <span className="phones">14587</span>
        </div>
        <div className="comments">(Χωρίς Χρέωση)</div>
      </div>

      <div className="phonesGroup">
        <div className="verticalCenter">
          <FontAwesome className="phoneIcon" name="phone" />
          <span className="phones">+302115456981</span>
        </div>
        <div className="comments">(Διεθνείς κλήσεις)</div>
      </div>

      <div className="verticalCenter">
        <FontAwesome id="envelope" name="envelope" size="2x" />
         <span className="email">contact@agilebank.gr</span>
      </div>

    </div>
  </div>
)

export default ContactPanel
