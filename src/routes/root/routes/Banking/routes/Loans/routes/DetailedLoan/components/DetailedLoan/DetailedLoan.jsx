import React from 'react';
import currencyFormatter from 'currency-formatter';
import dateformat from 'dateformat';
import _ from 'underscore';
import './DetailedLoan.css';

export const DetailedLoan = ({ activeLoan }) => (
  <div className="panel panel-default detailedLoanContainer">
    <div className="panel-heading loanTitle">
      <h3 className="panel-title">
        <span className="titles">
          ({currencyFormatter.findCurrency(activeLoan.currency).symbol}) {activeLoan.customTitle}
        </span>
        <span className="titles loanCode">
          {activeLoan.id}
        </span>
      </h3>
    </div>

    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">
            {activeLoan.type}
          </span>
          <span className="col-xs-offset-1 col-xs-4 text-right">
            {activeLoan.loanedAmount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
          </span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
            {activeLoan.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-3 text-right">Τύπος Δανείου</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Αρχικό Ποσό</span>
          <span className="col-xs-offset-1 col-xs-3 text-right">Λογιστικό Υπόλοιπο</span>
        </span>
      </div>
    </div>

    <ul className="list-group">
      <li className="cellRow list-group-item">
        <div className="row">
          <span>
            <span className="col-xs-3 text-right">
              {activeLoan.nextInstallmentAmount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
            </span>
            <span className="col-xs-offset-1 col-xs-4 text-right">
              {activeLoan.debt.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
            </span>
            <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
              {dateformat(activeLoan.nextInstallmentDate, 'dd/mm/yyyy')}
            </span>
          </span>
          <span className="summary">
            <span className="col-xs-3 text-right">Τρέχων Δόση</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">Σύνολο Οφειλών</span>
            <span className="col-xs-offset-1 col-xs-3 text-right">Ημ/νία Δόσης</span>
          </span>
        </div>
      </li>
    </ul>

    <ul className="list-group">
      <li className="cellRow list-group-item">
        <div className="row">
          <span>
            <span className="col-xs-3 text-right">
              {dateformat(activeLoan.issuedDate, 'dd/mm/yyyy')}
            </span>
            <span className="col-xs-offset-1 col-xs-4 text-right">
              {dateformat(activeLoan.repaymentDate, 'dd/mm/yyyy')}
            </span>
            <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
              {activeLoan.repaymentBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
            </span>
          </span>
          <span className="summary">
            <span className="col-xs-3 text-right">Ημ/νία Έκδοσης</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">Ημ/νία Αποπληρωμής</span>
            <span className="col-xs-4 text-right">Υπόλοιπο Αποπληρωμής</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
)

export default DetailedLoan
