import React from 'react';
import currencyFormatter from 'currency-formatter';
import dateformat from 'dateformat';
import localizationText from './localizationText';
import './LoanExtraDetailsFirstRow.css';

export const LoanExtraDetailsFirstRow = ({ activeLoan, language }) => (
  <ul className="list-group">
    <li className="cellRow list-group-item">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">
            {activeLoan.nextInstallmentAmount.toLocaleString('el-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
          </span>
          <span className="col-xs-offset-1 col-xs-4 text-right">
            {activeLoan.debt.toLocaleString('el-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
          </span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
            {dateformat(activeLoan.nextInstallmentDate, 'dd/mm/yyyy')}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-3 text-right">{localizationText[language].currentInstallment}</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].totalDebt}</span>
          <span className="col-xs-offset-1 col-xs-3 text-right">{localizationText[language].installmentDate}</span>
        </span>
      </div>
    </li>
  </ul>
)

export default LoanExtraDetailsFirstRow
