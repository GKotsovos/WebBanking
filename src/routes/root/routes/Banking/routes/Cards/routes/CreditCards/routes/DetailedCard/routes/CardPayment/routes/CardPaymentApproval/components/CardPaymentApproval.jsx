import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import localizationText from './localizationText';

export const CardPaymentApproval = ({ transactionForm, language, creditCardPayment }) => (
  <form id="cardPaymentApprovalForm">
    <div id="cardPaymentApprovalTable" className="form-group">
      <table className="table table-bordered">
        <TransactionApprovalHeader
          title={localizationText[language].paymentDetails}
        />
        <tbody>
          <SimpleTransactionApprovalRow
            title={localizationText[language].debitAccount}
            value={transactionForm.debitAccount.value}
          />
          <MoneyTransactionApprovalRow
            title={localizationText[language].amount}
            amount={transactionForm.amount.value}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title={localizationText[language].charges}
            amount={transactionForm.expenses}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title={localizationText[language].totalDebit}
            amount={transactionForm.amount.value}
            currency={transactionForm.currency}
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
      completeTransaction={creditCardPayment}
    />

  </form>
)

export default CardPaymentApproval
