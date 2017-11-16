import React from 'react';
import CancelOrderModal from '../CancelOrderModal';
import _ from 'underscore';
import localizationText from './localizationText';
import './CancelOrderButton.css';

export const CancelOrderButton = ({
  orderName,
  orderId,
  language,
  cancelOrder
}) => (
  <div>
    <button
      id="orderCancel"
      className="btn btn-default"
      data-toggle="modal"
      data-target="#cancelOrderModal">
      {localizationText[language].delete}
    </button>
    <CancelOrderModal
      orderName={orderName}
      orderId={orderId}
      language={language}
      cancelOrder={cancelOrder}
    />
  </div>
)

export default CancelOrderButton
