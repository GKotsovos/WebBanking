import React from 'react';
import { browserHistory } from 'react-router'
import localizationText from './localizationText';

export const TransactionApprovalButtons = ({ language, completeTransaction }) => (
  <div id="formApprovalButtons" className="form-group">
    <button
      id="previousForm"
      type="button"
      className="btn btn-default"
      onClick={() => browserHistory.goBack()}>
      {localizationText[language].goBack}
    </button>
    <button
      id="submitTransaction"
      type="button"
      className="btn btn-default"
      onClick={() => completeTransaction()}>
      {localizationText[language].submit}
    </button>
  </div>
)

export default TransactionApprovalButtons
