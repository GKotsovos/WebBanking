import React from 'react';
import ExistingPaymentOrder from '../ExistingPaymentOrder';

export const ExistingPaymentOrdersLayout = ({ paymentOrders, language, cancelPaymentOrder }) => (
  <div>
    {
      paymentOrders && paymentOrders.map(paymentOrder =>
        <ExistingPaymentOrder
          key={paymentOrder.id}
          paymentOrder={paymentOrder}
          language={language}
          cancelPaymentOrder={cancelPaymentOrder}
        />)
    }
  </div>
)

export default ExistingPaymentOrdersLayout
