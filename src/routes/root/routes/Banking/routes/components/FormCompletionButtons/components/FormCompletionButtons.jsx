import React from 'react';
import './FormCompletionButtons.css';

export const FormCompletionButtons = ({ linkTo, clearForm, linkToApprovalForm }) => (
  <div id="formCompletionButtons" className="form-group">
    <button
      id="clearForm"
      type="button"
      className="btn btn-default"
      onClick={() => clearForm()}>
      Καθαρισμός
    </button>

    <button
      id="linkToApproval"
      type="button"
      className="btn btn-default"
      onClick={() => {
        linkTo(linkToApprovalForm);
      }}
    >
      Συνέχεια
    </button>
  </div>
)

export default FormCompletionButtons
