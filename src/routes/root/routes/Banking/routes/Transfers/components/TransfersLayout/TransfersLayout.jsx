import React, { Component, PropTypes } from 'react';

class TransfersLayout extends Component {
  componentWillMount() {
    this.props.initTransferTransactionForm();
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane" id="transfers">
      {this.props.children}
    </div>
    )
  }
}

export default TransfersLayout
