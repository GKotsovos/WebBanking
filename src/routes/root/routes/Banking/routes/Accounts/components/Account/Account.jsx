import React from 'react';
import AccountPanelHeader from '../AccountPanelHeader';
import AccountPanelBody from '../AccountPanelBody';
import './Account.css';

export const Account = ({ account,  setActiveAccount, getAccountTransactionHistory }) => (
  <div
    className="panel panel-default accountContainer"
    onClick={() => {
    setActiveAccount(account);
    getAccountTransactionHistory(account.id);
  }}>
    <AccountPanelHeader
      currency={account.currency}
      type={account.type}
      iban={account.id}
    />
    <AccountPanelBody
      ledgerBalance={account.ledgerBalance}
      currency={account.currency}
      overdraft={account.overdraft}
      availableBalance={account.availableBalance}
    />
  </div>
)

export default Account
