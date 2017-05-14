import React from 'react';
import AccountOrder from '../AccountOrder'
import OrganizationOrder from '../OrganizationOrder'
import './Order.css';

export const Order = () => (
  <div className="orderContainer">
    <AccountOrder />
    {/* <OrganizationOrder /> */}
  </div>
)

export default Order
