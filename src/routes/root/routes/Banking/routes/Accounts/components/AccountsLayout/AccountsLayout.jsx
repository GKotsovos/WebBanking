import React from 'react';
import { isEmpty } from 'underscore';
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
  <div role="tabpanel" className="accounts-container tab-pane active">
    {
      isEmpty(activeAccount) ?
        accounts.map(account => <Account account={account} />)
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
