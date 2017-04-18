import React from 'react';
import Account from '../../containers/AccountContainer';
import DetailedAccount from '../../containers/DetailedAccountContainer';
import TransactionsHistory from '../../containers/TransactionsHistoryContainer';
import _ from 'underscore';
import './AccountsView.css';

export const AccountsView = ({ accounts, activeAccount }) => (
  <div id="accounts" role="tabpanel" className="tab-pane active">
    {
      _.isEmpty(activeAccount) ?
        _.map(accounts, (account) => <Account account={account} />)
      : [
          <DetailedAccount />,
          <TransactionsHistory />
        ]
    }
  </div>
)

export default AccountsView
