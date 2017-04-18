import React from 'react';
import FontAwesome from 'react-fontawesome'
import './TransactionSuccess.css';

export const TransactionSuccess = () => (
  <div className="panel panel-default" id="transactionSuccess">
    <div id="successPanelBody" className="panel-body text-center">
      <FontAwesome id="successIcon" name="check" size="3x"/>
      <p id="successText">Η πληρωμή σας ολοκληρώθηκε με επιτυχία</p>
      <button id="finishPayment" type="button" className="btn btn-default">Τέλος</button>
    </div>
  </div>
)

export default TransactionSuccess
