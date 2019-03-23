import React from 'react';
import ExistingTransferOrder from '../ExistingTransferOrder';

export const ExistingTransferOrdersLayout = ({ transferOrders, language, cancelTransferOrder }) => (
  <div>
    {
      transferOrders && transferOrders.map(transferOrder =>
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
