import React from 'react';
import { browserHistory } from 'react-router'
import './TransactionApprovalButtons.css';

export const TransactionApprovalButtons = ({ completeTransaction }) => (
  <div id="formApprovalButtons" className="form-group">
    <button
      id="previousForm"
      type="button"
      className="btn btn-default"
      onClick={() => browserHistory.goBack()}>
      Επιστροφή
    </button>
    <button
      id="submitTransaction"
      type="button"
      className="btn btn-default"
      onClick={() => completeTransaction()}>
      Επιβεβαίωση
    </button>
  </div>
)

export default TransactionApprovalButtons
