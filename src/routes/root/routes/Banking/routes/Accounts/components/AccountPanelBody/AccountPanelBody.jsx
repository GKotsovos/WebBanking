import React from 'react';
import currencyFormatter from 'currency-formatter';
import './AccountPanelBody.css';

export const AccountPanelBody = ({ ledgerBalance, currency, overdraft, availableBalance }) => (
  <div className="panel-body">
    <div className="row">
      <span>
        <span className="col-xs-3 text-right">
          {ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
          {currencyFormatter.findCurrency(currency).symbol}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {overdraft.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
          {currencyFormatter.findCurrency(currency).symbol}
        </span>
        <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
          {availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
          {currencyFormatter.findCurrency(currency).symbol}
        </span>
      </span>
      <span className="summary">
        <span className="col-xs-3 text-right">Λογιστικό Υπόλοιπο</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">Ευχέρια Υπερανάλληψης</span>
        <span className="col-xs-offset-1 col-xs-3 text-right">Διαθέσιμο Υπόλοιπο</span>
      </span>
    </div>
  </div>
)

export default AccountPanelBody
