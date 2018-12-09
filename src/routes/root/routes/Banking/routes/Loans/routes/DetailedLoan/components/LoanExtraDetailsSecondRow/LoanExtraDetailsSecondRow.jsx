import React from 'react';
import currencyFormatter from 'currency-formatter';
import dateformat from 'dateformat';
import localizationText from './localizationText';

export const LoanExtraDetailsSecondRow = ({ activeLoan, language }) => (
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
            {activeLoan.repaymentBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeLoan.currency).symbol}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-3 text-right">{localizationText[language].issueDate}</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].repaymentDate}</span>
          <span className="col-xs-4 text-right">{localizationText[language].repaymentBalance}</span>
        </span>
      </div>
    </li>
  </ul>
)

export default LoanExtraDetailsSecondRow
