import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import localizationText from './localizationText';

export const TransferApproval = ({ transactionForm, language, transfer }) => (
  <form id="transferApprovalForm">

    <div id="transferApprovalTable" className="form-group">
      <table className="table table-bordered">
        <TransactionApprovalHeader
          title={localizationText[language].transferDetails}
        />
        <tbody>
          <SimpleTransactionApprovalRow
            title={localizationText[language].debitAccount}
            value={transactionForm.debitAccount.value}
          />
          <SimpleTransactionApprovalRow
            title={localizationText[language].creditAccount}
            value={transactionForm.creditAccount.value}
          />
          {
            transactionForm.creditAccount.type != 'isAccount' ?
            <SimpleTransactionApprovalRow
              title={localizationText[language].beneficiary}
              value={transactionForm.fullName.value}
            /> : null
          }
          {
            transactionForm.bankType.value == 'foreignBank' ?
            <SimpleTransactionApprovalRow
              title={localizationText[language].bic}
              value={transactionForm.bank.bic}
            /> : <SimpleTransactionApprovalRow
              title={localizationText[language].bank}
              value={transactionForm.bank.name}
            />
          }
          <MoneyTransactionApprovalRow
            title={localizationText[language].amount}
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
          {
            transactionForm.comments.value != '' ?
            <SimpleTransactionApprovalRow
              title={localizationText[language].comments}
              value={transactionForm.comments.value}
            /> : null
          }

        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons
      language={language}
      completeTransaction={() => transfer(transactionForm)}
    />

  </form>
)

export default TransferApproval
