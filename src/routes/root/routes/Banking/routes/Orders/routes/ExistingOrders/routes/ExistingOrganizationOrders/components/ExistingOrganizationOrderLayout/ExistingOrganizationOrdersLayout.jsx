import React from 'react';
import ExistingOrganizationOrder from '../ExistingOrganizationOrder';
import _ from 'underscore';
import './ExistingOrganizationOrdersLayout.css';

export const ExistingOrganizationOrdersLayout = ({ organizationOrders, cancelOrder }) => (
  <div className="panel panel-default">
    {
      _.map(organizationOrders, (organizationOrder) =>
        <ExistingOrganizationOrder
          key={organizationOrder.id}
          organizationOrder={organizationOrder}
          cancelOrder={cancelOrder}
        />)
    }
  </div>
)

export default ExistingOrganizationOrdersLayout
