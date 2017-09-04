import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import './LoanPaymentApproval.css';

export const LoanPaymentApproval = ({ transactionForm, loanPayment }) => (
  <form id="loanPaymentApprovalForm">
    <div id="loanPaymentApprovalTable" className="form-group">
      <table className="table table-bordered">
        <thead>
          <TransactionApprovalHeader
            title='Στοιχεία Πληρωμής'
          />
        </thead>
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
          <SimpleTransactionApprovalRow
            title='Ημερομηνία εκτέλεσης'
            value={transactionForm.date.asapTransaction ? transactionForm.date.asapText : transactionForm.date.view}
          />
        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons
      completeTransaction={loanPayment}
    />

  </form>
)

export default LoanPaymentApproval
