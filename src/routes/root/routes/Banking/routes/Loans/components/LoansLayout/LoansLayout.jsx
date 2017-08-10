import React from 'react';
import Loan from '../Loan';
import DetailedLoan from '../DetailedLoan';
import LoanServicesTabs from '../LoanServicesTabs';
import './LoansLayout.css';

export const LoansLayout = ({ children, loans, activeLoan }) => (
  <div role="tabpanel" className="tab-pane" id="loans">
    {
      _.isEmpty(activeLoan) ?
        _.map(loans, (loan) => <Loan loan={loan} />)
        : children
    }
  </div>
)

export default LoansLayout
