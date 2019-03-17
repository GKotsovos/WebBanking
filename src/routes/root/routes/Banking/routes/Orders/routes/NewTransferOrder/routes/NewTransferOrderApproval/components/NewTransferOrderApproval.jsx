import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import localizationText from './localizationText';

export const NewTransferOrderApproval = ({ newOrderForm, language, createTransferOrder }) => (
  <form>
    <table className="table table-bordered new-order-approval__table">
      <TransactionApprovalHeader
        title={localizationText[language].orderDetails}
      />
      <tbody>
        <SimpleTransactionApprovalRow
          title={localizationText[language].orderTitle}
          value={newOrderForm.customTitle.value}
        />
        <SimpleTransactionApprovalRow
          title={localizationText[language].debitAccount}
          value={newOrderForm.debitAccount.value}
        />
        <SimpleTransactionApprovalRow
          title={localizationText[language].beneficiaryAccount}
          value={newOrderForm.beneficiaryAccount.value}
        />
        <SimpleTransactionApprovalRow
          title={localizationText[language].beneficiaryFullName}
          value={newOrderForm.beneficiaryFullName.value}
        />
        <MoneyTransactionApprovalRow
          title={localizationText[language].orderAmount}
          amount={newOrderForm.amount.value}
          currency={newOrderForm.currency.value}
        />
        {
          newOrderForm.beneficiaryBankType.value != 'agileBank' ? (
            <SimpleTransactionApprovalRow
              title={localizationText[language].chargesBeneficiary}
              value={newOrderForm.chargesBeneficiary.selection}
            />
          ) : null
        }
        <SimpleTransactionApprovalRow
          title={localizationText[language].startDate}
          value={newOrderForm.startDate.asapTransaction ? newOrderForm.startDate.asapText : newOrderForm.startDate.view}
        />
        <SimpleTransactionApprovalRow
          title={localizationText[language].executionFrequency}
          value={newOrderForm.periodicity.value}
        />
        <SimpleTransactionApprovalRow
          title={localizationText[language].timesOfExecution}
          value={newOrderForm.timesOfExecution.value}
        />
        {
          newOrderForm.comments.value != '' ? (
            <SimpleTransactionApprovalRow
              title={localizationText[language].comments}
              value={newOrderForm.comments.value}
            />
          ) : null
        }
      </tbody>
    </table>
    <TransactionApprovalButtons
      language={language}
      completeTransaction={() => createTransferOrder(newOrderForm)}
    />
  </form>
)

export default NewTransferOrderApproval
