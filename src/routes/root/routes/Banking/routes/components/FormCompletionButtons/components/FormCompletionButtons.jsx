import React from 'react';
import localizationText from './localizationText';
import './FormCompletionButtons.css';

export const FormCompletionButtons = ({ shouldProcess, language, linkTo, clearForm, linkToApprovalForm }) => (
  <div id="formCompletionButtons" className="form-group">
    <button
      id="clearForm"
      type="button"
      className="btn btn-default"
      onClick={() => clearForm()}>
      {localizationText[language].clear}
    </button>
    <button
      id="linkToApproval"
      type="button"
      className="btn btn-default"
      disabled={!shouldProcess}
      onClick={() => linkTo(linkToApprovalForm)}>
      {localizationText[language].continue}
    </button>
  </div>
)

export default FormCompletionButtons
