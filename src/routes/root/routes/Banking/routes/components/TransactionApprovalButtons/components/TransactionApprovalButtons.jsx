import React from 'react';
import './TransactionApprovalButtons.css';

export const TransactionApprovalButtons = ({ linkTo, linkToPreviousForm, completeTransaction, linkToTransactionResult }) => (
  <div id="formApprovalButtons" className="form-group">
    <button id="previousForm" type="button" className="btn btn-default"
      onClick={() => linkTo(linkToPreviousForm)}>
      Επιστροφή
    </button>
    <button id="submitTransaction" type="button" className="btn btn-default"
      onClick={() => completeTransaction()}>
      Επιβεβαίωση
    </button>
  </div>
)

export default TransactionApprovalButtons
