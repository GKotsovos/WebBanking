import React from 'react';
import LoanPanelHeader from 'routes/root/routes/Banking/routes/Loans/components/LoanPanelHeader';
import LoanPanelBody from 'routes/root/routes/Banking/routes/Loans/components/LoanPanelBody';
import LoanExtraDetailsFirstRow from '../LoanExtraDetailsFirstRow'
import LoanExtraDetailsSecondRow from '../LoanExtraDetailsSecondRow'
import './DetailedLoan.css';

export const DetailedLoan = ({ activeLoan }) => (
  <div className="panel panel-default detailedLoanContainer">
    <LoanPanelHeader loan={activeLoan} />
    <LoanPanelBody loan={activeLoan} />
    <LoanExtraDetailsFirstRow activeLoan={activeLoan} />
    <LoanExtraDetailsSecondRow activeLoan={activeLoan} />
  </div>
)

export default DetailedLoan
