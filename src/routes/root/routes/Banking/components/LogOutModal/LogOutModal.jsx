import React, { Component } from 'react'

class LogOutModal extends Component {
  componentDidUpdate() {
    const { shouldShow } = this.props;
    if (shouldShow) {
      $('#logOutModal').modal('show')
    }
  }

  render() {
    const { logOut } = this.props;
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
            <span className="modal-title">Ενημέρωση</span>
          </div>
          <div className="modal-body">
            Έχετε αποσυνδεθεί. Για λόγους ασφαλείας το σύστημα σας αποσυνδέει μετά από 10 λεπτά.
          </div>
          <div className="modal-footer">
            <button
              id="accept"
              type="button"
              className="btn btn-default accept"
              onClick={() => {
                $('#logOutModal').modal('hide');
                logOut();
              }}>
              Αποδοχή
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LogOutModal
