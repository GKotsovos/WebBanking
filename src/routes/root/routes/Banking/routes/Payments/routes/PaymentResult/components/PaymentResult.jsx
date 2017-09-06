import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const PaymentResult = ({ result, errorMessage, linkToStart, initPaymentTransactionForm }) => (
  <TransactionResult
    result={result}
    linkToStart={linkToStart}
    errorMessage={errorMessage}
    clearTransactionForm={initPaymentTransactionForm}
  />
)

export default PaymentResult
