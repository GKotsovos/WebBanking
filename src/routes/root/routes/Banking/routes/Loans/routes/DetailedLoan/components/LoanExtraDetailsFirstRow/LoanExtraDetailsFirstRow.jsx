import React from 'react';
import currencyFormatter from 'currency-formatter';
import dateformat from 'dateformat';
import './LoanExtraDetailsFirstRow.css';

export const LoanExtraDetailsFirstRow = ({ activeLoan }) => (
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
)

export default LoanExtraDetailsFirstRow
