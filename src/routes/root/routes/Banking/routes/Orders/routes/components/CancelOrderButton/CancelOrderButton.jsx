import React from 'react';
import CancelOrderModal from '../CancelOrderModal';
import _ from 'underscore';
import './CancelOrderButton.css';

export const CancelOrderButton = ({
  orderName,
  orderId,
  cancelOrder
}) => (
  <div>
    <button
      id="orderCancel"
      className="btn btn-default"
      data-toggle="modal"
      data-target="#cancelOrderModal">
      Διαγραφή
    </button>
    <CancelOrderModal
      orderName={orderName}
      orderId={orderId}
      cancelOrder={cancelOrder}
    />
  </div>
)

export default CancelOrderButton
