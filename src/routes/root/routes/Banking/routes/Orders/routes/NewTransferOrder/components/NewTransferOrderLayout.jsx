import React, { Component } from 'react';

class NewTransferOrderLayout extends Component {
  componentWillMount() {
    $('.selectpicker').selectpicker();
    this.props.initNewTransferOrderForm();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default NewTransferOrderLayout
