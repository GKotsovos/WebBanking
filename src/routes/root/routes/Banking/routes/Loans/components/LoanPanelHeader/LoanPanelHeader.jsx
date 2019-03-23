import React from 'react';
import currencyFormatter from 'currency-formatter';

export const LoanPanelHeader = ({ loan }) => (
  <div className="loan-panel-header panel-heading panel-title">
    <h3 className="loan-panel-header__title panel-title common-title">
      <span>
        ({currencyFormatter.findCurrency(loan.currency).symbol}) {loan.customTitle}
      </span>
      <span>
        {loan.id}
      </span>
    </h3>
  </div>
)

export default LoanPanelHeader
