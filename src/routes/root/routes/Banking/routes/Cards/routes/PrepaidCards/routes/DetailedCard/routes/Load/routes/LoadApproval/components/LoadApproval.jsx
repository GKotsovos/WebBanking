import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader';
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow';
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow';
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons';
import './LoadApproval.css';

export const LoadApproval = ({ transactionForm, prepaidCardLoad }) => (
  <form id="loadApprovalForm" className="col-sm-offset-2 col-sm-8">

    <div id="loadApprovalTable" className="form-group">
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
            title='Ποσό φόρτισης'
            amount={transactionForm.amount.value}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title='Έξοδα φόρτισης'
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
            value={transactionForm.viewDate}
          />
        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons
      completeTransaction={prepaidCardLoad}
    />

  </form>
)

export default LoadApproval
