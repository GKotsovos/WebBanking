import React from 'react';
import ExistingTransferOrder from '../ExistingTransferOrder';
import _ from 'underscore';
import './ExistingTransferOrdersLayout.css';

export const ExistingTransferOrdersLayout = ({ transferOrders, cancelTransferOrder }) => (
  <div>
    {
      _.map(transferOrders, (transferOrder) =>
        <ExistingTransferOrder
          key={transferOrder.id}
          transferOrder={transferOrder}
          cancelTransferOrder={cancelTransferOrder}
        />)
    }
  </div>
)

export default ExistingTransferOrdersLayout
