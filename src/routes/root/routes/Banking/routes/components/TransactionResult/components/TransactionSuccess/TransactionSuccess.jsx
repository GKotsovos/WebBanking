import React from 'react';
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const TransactionSuccess = ({ linkTo, linkToStart, language, clearTransactionForm }) => (
  <div className="panel panel-default" id="transactionSuccess">
    <div id="transactionSuccessPanelBody" className="panel-body text-center">
      <FontAwesome id="transactionSuccessIcon" name="check" size="3x"/>
      <p id="transactionSuccessText">{localizationText[language].transactionSuccess}</p>
      <button
        id="finishTransaction"
        type="button"
        className="btn btn-default"
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
