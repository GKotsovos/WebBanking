import React from 'react';
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const TransactionFailure = ({ linkTo, errorMessage, language, linkToStart }) => (
  <div className="panel panel-default">
    <div className="panel-body text-center transaction-failure">
      <FontAwesome name="times" size="3x" className="transaction-failure__icon"/>
      <p className="transaction-failure__message">{errorMessage}</p>
      <button
        type="button"
        className="btn common-button--red transaction-failure__return-to-form"
        onClick={() => linkTo(linkToStart)}>
        {localizationText[language].goBack}
      </button>
    </div>
  </div>
)

export default TransactionFailure
