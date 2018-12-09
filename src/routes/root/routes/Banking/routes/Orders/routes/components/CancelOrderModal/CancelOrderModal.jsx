import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export const CancelOrderModal = ({
  orderName,
  orderId,
  language,
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
          <span className="modal-title">
            {localizationText[language].confrimation}
          </span>
        </div>
        <div className="modal-body">
          {localizationText[language].cancelOrderText}<span className="strong">«{orderName}»</span>;
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="modal__cancel-button btn btn-default"
            data-dismiss="modal">
            {localizationText[language].cancel}
          </button>
          <button
            type="button"
            className="modal__accept-button btn btn-default"
            onClick={() => {
              cancelOrder(orderId);
              $('#cancelOrderModal').modal('hide');
            }}>
            {localizationText[language].accept}
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default CancelOrderModal
