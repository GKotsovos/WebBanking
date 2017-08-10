import React from 'react';
import FontAwesome from 'react-fontawesome'
import './TransactionSuccess.css';

export const TransactionSuccess = ({ linkTo, linkToStart, clearTransactionForm }) => (
  <div className="panel panel-default" id="transactionSuccess">
    <div id="transactionSuccessPanelBody" className="panel-body text-center">
      <FontAwesome id="transactionSuccessIcon" name="check" size="3x"/>
      <p id="transactionSuccessText">Η συναλλαγή σας ολοκληρώθηκε με επιτυχία</p>
      <button
        id="finishTransaction"
        type="button"
        className="btn btn-default"
        onClick={() => {
          clearTransactionForm();
          linkTo(linkToStart);
        }}>Τέλος
      </button>
    </div>
  </div>
)

export default TransactionSuccess
