import React from 'react';
import AccountPanelHeader from '../AccountPanelHeader';
import AccountPanelBody from '../AccountPanelBody';

export const Account = ({
  account,
  language,
  setActiveAccount,
  getAccountCurrentMonthTransactionHistory
}) => (
  <div
    className="account-panel panel panel-default"
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
