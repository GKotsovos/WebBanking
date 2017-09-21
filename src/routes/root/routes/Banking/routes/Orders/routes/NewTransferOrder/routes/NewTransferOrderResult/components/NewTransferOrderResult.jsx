import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const NewTransferOrderResult = ({
  result,
  errorMessage,
  linkToStart,
  clearNewOrderForm
}) => (
  <TransactionResult
    result={result}
    linkToStart={linkToStart}
    errorMessage={errorMessage}
    clearTransactionForm={clearNewOrderForm}
  />
)

export default NewTransferOrderResult
