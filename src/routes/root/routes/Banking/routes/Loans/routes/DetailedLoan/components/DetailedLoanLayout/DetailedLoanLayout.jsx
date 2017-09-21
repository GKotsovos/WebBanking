import React, { Component, PropTypes } from 'react';
import DetailedLoan from '../../containers/DetailedLoanContainer'
import LoanServicesTabs from '../../containers/LoanServicesTabsContainer'
import './DetailedLoanLayout.css';

class DetailedLoanLayout extends Component {
  render() {
    return (
      <div>
        <DetailedLoan type="CREDIT"/>
        <LoanServicesTabs />
        {this.props.children}
      </div>
    )
  }
}

export default DetailedLoanLayout
