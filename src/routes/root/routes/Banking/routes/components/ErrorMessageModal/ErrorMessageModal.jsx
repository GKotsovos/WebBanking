import React, { Component } from 'react';
import localizationText from './localizationText';

class ErrorMessageModal extends Component {
  componentDidUpdate() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      $('#errorMessageModal').modal('show')
    }
  }

  render() {
    const { errorMessage, language, clearErrorMessage } = this.props;
    return (
      <div
        id="errorMessageModal"
        className="modal fade"
        data-backdrop="static"
        data-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">{localizationText[language].errorTitle}</span>
            </div>
            <div className="modal-body">{errorMessage}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="common-button--blue btn"
                onClick={() => {
                  $('#errorMessageModal').modal('hide');
                  clearErrorMessage();
                }}>
                {localizationText[language].accept}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorMessageModal
