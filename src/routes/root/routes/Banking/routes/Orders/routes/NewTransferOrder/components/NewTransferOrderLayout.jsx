import React, { Component, PropTypes } from 'react';

class NewTransferOrderLayout extends Component {
  componentWillMount() {
    $('.selectpicker').selectpicker();
    this.props.initNewTransferOrderForm();
  }

  render() {
    return (
      <div className="newOrderContainer">
        {this.props.children}
      </div>
    )
  }
}

export default NewTransferOrderLayout
