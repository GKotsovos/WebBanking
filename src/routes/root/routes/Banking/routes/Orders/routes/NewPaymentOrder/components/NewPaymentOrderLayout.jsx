import React, { Component } from 'react';

class NewPaymentOrderLayout extends Component {
  componentWillMount() {
    const { initNewPaymentOrderForm } = this.props;
    $('.selectpicker').selectpicker();
    initNewPaymentOrderForm();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default NewPaymentOrderLayout
