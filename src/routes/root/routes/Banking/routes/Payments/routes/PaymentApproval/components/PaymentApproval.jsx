import React, { Component, PropTypes }  from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import './PaymentApproval.css';

class PaymentApproval extends Component {
  render() {
    const {
      transactionForm,
      payment
    } = this.props;

    let beneficiary = transactionForm.paymentSelections.paymentMethod;
    if (transactionForm.paymentSelections.paymentMethod.includes('AGILE')) {
      beneficiary = 'AGILE BANK'
    }

    let paymentCodeTitle = 'Κωδικός πληρωμής';
    if (transactionForm.paymentSelections.paymentMethod.includes('ΚΑΡΤΑ')) {
      paymentCodeTitle = 'Αριθμός κάρτας'
    } else if (transactionForm.paymentSelections.paymentMethod.includes('ΔΑΝΕΙΟ')) {
      paymentCodeTitle = 'Αριθμός δανείου'
    }

    return (
      <form id="paymentApprovalForm">

        <div id="paymentApprovalTable" className="form-group">
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
              <SimpleTransactionApprovalRow
                title='Δικαιούχος πληρωμής'
                value={beneficiary}
              />
              <SimpleTransactionApprovalRow
                title={paymentCodeTitle}
                value={transactionForm.paymentCode.value}
              />
              <MoneyTransactionApprovalRow
                title='Ποσό πληρωμής'
                amount={transactionForm.amount.value}
                currency={transactionForm.currency.value}
              />
              <MoneyTransactionApprovalRow
                title='Έξοδα πληρωμής'
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
                value={transactionForm.date.asapTransaction ? transactionForm.date.asapText : transactionForm.date.view}
              />
            </tbody>
          </table>
        </div>

        <TransactionApprovalButtons
          completeTransaction={() => payment(transactionForm)}
        />

      </form>
    )
  }
}

export default PaymentApproval
