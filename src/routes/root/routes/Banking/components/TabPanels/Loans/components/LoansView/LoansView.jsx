import React from 'react';
import Loan from '../Loan';
import DetailedLoan from '../DetailedLoan';
import Services from '../Services';
import './LoansView.css';

export const LoansView = () => (
  <div role="tabpanel" className="tab-pane" id="loans">
    <Loan />
    <DetailedLoan />
    <Services />
  </div>
)

export default LoansView
