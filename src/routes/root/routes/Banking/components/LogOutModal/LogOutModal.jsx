import React, { Component } from 'react'
import localizationText from './localizationText';

class LogOutModal extends Component {
  componentDidUpdate() {
    const { shouldShow } = this.props;
    if (shouldShow) {
      $('#logOutModal').modal('show')
    }
  }

  render() {
    const { language, logOut } = this.props;
    return (
      <div
        id="logOutModal"
        className="modal fade"
        aria-labelledby="myModalLabel"
        data-backdrop="static"
        data-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">{localizationText[language].autoSignOutTitle}</span>
            </div>
            <div className="modal-body">
              {localizationText[language].autoSignOutText}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="common-button--blue btn"
                onClick={() => {
                  $('#logOutModal').modal('hide');
                  logOut();
                }}>
                {localizationText[language].acceptText}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LogOutModal
