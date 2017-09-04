import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const PaymentResult = ({ result, errorMessage, linkToStart, clearPaymentTransactionForm }) => (
  <TransactionResult
    result={result}
    linkToStart={linkToStart}
    errorMessage={errorMessage}
    clearTransactionForm={clearPaymentTransactionForm}
  />
)

export default PaymentResult
