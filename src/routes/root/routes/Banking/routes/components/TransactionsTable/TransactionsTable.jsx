import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import localizationText from './localizationText';

const sign = {
  credit: '',
  debit: '-'
}

export const TransactionsTable = ({ transactionHistory, language }) => (
  <div className="transaction-history-table-container">
    <table className="transaction-history-table table">
      <thead className="common-table-header common-title">
        <tr>
          <th className="transaction-history-table__head col-sm-2 text-center">{localizationText[language].transactionDate}</th>
          <th className="transaction-history-table__head col-sm-3 text-center">{localizationText[language].transactionDescription}</th>
          <th className="transaction-history-table__head col-sm-4 text-center">{localizationText[language].beneficiary}</th>
          <th className="transaction-history-table__head col-sm-1 text-center">{localizationText[language].amount}</th>
          <th className="transaction-history-table__head col-sm-2 text-center">{localizationText[language].ledgerBalance}</th>
        </tr>
      </thead>
      <tbody>
        {
          transactionHistory && transactionHistory.map((transaction, key) => [
            <tr key={key}>
              <td key={key++} className="common-table-cell col-sm-2 text-center">
                {dateformat(transaction.date, 'dd/mm/yyyy')}
              </td>
              <td key={key++} className="common-table-cell col-sm-3 text-center">
                {transaction.title}
              </td>
              <td key={key++} className="common-table-cell col-sm-4 text-center">
                {transaction.beneficiary}
              </td>
              <td key={key++} className={`common-table-cell col-sm-1 text-center transaction-history-table__transaction-type--${transaction.transactionType}`}>
                {`${sign[transaction.transactionType]}${transaction.amount.toLocaleString('el-GR', {minimumFractionDigits: 2})}${currencyFormatter.findCurrency(transaction.currency).symbol}`}
              </td>
              <td key={key++} className="common-table-cell text-center col-sm-2">
                 {`${transaction.newBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})}${currencyFormatter.findCurrency(transaction.currency).symbol}`}
              </td>
            </tr>
          ])
        }
      </tbody>
    </table>
  </div>
)

export default TransactionsTable
