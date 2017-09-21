import React, { Component, PropTypes } from 'react';
import CreditAgileAccountSelection from '../CreditAgileAccountSelection';
import BeneficiaryInput from '../../../../components/BeneficiaryInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';

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
      setCreditAccount,
      setCreditFullName,
      setTransferAmount,
    } = this.props;
    return (
     <div>
       <CreditAgileAccountSelection
         accounts={accounts}
         creditAccount={creditAccount}
         setCreditAccount={setCreditAccount}
       />
       {
         creditAccount.type == 'other' ?
           <BeneficiaryInput
             fullName={fullName}
             setCreditFullName={setCreditFullName}
           /> : null
       }
       <AmountInput
         title='Ποσό'
         amount={amount}
         setTransactionAmount={setTransferAmount}
       />
     </div>

    )
  }
}

export default ToAgileBankForm
