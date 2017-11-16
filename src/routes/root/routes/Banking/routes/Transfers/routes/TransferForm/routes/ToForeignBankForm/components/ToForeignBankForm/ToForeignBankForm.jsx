import React, { Component, PropTypes } from 'react'
import BicInput from '../BicInput'
import CreditAccountInput from 'routes/root/routes/Banking/routes/components/CreditAccountInput';
import BeneficiaryFullNameInput from 'routes/root/routes/Banking/routes/components/BeneficiaryFullNameInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import ChargesSelection from 'routes/root/routes/Banking/routes/components/ChargesSelection';
import localizationText from './localizationText';

class ToForeignBankForm extends Component {
  componentWillMount() {
    this.props.initTransferToForeignTransactionForm();
  }

  render() {
    const {
      bank,
      creditAccount,
      fullName,
      amount,
      chargesBeneficiary,
      language,
      setCreditBankBIC,
      setCreditAccount,
      setCreditFullName,
      setTransferAmount,
      setChargesBeneficiary,
    } = this.props;
    return (
     <div>
       <BicInput
         bank={bank}
         language={language}
         setCreditBankBIC={setCreditBankBIC}
       />
       <CreditAccountInput
         creditAccount={creditAccount}
         language={language}
         setCreditAccount={setCreditAccount}
       />
       <BeneficiaryFullNameInput
         fullName={fullName}
         language={language}
         setCreditFullName={setCreditFullName}
       />
       <AmountInput
         title={localizationText[language].amount}
         amount={amount}
         setTransactionAmount={setTransferAmount}
       />
       <ChargesSelection
         chargesBeneficiary={chargesBeneficiary}
         language={language}
         setChargesBeneficiary={setChargesBeneficiary}
       />
     </div>
    )
  }
}

export default ToForeignBankForm
