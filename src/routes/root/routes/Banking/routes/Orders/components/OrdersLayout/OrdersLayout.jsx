import React, { Component }  from 'react';
import { isEmpty } from 'underscore';
import OrderSelect from '../../containers/OrderSelectContainer'

class OrdersLayout extends Component {
  componentWillMount() {
    const {
      orderState,
      initializeOrderState,
      getTransferOrders,
      getPaymentOrders,
    } = this.props;
    if (isEmpty(orderState)) {
      initializeOrderState();
      getTransferOrders();
      getPaymentOrders();
    }
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane orders-container" id="orders">
        <OrderSelect />
        {this.props.children}
      </div>
    )
  }
}

export default OrdersLayout
