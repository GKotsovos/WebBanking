import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const CardPaymentResult = ({ result, linkToStart, clearCardTransactionForm }) => (
  <TransactionResult result={result} linkToStart={linkToStart} clearTransactionForm={clearCardTransactionForm} />
)

export default CardPaymentResult
