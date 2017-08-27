import React from 'react'
import BicInput from '../BicInput'
import CreditAccountInput from '../../../../components/CreditAccountInput'
import BeneficiaryInput from '../../../../components/BeneficiaryInput'
import AmountInput from '../../../../components/AmountInput'
import ChargesSelection from '../../../../components/ChargesSelection'
import './ToForeignBankForm.css';

export const ToForeignBankForm = ({
  bank,
  creditAccount,
  fullName,
  amount,
  chargesBeneficiary,
  setCreditBankBIC,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
  setChargesBeneficiary,
 }) => (
  <div>
    <BicInput
      bank={bank}
      setCreditBankBIC={setCreditBankBIC}
    />
    <CreditAccountInput
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
    <ChargesSelection
      chargesBeneficiary={chargesBeneficiary}
      setChargesBeneficiary={setChargesBeneficiary}
    />
  </div>
)

export default ToForeignBankForm
