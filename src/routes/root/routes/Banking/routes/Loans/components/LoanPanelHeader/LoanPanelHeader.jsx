import React from 'react';
import currencyFormatter from 'currency-formatter';
import './LoanPanelHeader.css';

export const LoanPanelHeader = ({ loan }) => (
  <div className="panel-heading loanTitle">
    <h3 className="panel-title">
      <span className="titles">
        ({currencyFormatter.findCurrency(loan.currency).symbol}) {loan.customTitle}
      </span>
      <span className="titles loanCode">
        {loan.id}
      </span>
    </h3>
  </div>
)

export default LoanPanelHeader
