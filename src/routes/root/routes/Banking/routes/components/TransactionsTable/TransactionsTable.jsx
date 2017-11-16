import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import localizationText from './localizationText';
import './TransactionsTable.css';

const sign = {
  credit: '',
  debit: '-'
}

export const TransactionsTable = ({ transactionHistory, language }) => (
  <div id="transactionsTableContainer">
    <table className="transactionsTable table">
      <thead>
        <tr className="tableHead titles">
          <th className="col-sm-2 text-center">{localizationText[language].transactionDate}</th>
          <th className="col-sm-3 text-center">{localizationText[language].transactionDescription}</th>
          <th className="col-sm-4 text-center middle">{localizationText[language].beneficiary}</th>
          <th className="col-sm-1 text-center middle">{localizationText[language].amount}</th>
          <th className="col-sm-2 text-center">{localizationText[language].ledgerBalance}</th>
        </tr>
      </thead>
      <tbody>
        {
          _.map(transactionHistory, (transaction, key) => [
            <tr key={key}>
              <td key={key++} className="cell col-sm-2 text-center">
                {dateformat(transaction.date, 'dd/mm/yyyy')}
              </td>
              <td key={key++} className="cell col-sm-3 text-center">
                {transaction.title}
              </td>
              <td key={key++} className="cell col-sm-4 text-center">
                {transaction.beneficiary}
              </td>
              <td key={key++} className={`cell col-sm-1 text-center ${transaction.transactionType}`}>
                {`${sign[transaction.transactionType]}${transaction.amount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}${currencyFormatter.findCurrency(transaction.currency).symbol}`}
              </td>
              <td key={key++} className="cell text-center col-sm-2">
                 {`${transaction.newBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}${currencyFormatter.findCurrency(transaction.currency).symbol}`}
              </td>
            </tr>
          ])
        }
      </tbody>
    </table>
  </div>
)

export default TransactionsTable
