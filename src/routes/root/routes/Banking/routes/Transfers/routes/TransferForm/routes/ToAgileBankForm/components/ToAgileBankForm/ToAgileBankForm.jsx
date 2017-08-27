import React from 'react'
import CreditAgileAccountSelection from '../CreditAgileAccountSelection'
import BeneficiaryInput from '../../../../components/BeneficiaryInput'
import AmountInput from '../../../../components/AmountInput'
import './ToAgileBankForm.css';

export const ToAgileBankForm = ({
  accounts,
  creditAccount,
  fullName,
  amount,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
 }) => (
  <div>
    <CreditAgileAccountSelection
      accounts={accounts}
      creditAccount={creditAccount}
      setCreditAccount={setCreditAccount}
    />
    <BeneficiaryInput
      fullName={fullName}
      setCreditFullName={setCreditFullName}
    />
    <AmountInput
      amount={amount}
      setTransferAmount={setTransferAmount}
    />
  </div>
)

export default ToAgileBankForm
