import React from 'react';
import NewOrderSelect from '../NewOrderSelect'
import Order from '../Order'
import './OrdersLayout.css';

export const OrdersLayout = () => (
  <div role="tabpanel" className="tab-pane" id="orders">
    <NewOrderSelect />
    <Order />
  </div>
)

export default OrdersLayout
