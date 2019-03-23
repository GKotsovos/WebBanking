import React from 'react'
import localizationText from './localizationText';

export const CancelOrderModal = ({
  orderName,
  orderId,
  language,
  cancelOrder
}) => (
  <div
    id={`cancelOrderModal-${orderId}`}
    className="modal fade"
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
          {localizationText[language].cancelOrderText}<strong>«{orderName}»</strong>;
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="common-button--red modal__cancel-button btn"
            data-dismiss="modal">
            {localizationText[language].cancel}
          </button>
          <button
            type="button"
            className="common-button--blue btn"
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
