import React, { Component }  from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import localizationText from './localizationText';

class PaymentApproval extends Component {
  render() {
    const {
      transactionForm,
      language,
      payment
    } = this.props;

    let beneficiary = "";
    let paymentCodeTitle = "";

    const paymentMethod = transactionForm.paymentSelections.paymentMethod;
    if (paymentMethod) {
      if (paymentMethod.includes('AGILE')) {
        beneficiary = 'AGILE BANK'
      } else {
        beneficiary = paymentMethod;
      }

      if (paymentMethod.includes('ΚΑΡΤΑ')) {
        paymentCodeTitle = localizationText[language].cardNumber
      } else if (paymentMethod.includes('ΔΑΝΕΙΟ')) {
        paymentCodeTitle = localizationText[language].loanNumber
      } else {
        paymentCodeTitle = localizationText[language].paymentCode;
      }
    }

    return (
      <form className="payment-approval">

        <div className="form-group payment-approval-table">
          <table className="table table-bordered">
            <TransactionApprovalHeader
              title={localizationText[language].paymentDetails}
            />
            <tbody>
              <SimpleTransactionApprovalRow
                title={localizationText[language].debitAccount}
                value={transactionForm.debitAccount.value}
              />
              <SimpleTransactionApprovalRow
                title={localizationText[language].beneficiary}
                value={beneficiary}
              />
              <SimpleTransactionApprovalRow
                title={paymentCodeTitle}
                value={transactionForm.paymentCode.value}
              />
              <MoneyTransactionApprovalRow
                title={localizationText[language].paymentAmount}
                amount={transactionForm.amount.value}
                currency={transactionForm.currency.value}
              />
              <MoneyTransactionApprovalRow
                title={localizationText[language].charges}
                amount={transactionForm.charges.value}
                currency={transactionForm.currency.value}
              />
              <MoneyTransactionApprovalRow
                title={localizationText[language].totalDebit}
                amount={parseFloat(transactionForm.amount.value) + parseFloat(transactionForm.charges.value)}
                currency={transactionForm.currency.value}
              />
              <SimpleTransactionApprovalRow
                title={localizationText[language].executionDate}
                value={transactionForm.date.asapTransaction ? transactionForm.date.asapText : transactionForm.date.view}
              />
            </tbody>
          </table>
        </div>

        <TransactionApprovalButtons
          language={language}
          completeTransaction={() => payment(transactionForm)}
        />

      </form>
    )
  }
}

export default PaymentApproval
