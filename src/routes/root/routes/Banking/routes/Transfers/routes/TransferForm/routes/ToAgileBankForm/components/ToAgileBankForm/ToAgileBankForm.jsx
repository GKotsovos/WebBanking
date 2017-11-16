import React, { Component, PropTypes } from 'react';
import CreditAgileAccountSelection from 'routes/root/routes/Banking/routes/components/CreditAgileAccountSelection';
import BeneficiaryFullNameInput from 'routes/root/routes/Banking/routes/components/BeneficiaryFullNameInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import localizationText from './localizationText';

class ToAgileBankForm extends Component {
  componentWillMount() {
    this.props.initTransferToAgileTransactionForm();
  }

  render() {
    const {
      accounts,
      creditAccount,
      fullName,
      amount,
      language,
      setCreditAccount,
      setCreditFullName,
      setTransferAmount,
    } = this.props;
    return (
     <div>
       <CreditAgileAccountSelection
         accounts={accounts}
         creditAccount={creditAccount}
         language={language}
         setCreditAccount={setCreditAccount}
       />
       {
         creditAccount.type == 'other' ?
           <BeneficiaryFullNameInput
             fullName={fullName}
             language={language}
             setCreditFullName={setCreditFullName}
           /> : null
       }
       <AmountInput
         title={localizationText[language].amount}
         amount={amount}
         language={language}
         setTransactionAmount={setTransferAmount}
       />
     </div>

    )
  }
}

export default ToAgileBankForm
