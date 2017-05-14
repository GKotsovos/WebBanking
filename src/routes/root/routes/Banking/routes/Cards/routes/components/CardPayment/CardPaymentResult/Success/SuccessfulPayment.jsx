import React from 'react';
import FontAwesome from 'react-fontawesome'
import './SuccessfulPayment.css';

export const SuccessfulPayment = () => (
  <div className="panel panel-default" id="successfulPayment">
    <div id="successPanelBody" className="panel-body text-center">
      <FontAwesome id="successIcon" name="check" size="3x"/>
      <p id="successText">Η πληρωμή σας ολοκληρώθηκε με επιτυχία</p>
      <button id="finishPayment" type="button" className="btn btn-default">Τέλος</button>
    </div>
  </div>
)

export default SuccessfulPayment
