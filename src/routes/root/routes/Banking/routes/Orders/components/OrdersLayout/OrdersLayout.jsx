import React, { Component, PropTypes }  from 'react';
import _ from 'underscore';
import OrderSelect from '../../containers/OrderSelectContainer'
import './OrdersLayout.css';

class OrdersLayout extends Component {
  componentWillMount(){
    const {
      orderState,
      initializeState,
      getTransferOrders,
      getPaymentOrders,
    } = this.props;
    if (_.isEmpty(orderState)) {
      getTransferOrders();
      getPaymentOrders();
    }
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane ordersContainer" id="orders">
        <OrderSelect />
        {this.props.children}
      </div>
    )
  }
}

export default OrdersLayout
