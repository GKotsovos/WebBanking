import React from 'react';
import LoanPanelHeader from '../LoanPanelHeader';
import LoanPanelBody from '../LoanPanelBody';

export const Loan = ({ loan, language, setActiveLoan, getLoanTransactionHistory, linkTo }) => (
  <div className="panel panel-default loan-container" onClick={() => {
    setActiveLoan(loan);
    getLoanTransactionHistory(loan.id);
    linkTo('/banking/loans/loan');
  }}>
    <LoanPanelHeader loan={loan} />
    <LoanPanelBody loan={loan} language={language} />
  </div>
)

export default Loan
