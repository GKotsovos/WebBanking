import React from 'react';
import SimpleTransactionForm from 'routes/root/routes/Banking/routes/components/SimpleTransactionForm';

export const CardPaymentForm = ({
  accounts,
  loans,
  creditCards,
  prepaidCards,
  transactionForm,
  setDebitAccount,
  setAsapCardTransaction,
  setCreditCardPaymentAmount,
  setTransactionDate,
  initCardTransactionForm
}) => (
  <SimpleTransactionForm
    label='Λογαριασμός Χρέωσης'
    debitAccount={transactionForm.debitAccount}
    accounts={accounts}
    loans={loans}
    creditCards={creditCards}
    prepaidCards={prepaidCards}
    setDebitAccount={setDebitAccount}
    amount={transactionForm.amount}
    setTransactionAmount={setCreditCardPaymentAmount}
    date={transactionForm.date}
    setAsapTransaction={setAsapCardTransaction}
    setTransactionDate={setTransactionDate}
    shouldProcess={transactionForm.shouldProcess}
    initTransactionForm={initCardTransactionForm}
    linkToApprovalForm='/banking/cards/creditcards/card/payment/approval'
  />
)

export default CardPaymentForm
