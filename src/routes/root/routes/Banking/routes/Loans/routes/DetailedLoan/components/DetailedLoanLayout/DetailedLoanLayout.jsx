import React, { Component } from 'react';
import DetailedLoan from '../../containers/DetailedLoanContainer'
import LoanServicesTabs from '../../containers/LoanServicesTabsContainer'

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
