import React from 'react';
import currencyFormatter from 'currency-formatter';
import './LoanPanelBody.css';

export const LoanPanelBody = ({ loan }) => (
  <div className="panel-body">
    <div className="row">
      <span>
        <span className="col-xs-3 text-right">
          {loan.type}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {loan.loanedAmount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(loan.currency).symbol}
        </span>
        <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
          {loan.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(loan.currency).symbol}
        </span>
      </span>
      <span className="summary">
        <span className="col-xs-3 text-right">Τύπος Δανείου</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">Αρχικό Ποσό</span>
        <span className="col-xs-offset-1 col-xs-3 text-right">Λογιστικό Υπόλοιπο</span>
      </span>
    </div>
  </div>
)

export default LoanPanelBody