import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import Account from '../../containers/AccountContainer';
import DetailedAccount from '../../containers/DetailedAccountContainer';
import TransactionsHistory from 'routes/root/routes/Banking/routes/components/TransactionsHistory';
import './AccountsLayout.css';

export const AccountsLayout = ({ accounts, activeAccount }) => (
  <div id="accounts" role="tabpanel" className="tab-pane active">
    {
      _.isEmpty(activeAccount) ?
        _.map(accounts, (account) => <Account account={account} />)
      : [
          <DetailedAccount />,
          <TransactionsHistory transactionHistory={activeAccount.transactionHistory} />
        ]
    }
  </div>
)

export default AccountsLayout
