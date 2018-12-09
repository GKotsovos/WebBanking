import React from 'react';
import LoanPanelHeader from 'routes/root/routes/Banking/routes/Loans/components/LoanPanelHeader';
import LoanPanelBody from 'routes/root/routes/Banking/routes/Loans/components/LoanPanelBody';
import LoanExtraDetailsFirstRow from '../LoanExtraDetailsFirstRow'
import LoanExtraDetailsSecondRow from '../LoanExtraDetailsSecondRow'

export const DetailedLoan = ({ activeLoan, language }) => (
  <div className="panel panel-default detailedLoanContainer">
    <LoanPanelHeader loan={activeLoan} />
    <LoanPanelBody loan={activeLoan} language={language} />
    <LoanExtraDetailsFirstRow activeLoan={activeLoan} language={language} />
    <LoanExtraDetailsSecondRow activeLoan={activeLoan} language={language} />
  </div>
)

export default DetailedLoan
