import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import Account from '../../containers/AccountContainer';
import DetailedAccount from '../../containers/DetailedAccountContainer';
import TransactionsHistory from '../../../components/TransactionsHistory';
import './AccountsLayout.css';

// export const AccountsLayout = ({ accounts }) => (
class AccountsLayout extends Component {
  // componentWillMount() {
  //   const { initialFetch, getAccounts } = this.props;
  //   if (!initialFetch) {
  //     getAccounts();
  //   }
  // }

  render() {
    const { accounts, activeAccount } = this.props;
    return (
      <div id="accounts" role="tabpanel" className="tab-pane active">
        {
          _.isEmpty(activeAccount) ?
            _.map(accounts, (account) => <Account key={account.iban} account={account} />)
          : [
              <DetailedAccount />,
              <TransactionsHistory transactionHistory={activeAccount.transactionHistory} />
            ]
        }
      </div>
    )
  }
}

export default AccountsLayout
