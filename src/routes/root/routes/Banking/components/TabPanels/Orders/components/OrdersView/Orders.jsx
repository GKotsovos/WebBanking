import React from 'react';
import NewOrderSelect from '../NewOrderSelect'
import NewOrder from '../NewOrder'
import Order from '../Order'
import OrderApproval from '../OrderApproval'
import OrderResult from '../OrderResult'
import './Orders.css';

export const Orders = () => (
  <div role="tabpanel" className="tab-pane" id="orders">
    <NewOrderSelect />

    <Order />

    <NewOrder />

    {/* <OrderApproval /> */}

    {/* <OrderResult /> */}
  </div>
)

export default Orders
