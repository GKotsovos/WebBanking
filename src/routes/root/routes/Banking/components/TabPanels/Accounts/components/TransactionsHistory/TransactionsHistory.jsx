import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './TransactionsHistory.css';

const sign = {
  credit: '',
  debit: '-'
}

export const TransactionsHistory = ({ transactionHistory }) => (
  <div className="transactionsContainer" id="history">
    <table className="transactionsTable table">
      <thead>
        <tr className="tableHead titles">
          <th className="col-sm-2 text-center">Ημ/νια Συνναλαγής</th>
          <th className="col-sm-2 text-center">Περιγραφή Συναλλαγής</th>
          <th className="col-sm-5 text-center middle">Δικαιούχος</th>
          <th className="col-sm-1 text-center middle">Ποσό</th>
          <th className="col-sm-2 text-center">Λογιστικό Υπόλοιπο</th>
        </tr>
      </thead>
      <tbody>
        {
          _.map(transactionHistory, (transaction) => [
            <tr>
              <td className="cell col-sm-2 text-center">
                {dateformat(transaction.date, 'dd/mm/yyyy')}
              </td>
              <td className="cell col-sm-2 text-center">
                {transaction.details}
              </td>
              <td className="cell col-sm-5 text-center">
                {transaction.beneficiary}
              </td>
              <td className={`cell col-sm-1 text-center ${transaction.transactionType}`}>
                {`${sign[transaction.transactionType]}${transaction.amount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}${currencyFormatter.findCurrency(transaction.currency).symbol}`}
              </td>
              <td className="cell text-center col-sm-2">
                 {`${transaction.ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}${currencyFormatter.findCurrency(transaction.currency).symbol}`}
              </td>
            </tr>
          ])
        }
        {/* <tr>
          <td className="cell col-sm-2 text-center">10/11/2016</td>
          <td className="cell col-sm-2 text-center">ΠΛΗΡΩΜΗ</td>
          <td className="cell col-sm-5 text-center">VODAFONE BILLING</td>
          <td className="cell col-sm-1 text-center">25,00€</td>
          <td className="cell text-center col-sm-2">475,57€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">15/11/2016</td>
          <td className="cell col-sm-2 text-center">ΑΤΜ-ΑΝΑΛΗΨΗ</td>
          <td className="cell col-sm-5 text-center">ATM AB5511</td>
          <td className="cell col-sm-1 text-center">50,00€</td>
          <td className="cell text-center col-sm-2">252,27€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">15/11/2016</td>
          <td className="cell col-sm-2 text-center">ΑΤΜ-ΚΑΤΑΘΕΣΗ</td>
          <td className="cell col-sm-5 text-center">ATM AB5511</td>
          <td className="cell col-sm-1 text-center">20,00€</td>
          <td className="cell text-center col-sm-2">272,27€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">27/11/2016</td>
          <td className="cell col-sm-2 text-center">ΑΤΜ-ΑΝΑΛΗΨΗ</td>
          <td className="cell col-sm-5 text-center">ATM AB5547</td>
          <td className="cell col-sm-1 text-center">50,00€</td>
          <td className="cell text-center col-sm-2">575,57€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">31/11/2016</td>
          <td className="cell col-sm-2 text-center">ΜΙΣΘΟΔΟΣΙΑ</td>
          <td className="cell col-sm-5 text-center">AGILE ACTORS IKE</td>
          <td className="cell col-sm-1 text-center">5000,00€</td>
          <td className="cell text-center col-sm-2">5600,25€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">11/12/2016</td>
          <td className="cell col-sm-2 text-center">ΠΛΗΡΩΜΗ</td>
          <td className="cell col-sm-5 text-center">PAYPAL *UDEMY</td>
          <td className="cell col-sm-1 text-center">24,68€</td>
          <td className="cell text-center col-sm-2">600,25€</td>
        </tr> */}
      </tbody>
    </table>
  </div>
)

export default TransactionsHistory
