import React from 'react';
import currencyFormatter from 'currency-formatter';
import TransactionApprovalButtons from '../../../../../../../../../../components/TransactionApprovalButtons'
import './CardPaymentApproval.css';

export const CardPaymentApproval = ({ transactionForm, creditCardPayment }) => (
  <form id="cardPaymentApprovalForm">
    <div id="cardPaymentApprovalTable" className="form-group">
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
              {transactionForm.debitAccount}
            </td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ποσό πληρωμής</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.amount.toLocaleString('gr-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(transactionForm.currency).symbol}
            </td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Έξοδα πληρωμής</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.expenses.toLocaleString('gr-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(transactionForm.currency).symbol}
            </td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σύνολο χρέωσης λογαριασμού</td>
            <td className="cell col-sm-4 text-center">
              {transactionForm.amount.toLocaleString('gr-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(transactionForm.currency).symbol}
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
      completeTransaction={creditCardPayment}
    />

  </form>
)

export default CardPaymentApproval
