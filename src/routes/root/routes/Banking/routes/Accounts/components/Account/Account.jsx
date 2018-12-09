import React from 'react';
import AccountPanelHeader from '../AccountPanelHeader';
import AccountPanelBody from '../AccountPanelBody';

export const Account = ({ account, language, setActiveAccount, getAccountCurrentMonthTransactionHistory }) => (
  <div
    className="panel panel-default accountContainer"
    onClick={() => {
    setActiveAccount(account);
    getAccountCurrentMonthTransactionHistory(account.id);
  }}>
    <AccountPanelHeader
      currency={account.currency}
      type={account.type}
      iban={account.id}
      language={language}
    />
    <AccountPanelBody
      ledgerBalance={account.ledgerBalance}
      currency={account.currency}
      overdraft={account.overdraft}
      availableBalance={account.availableBalance}
      language={language}
    />
  </div>
)

export default Account
