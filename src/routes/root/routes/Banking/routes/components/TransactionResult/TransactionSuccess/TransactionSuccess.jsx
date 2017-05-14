import React from 'react';
import FontAwesome from 'react-fontawesome'
import './TransactionSuccess.css';

export const TransactionSuccess = () => (
  <div className="panel panel-default" id="transactionSuccess">
    <div id="transactionSuccessPanelBody" className="panel-body text-center">
      <FontAwesome id="transactionSuccessIcon" name="check" size="3x"/>
      <p id="transactionSuccessText">Η πληρωμή σας ολοκληρώθηκε με επιτυχία</p>
      <button id="finishTransaction" type="button" className="btn btn-default">Τέλος</button>
    </div>
  </div>
)

export default TransactionSuccess
