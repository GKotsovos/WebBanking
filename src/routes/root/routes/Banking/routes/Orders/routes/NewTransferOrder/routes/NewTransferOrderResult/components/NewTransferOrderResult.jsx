import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const NewTransferOrderResult = ({
  result,
  errorMessage,
  linkToStart,
  language,
  clearNewOrderForm
}) => (
  <TransactionResult
    result={result}
    linkToStart={linkToStart}
    errorMessage={errorMessage}
    language={language}
    clearTransactionForm={clearNewOrderForm}
  />
)

export default NewTransferOrderResult
