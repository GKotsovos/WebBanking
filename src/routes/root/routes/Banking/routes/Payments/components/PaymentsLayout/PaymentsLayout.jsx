import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import './PaymentsLayout.css';

class PaymentsLayout extends Component {
  componentWillMount() {
    const { transactionForm, initPaymentTransactionForm } = this.props;
    if (_.isEmpty(transactionForm)) {
      initPaymentTransactionForm();
    }
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane" id="payments">
      {this.props.children}
    </div>
    )
  }
}

export default PaymentsLayout
