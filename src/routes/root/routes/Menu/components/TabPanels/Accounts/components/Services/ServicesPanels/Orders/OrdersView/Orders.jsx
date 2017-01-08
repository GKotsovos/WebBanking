import React from 'react';
import NewOrderSelect from '../NewOrderSelect'
import NewOrder from '../NewOrder'
// import Order from '../Order'
import './Orders.css';

export const Orders = () => (
  <div role="tabpanel" className="tab-pane active" id="orders">
    <NewOrderSelect />

    <NewOrder />

    {/*   or        */}

    {/* <Order />
    <Order />
    <Order /> */}
  </div>
)

export default Orders
