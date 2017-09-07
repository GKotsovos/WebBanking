import React from 'react';
import NewOrderSelect from '../NewOrderSelect'
import './OrdersLayout.css';

export const OrdersLayout = ({
  children,
  orderType,
  setOrderType,
  setNewOrder
}) => (
  <div role="tabpanel" className="tab-pane" id="orders">
    <NewOrderSelect
      orderType={orderType}
      setOrderType={setOrderType}
      setNewOrder={setNewOrder}
    />
    {children}
  </div>
)

export default OrdersLayout
