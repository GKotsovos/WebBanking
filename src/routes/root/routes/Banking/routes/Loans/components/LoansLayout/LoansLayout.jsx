import React from 'react';
import Loan from '../Loan';
import DetailedLoan from '../DetailedLoan';
import LoanServicesTabs from '../LoanServicesTabs';
import './LoansLayout.css';

export const LoansLayout = ({ children }) => (
  <div role="tabpanel" className="tab-pane" id="loans">
    <Loan />
    {/* <DetailedLoan />
    <LoanServicesTabs />
    <div>
      {children}
    </div> */}
  </div>
)

export default LoansLayout
