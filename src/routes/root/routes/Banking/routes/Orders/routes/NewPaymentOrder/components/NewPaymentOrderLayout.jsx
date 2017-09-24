import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

class NewPaymentOrderLayout extends Component {
  componentWillMount(){
    const { newOrderForm, initNewPaymentOrderForm } = this.props;
    $('.selectpicker').selectpicker();
    initNewPaymentOrderForm();
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default NewPaymentOrderLayout
