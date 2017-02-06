import React from 'react';
import FontAwesome from 'react-fontawesome'
import './PaymentFailed.css';

export const PaymentFailed = () => (
  <div className="panel panel-default" id="PaymentFailed">
    <div id="failPanelBody" className="panel-body text-center">
      <FontAwesome id="failIcon" name="times" size="3x"/>
      <p id="failText">Η πληρωμή σας δεν ολοκληρώθηκε με επιτυχία</p>
      <button id="returnToForm" type="button" className="btn btn-default">Επιστροφή</button>
    </div>
  </div>
)

export default PaymentFailed
