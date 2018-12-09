import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import Account from '../../containers/AccountContainer';
import DetailedAccount from '../../containers/DetailedAccountContainer';
import TransactionsHistory from 'routes/root/routes/Banking/routes/components/TransactionsHistory';

export const AccountsLayout = ({
  accounts,
  activeAccount,
  language,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  getTransactionHistoryByTimePeriod
}) => (
  <div id="accounts" role="tabpanel" className="tab-pane active">
    {
      _.isEmpty(activeAccount) ?
        _.map(accounts, (account) => <Account account={account} />)
      : [
          <DetailedAccount />,
          <TransactionsHistory
            transactionHistory={activeAccount.transactionHistory}
            transactionHistoryTimePeriod={activeAccount.transactionHistoryTimePeriod}
            language={language}
            setTransactionHistoryStartDate={setTransactionHistoryStartDate}
            setTransactionHistoryEndDate={setTransactionHistoryEndDate}
            getTransactionHistoryByTimePeriod={getTransactionHistoryByTimePeriod}
          />
        ]
    }
  </div>
)

export default AccountsLayout
