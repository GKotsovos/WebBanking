import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Contact.css'

export const Contact = () => (
  <div id="contactPanel" className="panel panel-default">
    <div className="panel-body">
      <p id="localPhone">
        <FontAwesome name="phone" size="2x" />
        14587
      </p>
      <p>(Χωρίς Χρέωση)</p>
      <p id="globalPhone">
        <FontAwesome name="phone" size="2x" />
        +302115456981
      </p>
      <p>(Διεθνείς κλήσεις)</p>
      <p>
        <FontAwesome name="envelope" size="2x" />
         bankemail@bank.gr
      </p>
    </div>
  </div>
)

export default Contact
