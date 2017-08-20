import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const LoanPaymentResult = ({ result, errorMessage, linkToStart, clearLoanTransactionForm }) => (
  <TransactionResult
    result={result}
    linkToStart={linkToStart}
    errorMessage={errorMessage}
    clearTransactionForm={clearLoanTransactionForm}
  />
)

export default LoanPaymentResult
