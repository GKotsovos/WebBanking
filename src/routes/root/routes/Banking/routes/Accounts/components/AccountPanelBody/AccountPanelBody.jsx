import React from 'react';
import currencyFormatter from 'currency-formatter';
import localizationText from './localizationText';

export const AccountPanelBody = ({
  ledgerBalance,
  currency,
  overdraft,
  availableBalance,
  language
}) => (
  <div className="account-panel-body panel-body">
    <div className="row">
      <span>
        <span className="col-xs-3 text-right">
          {ledgerBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})}
          {currencyFormatter.findCurrency(currency).symbol}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {overdraft.toLocaleString('el-GR', {minimumFractionDigits: 2})}
          {currencyFormatter.findCurrency(currency).symbol}
        </span>
        <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
          {availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})}
          {currencyFormatter.findCurrency(currency).symbol}
        </span>
      </span>
      <span className="account-panel-body__summary">
        <span className="col-xs-3 text-right">{localizationText[language].ledgerBalance}</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].overdraft}</span>
        <span className="col-xs-offset-1 col-xs-3 text-right">{localizationText[language].availableBalance}</span>
      </span>
    </div>
  </div>
)

export default AccountPanelBody
