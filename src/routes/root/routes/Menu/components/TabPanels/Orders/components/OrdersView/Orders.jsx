import React from 'react';
import NewOrderSelect from '../NewOrderSelect'
import NewOrder from '../NewOrder'
import Order from '../Order'
import OrderApproval from '../OrderApproval'
import OrderResult from '../OrderResult'
import './Orders.css';

export const Orders = () => (
  <div role="tabpanel" className="tab-pane active" id="orders">
    <NewOrderSelect />

    {/* <NewOrder /> */}

    {/* <OrderApproval /> */}

    <Order />

    {/* <OrderResult /> */}
  </div>
)

export default Orders
