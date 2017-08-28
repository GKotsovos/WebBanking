import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import './TransferApproval.css';

export const TransferApproval = ({ transactionForm, transfer }) => (
  <form id="transferApprovalForm">

    <div id="transferApprovalTable" className="form-group">
      <table className="table table-bordered">
        <thead>
          <TransactionApprovalHeader
            title='Στοιχεία Εμβάσματος'
          />
        </thead>
        <tbody>
          <SimpleTransactionApprovalRow
            title='Λογαριασμός χρέωσης'
            value={transactionForm.debitAccount.value}
          />
          <SimpleTransactionApprovalRow
            title='Λογαριασμός πίστωσης'
            value={transactionForm.creditAccount.value}
          />
          <SimpleTransactionApprovalRow
            title='Όνομα δικαιούχου'
            value={transactionForm.fullName.value}
          />
          <SimpleTransactionApprovalRow
            title='BIC Τράπεζας'
            value={transactionForm.bank.bic}
          />
          <MoneyTransactionApprovalRow
            title='Καθαρό ποσό εμβάσματος'
            amount={transactionForm.amount.value}
            currency='EUR'
          />
          {/* <MoneyTransactionApprovalRow
            title='Καθαρό ποσό εμβάσματος'
            amount={transactionForm.charges}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title='Σύνολο χρέωσης λογαριασμού'
            amount={transactionForm.amount.value + transactionForm.value}
            currency={transactionForm.currency}
          /> */}
          <SimpleTransactionApprovalRow
            title='Ημερομηνία εκτέλεσης'
            value={transactionForm.viewDate}
          />
          <SimpleTransactionApprovalRow
            title='Σχόλια'
            value={transactionForm.comments.value}
          />
        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons
      linkToPreviousForm='/banking/transfers'
      completeTransaction={transfer}
    />

  </form>
)

export default TransferApproval
