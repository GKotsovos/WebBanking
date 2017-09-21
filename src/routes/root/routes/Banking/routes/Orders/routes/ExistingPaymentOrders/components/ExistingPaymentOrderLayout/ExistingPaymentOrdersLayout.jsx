import React from 'react';
import ExistingPaymentOrder from '../ExistingPaymentOrder';
import _ from 'underscore';
import './ExistingPaymentOrdersLayout.css';

export const ExistingPaymentOrdersLayout = ({ paymentOrders, cancelPaymentOrder }) => (
  <div>
    {
      _.map(paymentOrders, (paymentOrder) =>
        <ExistingPaymentOrder
          key={paymentOrder.id}
          paymentOrder={paymentOrder}
          cancelPaymentOrder={cancelPaymentOrder}
        />)
    }
  </div>
)

export default ExistingPaymentOrdersLayout
