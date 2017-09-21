import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import './NewTransferOrderApproval.css';

export const NewTransferOrderApproval = ({ newOrderForm, createTransferOrder }) => (
  <form>
    <table className="table table-bordered newOrderApprovalTable">
      <TransactionApprovalHeader
        title='Στοιχεία Πάγιας Εντολής'
      />
      <tbody>
        <SimpleTransactionApprovalRow
          title='Ονομασία εντολής'
          value={newOrderForm.customTitle.value}
        />
        <SimpleTransactionApprovalRow
          title='Λογαριασμός χρέωσης'
          value={newOrderForm.debitAccount.value}
        />
        <SimpleTransactionApprovalRow
          title='Λογαριασμός πίστωσης'
          value={newOrderForm.beneficiaryAccount.value}
        />
        <SimpleTransactionApprovalRow
          title='Όνομα δικαιούχου'
          value={newOrderForm.beneficiaryFullName.value}
        />
        <MoneyTransactionApprovalRow
          title='Ποσό εντολής'
          amount={newOrderForm.amount.value}
          currency={newOrderForm.currency.value}
        />
        {
          newOrderForm.beneficiaryBankType.value != 'agileBank' ? (
            <SimpleTransactionApprovalRow
              title='Επιβάρυνση εξόδων'
              value={newOrderForm.chargesBeneficiary.selection}
            />
          ) : null
        }
        <SimpleTransactionApprovalRow
          title='Ημερομηνία ενεργοποίησης'
          value={newOrderForm.startDate.asapTransaction ? newOrderForm.startDate.asapText : newOrderForm.startDate.view}
        />
        <SimpleTransactionApprovalRow
          title='Περιοδικότητα'
          value={newOrderForm.periodicity.value}
        />
        <SimpleTransactionApprovalRow
          title='Πλήθος εκτελέσεων'
          value={newOrderForm.timesOfExecution.value}
        />
        {
          newOrderForm.comments.value != '' ? (
            <SimpleTransactionApprovalRow
              title='Σχόλια'
              value={newOrderForm.comments.value}
            />
          ) : null
        }
      </tbody>
    </table>
    <TransactionApprovalButtons
      completeTransaction={() => createTransferOrder(newOrderForm)}
    />
  </form>
)

export default NewTransferOrderApproval
