import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import './CardPaymentApproval.css';

export const CardPaymentApproval = ({ transactionForm, creditCardPayment }) => (
  <form id="cardPaymentApprovalForm">
    <div id="cardPaymentApprovalTable" className="form-group">
      <table className="table table-bordered">
        <TransactionApprovalHeader
          title='Στοιχεία Πληρωμής'
        />
        <tbody>
          <SimpleTransactionApprovalRow
            title='Λογαριασμός χρέωσης'
            value={transactionForm.debitAccount.value}
          />
          <MoneyTransactionApprovalRow
            title='Ποσό πληρωμής'
            amount={transactionForm.amount.value}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title='Έξοδα πληρωμής'
            amount={transactionForm.expenses}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title='Σύνολο χρέωσης λογαριασμού'
            amount={transactionForm.amount.value}
            currency={transactionForm.currency}
          />
          <SimpleTransactionApprovalRow
            title='Ημερομηνία εκτέλεσης'
            value={transactionForm.date.asapTransaction ? transactionForm.date.asapText : transactionForm.date.view}
          />
        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons
      completeTransaction={creditCardPayment}
    />

  </form>
)

export default CardPaymentApproval
