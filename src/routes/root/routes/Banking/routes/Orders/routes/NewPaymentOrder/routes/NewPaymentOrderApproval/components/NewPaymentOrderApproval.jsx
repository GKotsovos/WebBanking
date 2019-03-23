import React from 'react';
import TransactionApprovalHeader from 'routes/root/routes/Banking/routes/components/TransactionApprovalHeader'
import SimpleTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/SimpleTransactionApprovalRow'
import MoneyTransactionApprovalRow from 'routes/root/routes/Banking/routes/components/MoneyTransactionApprovalRow'
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons'
import localizationText from './localizationText';

export const NewPaymentOrderApproval = ({ newOrderForm, language, createPaymentOrder }) => (
  <form className="new-order-approval">
    <table className="table table-bordered new-order-approval__table">
      <TransactionApprovalHeader
        title={localizationText[language].orderDetails}
      />
      <tbody>
        <SimpleTransactionApprovalRow
          title={localizationText[language].debitAccount}
          value={newOrderForm.debitAccount.value}
        />
        <SimpleTransactionApprovalRow
          title={localizationText[language].orderName}
          value={newOrderForm.paymentSelections.paymentMethod}
        />
        <MoneyTransactionApprovalRow
          title={localizationText[language].orderCharges}
          amount={newOrderForm.charges.value}
          currency={newOrderForm.currency.value}
        />
        <SimpleTransactionApprovalRow
          title={localizationText[language].expirationDate}
          value={newOrderForm.endDate.asapOrder ? newOrderForm.endDate.asapText : newOrderForm.endDate.view}
        />
      </tbody>
    </table>
    <TransactionApprovalButtons
      language={language}
      completeTransaction={() => createPaymentOrder(newOrderForm)}
    />
  </form>
)

export default NewPaymentOrderApproval
