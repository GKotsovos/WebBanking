import React from 'react';
import currencyFormatter from 'currency-formatter';
import './Account.css';

export const Account = ({ account,  setActiveAccount, getAccountTransactionHistory }) => (
  <div className="panel panel-default accountContainer" onClick={() => {
    setActiveAccount(account);
    getAccountTransactionHistory(account.id);
  }}>
    <div className="panel-heading accountTitle">
      <h3 className="panel-title">
        <span className="titles">
          ({currencyFormatter.findCurrency(account.currency).symbol}) {account.type}
        </span>
        <span className="titles IBAN">
          {account.id}
        </span>
      </h3>
    </div>

    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">
            {account.ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(account.currency).symbol}
          </span>
          <span className="col-xs-offset-1 col-xs-4 text-right">
            {account.overdraft.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(account.currency).symbol}
          </span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
            {account.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(account.currency).symbol}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-3 text-right">Λογιστικό Υπόλοιπο</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Ευχέρια Υπερανάλληψης</span>
          <span className="col-xs-offset-1 col-xs-3 text-right">Διαθέσιμο Υπόλοιπο</span>
        </span>
      </div>
    </div>
  </div>
)

export default Account
