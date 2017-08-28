import React from 'react'
import SimpleTransactionForm from 'routes/root/routes/Banking/routes/components/SimpleTransactionForm';

export const LoadForm = ({
  accounts,
  creditCards,
  prepaidCards,
  loans,
  transactionForm,
  setDebitAccount,
  setPrepaidCardLoadAmount,
  setAsapCardTransaction,
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
    setTransactionAmount={setPrepaidCardLoadAmount}
    date={transactionForm.date}
    setAsapTransaction={setAsapCardTransaction}
    setTransactionDate={setTransactionDate}
    shouldProcess={transactionForm.shouldProcess}
    initTransactionForm={initCardTransactionForm}
    linkToApprovalForm='/banking/cards/prepaidcards/card/load/approval'
  />
)

export default LoadForm
