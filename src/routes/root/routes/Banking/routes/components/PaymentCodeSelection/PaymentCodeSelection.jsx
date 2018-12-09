import React, { Component, PropTypes } from 'react'
import CreditCardSelection from '../CreditCardSelection'
import LoanSelection from '../LoanSelection'
import PaymentCodeInput from '../PaymentCodeInput'

class PaymentCodeSelection extends Component {
  render() {
    const {
      creditCards,
      loans,
      paymentCode,
      language,
      paymentType,
      setPaymentCode,
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
            language={language}
            setCreditCardForPayment={setPaymentCode}
          />
        )
        break;
      case 'isLoan':
        paymentView =
        <LoanSelection
          loans={loans}
          selectedLoan={paymentCode}
          language={language}
          setLoanForPayment={setPaymentCode}
        />
        break;
      default:
        paymentView = (
          <PaymentCodeInput
            paymentCode={paymentCode}
            language={language}
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
