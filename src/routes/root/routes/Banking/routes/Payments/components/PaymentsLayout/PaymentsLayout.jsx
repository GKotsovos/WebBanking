import React, { Component } from 'react';

class PaymentsLayout extends Component {
  componentWillMount() {
    setTimeout(() => $('.selectpicker').selectpicker('val', ['']), 350);
    this.props.initPaymentTransactionForm();
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane payments-container" id="payments">
      {this.props.children}
    </div>
    )
  }
}

export default PaymentsLayout
