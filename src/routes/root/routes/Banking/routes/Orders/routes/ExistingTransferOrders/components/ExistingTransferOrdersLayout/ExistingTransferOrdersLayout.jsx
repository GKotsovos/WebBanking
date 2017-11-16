import React from 'react';
import ExistingTransferOrder from '../ExistingTransferOrder';
import _ from 'underscore';
import './ExistingTransferOrdersLayout.css';

export const ExistingTransferOrdersLayout = ({ transferOrders, language, cancelTransferOrder }) => (
  <div>
    {
      _.map(transferOrders, (transferOrder) =>
        <ExistingTransferOrder
          key={transferOrder.id}
          transferOrder={transferOrder}
          language={language}
          cancelTransferOrder={cancelTransferOrder}
        />)
    }
  </div>
)

export default ExistingTransferOrdersLayout
