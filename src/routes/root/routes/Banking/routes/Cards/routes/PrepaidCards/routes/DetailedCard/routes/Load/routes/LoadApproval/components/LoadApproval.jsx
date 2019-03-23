import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader';
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow';
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow';
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons';
import localizationText from './localizationText';

export const LoadApproval = ({ transactionForm, language, prepaidCardLoad }) => (
  <form className="col-sm-offset-2 col-sm-8 load-approval">

    <div className="form-group">
      <table className="table table-bordered">
        <TransactionApprovalHeader
          title={localizationText[language].loadDetailsTitle}
        />
        <tbody>
          <SimpleTransactionApprovalRow
            title={localizationText[language].debitAccountTitle}
            value={transactionForm.debitAccount.value}
          />
          <MoneyTransactionApprovalRow
            title={localizationText[language].loadAmountTitle}
            amount={transactionForm.amount.value}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title={localizationText[language].loadExpensesTitle}
            amount={transactionForm.expenses}
            currency={transactionForm.currency}
          />
          <MoneyTransactionApprovalRow
            title={localizationText[language].totalDebitTitle}
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
      completeTransaction={prepaidCardLoad}
    />

  </form>
)

export default LoadApproval
