import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import './TransfersLayout.css';

class TransfersLayout extends Component {
  componentWillMount(){
    const { transactionForm, initTransferTransactionForm } = this.props;
    initTransferTransactionForm();
  }

  render(){
    return (
      <div role="tabpanel" className="tab-pane" id="transfers">
      {this.props.children}
    </div>
    )
  }
}

export default TransfersLayout
