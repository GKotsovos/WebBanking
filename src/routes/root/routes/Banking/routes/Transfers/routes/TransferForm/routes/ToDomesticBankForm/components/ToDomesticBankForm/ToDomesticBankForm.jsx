import React, { Component, PropTypes } from 'react'
import DomesticBankSelection from '../DomesticBankSelection'
import CreditAccountInput from '../../../../components/CreditAccountInput'
import BeneficiaryFullNameInput from 'routes/root/routes/Banking/routes/components/BeneficiaryFullNameInput'
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import ChargesSelection from 'routes/root/routes/Banking/routes/components/ChargesSelection'

class ToDomesticBankForm extends Component {
  componentWillMount() {
    this.props.initTransferToDomesticTransactionForm();
  }

  render() {
    const {
      bank,
      domesticBanks,
      creditAccount,
      fullName,
      amount,
      chargesBeneficiary,
      setCreditBank,
      setCreditAccount,
      setCreditFullName,
      setTransferAmount,
      setChargesBeneficiary,
    } = this.props;
    return (
     <div>
       <DomesticBankSelection
         bank={bank}
         domesticBanks={domesticBanks}
         setCreditBank={setCreditBank}
       />
       <CreditAccountInput
         creditAccount={creditAccount}
         setCreditAccount={setCreditAccount}
       />
       <BeneficiaryFullNameInput
         fullName={fullName}
         setCreditFullName={setCreditFullName}
       />
       <AmountInput
         title='Ποσό'
         amount={amount}
         setTransactionAmount={setTransferAmount}
       />
       <ChargesSelection
         chargesBeneficiary={chargesBeneficiary}
         setChargesBeneficiary={setChargesBeneficiary}
       />
     </div>
    )
  }
}

export default ToDomesticBankForm
