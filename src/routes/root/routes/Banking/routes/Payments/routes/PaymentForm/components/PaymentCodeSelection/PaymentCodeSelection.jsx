import React, { Component, PropTypes } from 'react'
import CreditCardSelection from '../CreditCardSelection'
import LoanSelection from '../LoanSelection'
import PaymentCodeInput from '../PaymentCodeInput'
import './PaymentCodeSelection.css';

class PaymentCodeSelection extends Component {
  render() {
    const {
      creditCards,
      loans,
      paymentCode,
      setPaymentCode,
      paymentType
    } = this.props;

    let paymentView;
    switch (paymentType) {
      case 'isCreditCardAgile':
      case 'isCreditCardThirdParty':
        paymentView = (
          <CreditCardSelection
            creditCardType={paymentType}
            creditCards={creditCards}
            selectedCreditCard={paymentCode}
            setCreditCardForPayment={setPaymentCode}
          />
        )
        break;
      case 'isLoan':
        paymentView =
        <LoanSelection
          loans={loans}
          selectedLoan={paymentCode}
          setLoanForPayment={setPaymentCode}
        />
        break;
      default:
        paymentView = (
          <PaymentCodeInput
            paymentCode={paymentCode}
            setPaymentCode={setPaymentCode}
          />
        )
    }
    return (
      <div className="form-group bottomOfTwoDivs">
        {paymentView}
      </div>
    )
  }
}

export default PaymentCodeSelection
