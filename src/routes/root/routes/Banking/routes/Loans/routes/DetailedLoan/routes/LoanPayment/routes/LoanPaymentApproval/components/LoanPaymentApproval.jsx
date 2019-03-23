import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import localizationText from './localizationText';

export const LoanPaymentApproval = ({ transactionForm, language, loanPayment }) => (
  <form className="loan-payment-approval">
    <div className="form-group">
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
            title={localizationText[language].paymentAmount}
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
      completeTransaction={loanPayment}
    />

  </form>
)

export default LoanPaymentApproval
