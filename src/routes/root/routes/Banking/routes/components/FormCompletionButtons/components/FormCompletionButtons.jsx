import React from 'react';
import localizationText from './localizationText';

export const FormCompletionButtons = ({ shouldProcess, language, linkTo, clearForm, linkToApprovalForm }) => (
  <div className="form-group form-completion-buttons">
    <button
      type="button"
      className="common-button--gray btn form-completion-buttons__clear-form-button"
      onClick={() => clearForm()}>
      {localizationText[language].clear}
    </button>
    <button
      type="button"
      className="common-button--blue btn form-completion-buttons__continue-button"
      disabled={!shouldProcess}
      onClick={() => linkTo(linkToApprovalForm)}>
      {localizationText[language].continue}
    </button>
  </div>
)

export default FormCompletionButtons
