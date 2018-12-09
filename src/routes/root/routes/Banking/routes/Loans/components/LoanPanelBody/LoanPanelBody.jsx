import React from 'react';
import currencyFormatter from 'currency-formatter';
import localizationText from './localizationText';

export const LoanPanelBody = ({ loan, language }) => (
  <div className="panel-body">
    <div className="row">
      <span>
        <span className="col-xs-3 text-right">
          {loan.type}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {loan.loanedAmount.toLocaleString('el-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(loan.currency).symbol}
        </span>
        <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
          {loan.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(loan.currency).symbol}
        </span>
      </span>
      <span className="summary">
        <span className="col-xs-3 text-right">{localizationText[language].typeOfLoan}</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].initialAmount}</span>
        <span className="col-xs-offset-1 col-xs-3 text-right">{localizationText[language].ledgerBalance}</span>
      </span>
    </div>
  </div>
)

export default LoanPanelBody
