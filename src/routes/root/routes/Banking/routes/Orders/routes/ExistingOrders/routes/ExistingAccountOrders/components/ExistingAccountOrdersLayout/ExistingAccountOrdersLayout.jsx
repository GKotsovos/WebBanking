import React from 'react';
import ExistingAccountOrder from '../ExistingAccountOrder';
import _ from 'underscore';
import './ExistingAccountOrdersLayout.css';

export const ExistingAccountOrdersLayout = ({ accountOrders, cancelOrder }) => (
  <div className="panel panel-default">
    {
      _.map(accountOrders, (accountOrder) =>
        <ExistingAccountOrder
          key={accountOrder.id}
          accountOrder={accountOrder}
          cancelOrder={cancelOrder}
        />)
    }
  </div>
)

export default ExistingAccountOrdersLayout
