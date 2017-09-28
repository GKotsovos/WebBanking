import React from 'react';
import LoanPanelHeader from '../LoanPanelHeader';
import LoanPanelBody from '../LoanPanelBody';
import './Loan.css';

export const Loan = ({ loan, setActiveLoan, getLoanTransactionHistory, linkTo }) => (
  <div className="panel panel-default loanContainer" onClick={() => {
    setActiveLoan(loan);
    getLoanTransactionHistory(loan.id);
    linkTo('/banking/loans/loan');
  }}>
    <LoanPanelHeader loan={loan} />
    <LoanPanelBody loan={loan} />
  </div>
)

export default Loan
