import React from 'react';
import currencyFormatter from 'currency-formatter';
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons';
import './LoadApproval.css';

export const LoadApproval = ({ transactionForm, prepaidCardLoad }) => (
  <form id="loadApprovalForm" className="col-sm-offset-2 col-sm-8">

    <div id="loadApprovalTable" className="form-group">
      <table className="table table-bordered">
        <thead>
          <tr className="tableHead titles">
            <th colSpan="3" className="text-center">Στοιχεία Πληρωμής</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titleCell col-sm-5 text-right">Λογαριασμός χρέωσης</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.debitAccount.value}
            </td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ποσό φόρτισης</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.amount.value.toLocaleString('gr-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(transactionForm.currency).symbol}
            </td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Έξοδα φόρτισης</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.expenses.toLocaleString('gr-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(transactionForm.currency).symbol}
            </td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σύνολο χρέωσης λογαριασμού</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.amount.value.toLocaleString('gr-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(transactionForm.currency).symbol}
            </td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ημερομηνία εκτέλεσης</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.viewDate}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons
      linkToPreviousForm='/banking/cards/creditcards/card/payment'
      completeTransaction={prepaidCardLoad}
    />

  </form>
)

export default LoadApproval
