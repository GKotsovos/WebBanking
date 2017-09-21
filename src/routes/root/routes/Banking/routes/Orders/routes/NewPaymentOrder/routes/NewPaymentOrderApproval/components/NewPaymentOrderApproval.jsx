import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import './NewPaymentOrderApproval.css';

export const NewPaymentOrderApproval = ({ newOrderForm, createPaymentOrder }) => (
  <form className="newOrderApprovalTable">
    <table className="table table-bordered newOrderApprovalTable">
      <TransactionApprovalHeader
        title='Στοιχεία Πάγιας Εντολής'
      />
      <tbody>
        <SimpleTransactionApprovalRow
          title='Λογαριασμός χρέωσης'
          value={newOrderForm.debitAccount.value}
        />
        <SimpleTransactionApprovalRow
          title='Όνομα πληρωμής'
          value={newOrderForm.paymentSelections.paymentMethod}
        />
        <MoneyTransactionApprovalRow
          title='Έξοδα εντολής'
          amount={newOrderForm.charges.value}
          currency={newOrderForm.currency.value}
        />
        <SimpleTransactionApprovalRow
          title='Ημερομηνία λήξης'
          value={newOrderForm.endDate.asapOrder ? newOrderForm.endDate.asapText : newOrderForm.endDate.view}
        />
      </tbody>
    </table>
    <TransactionApprovalButtons
      completeTransaction={() => createPaymentOrder(newOrderForm)}
    />
  </form>
)

export default NewPaymentOrderApproval
