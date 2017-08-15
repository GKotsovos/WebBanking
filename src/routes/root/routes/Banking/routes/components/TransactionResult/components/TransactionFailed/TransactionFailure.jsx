import React from 'react';
import FontAwesome from 'react-fontawesome'
import './TransactionFailure.css';

export const TransactionFailure = ({ linkTo, errorMessage, linkToStart }) => (
  <div className="panel panel-default" id="transactionFailure">
    <div id="failPanelBody" className="panel-body text-center">
      <FontAwesome id="failIcon" name="times" size="3x"/>
      <p id="failText">{errorMessage}</p>
      <button
        id="returnToForm"
        type="button"
        className="btn btn-default"
        onClick={() => linkTo(linkToStart)}>Επιστροφή</button>
    </div>
  </div>
)

export default TransactionFailure
