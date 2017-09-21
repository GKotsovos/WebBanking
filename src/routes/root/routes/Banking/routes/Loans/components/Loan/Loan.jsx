import React from 'react';
import currencyFormatter from 'currency-formatter';
import dateformat from 'dateformat';
import _ from 'underscore';
import './Loan.css';

export const Loan = ({ loan, setActiveLoan, getLoanTransactionHistory, linkTo }) => (
  <div className="panel panel-default loanContainer" onClick={() => {
    setActiveLoan(loan);
    getLoanTransactionHistory(loan.id);
    linkTo('/banking/loans/loan');
  }}>
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
  </div>
)

export default Loan
