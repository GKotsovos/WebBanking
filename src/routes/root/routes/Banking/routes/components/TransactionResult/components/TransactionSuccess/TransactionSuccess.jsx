import React from 'react';
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const TransactionSuccess = ({ linkTo, linkToStart, language, clearTransactionForm }) => (
  <div className="panel panel-default transaction-success-container">
    <div className="panel-body text-center transaction-success">
      <FontAwesome name="check" size="3x" className="transaction-success__icon"/>
      <p className="transaction-success__message">{localizationText[language].transactionSuccess}</p>
      <button
        type="button"
        className="btn btn-default transaction-success__complete"
        onClick={() => {
          clearTransactionForm();
          linkTo(linkToStart);
        }}>
        {localizationText[language].finish}
      </button>
    </div>
  </div>
)

export default TransactionSuccess
