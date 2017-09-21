import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import './NewTransferOrderLayout.css';

class NewTransferOrderLayout extends Component {
  componentWillMount(){
    const { newOrderForm, initNewTransferOrderForm } = this.props;
    $('.selectpicker').selectpicker();
    // if (_.isEmpty(newOrderForm)) {
      initNewTransferOrderForm();
    // }
  }

  render(){
    return (
      <div className="newOrderContainer">
        {this.props.children}
      </div>
    )
  }
}

export default NewTransferOrderLayout
