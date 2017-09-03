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
          {
            transactionForm.creditAccount.type != 'isAccount' ?
            <SimpleTransactionApprovalRow
              title='Όνομα δικαιούχου'
              value={transactionForm.fullName.value}
            /> : null
          }
          <SimpleTransactionApprovalRow
            title='Τράπεζα'
            value={transactionForm.bank.name}
          />
          {
            transactionForm.bankType.value == 'foreignBank' ?
            <SimpleTransactionApprovalRow
              title='BIC Τράπεζας'
              value={transactionForm.bank.bic}
            /> : null
          }
          <MoneyTransactionApprovalRow
            title='Καθαρό ποσό εμβάσματος'
            amount={transactionForm.amount.value}
            currency='EUR'
          />
          <MoneyTransactionApprovalRow
            title='Έξοδα εμβάσματος'
            amount={transactionForm.charges}
            currency={transactionForm.currency.value}
          />
          <MoneyTransactionApprovalRow
            title='Σύνολο χρέωσης λογαριασμού'
            amount={parseFloat(transactionForm.amount.value) + parseFloat(transactionForm.charges)}
            currency={transactionForm.currency.value}
          />
          <SimpleTransactionApprovalRow
            title='Ημερομηνία εκτέλεσης'
            value={transactionForm.date.asapTransfer ? transactionForm.date.asapText : transactionForm.date.view}
          />
          {
            transactionForm.comments.value != '' ?
            <SimpleTransactionApprovalRow
              title='Σχόλια'
              value={transactionForm.comments.value}
            /> : null
          }

        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons
      completeTransaction={() => transfer(transactionForm)}
    />

  </form>
)

export default TransferApproval
