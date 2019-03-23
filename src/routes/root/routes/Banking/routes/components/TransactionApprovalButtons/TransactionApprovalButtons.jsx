import React from 'react';
import { browserHistory } from 'react-router'
import localizationText from './localizationText';

export const TransactionApprovalButtons = ({ language, completeTransaction }) => (
  <div className="form-group transaction-approval-buttons">
    <button
      type="button"
      className="btn common-button--red transaction-approval-buttons__go-back-button"
      onClick={() => browserHistory.goBack()}>
      {localizationText[language].goBack}
    </button>
    <button
      type="button"
      className="common-button--blue btn transaction-approval-buttons__submit-button"
      onClick={() => completeTransaction()}>
      {localizationText[language].submit}
    </button>
  </div>
)

export default TransactionApprovalButtons
