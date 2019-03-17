import React from 'react';
import TimePeriodSelection from '../TimePeriodSelection';
import TransactionsTable from '../TransactionsTable';

export const TransactionsHistory = ({
  transactionHistory,
  transactionHistoryTimePeriod,
  language,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  getTransactionHistoryByTimePeriod
 }) => (
  <div className="transaction-history-container">
    <TimePeriodSelection
      startDate={transactionHistoryTimePeriod ? transactionHistoryTimePeriod.startDate : {}}
      endDate={transactionHistoryTimePeriod ? transactionHistoryTimePeriod.endDate : {}}
      validSelection={transactionHistoryTimePeriod ? transactionHistoryTimePeriod.valid : false}
      language={language}
      setTransactionHistoryStartDate={setTransactionHistoryStartDate}
      setTransactionHistoryEndDate={setTransactionHistoryEndDate}
      getTransactionHistoryByTimePeriod={getTransactionHistoryByTimePeriod}
    />
    <TransactionsTable
      transactionHistory={transactionHistory}
      language={language}
    />
  </div>
)

export default TransactionsHistory
