import React from 'react'
import _ from 'underscore';
import './CancelOrderModal.css';

export const CancelOrderModal = ({
  orderName,
  orderId,
  cancelOrder
}) => (
  <div
  id="cancelOrderModal"
    className="modal fade"
    aria-labelledby="myModalLabel" 
    data-backdrop="static"
    data-keyboard="false">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">Επιβεβαίωση</span>
        </div>
        <div className="modal-body">
          Είστε βέβαιος ότι θέλετε να ακυρώσετε την πάγια εντολή <span className="strong">«{orderName}»</span>;
        </div>
        <div className="modal-footer">
          <button
            id="cancel"
            type="button"
            className="btn btn-default"
            data-dismiss="modal">
            Ακύρωση
          </button>
          <button
            id="accept"
            type="button"
            className="btn btn-default accept"
            onClick={() => {
              cancelOrder(orderId);
              $('#cancelOrderModal').modal('hide');
            }}>
            Αποδοχή
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default CancelOrderModal
