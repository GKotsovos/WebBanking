import React, { Component, PropTypes } from 'react'
import CreditCardSelection from '../CreditCardSelection'
import LoanSelection from '../LoanSelection'
import './PaymentCodeSelection.css';

class PaymentCodeSelection extends Component {
  render() {
    const {
      creditCards,
      loans,
      paymentCode,
      setPaymentCode,
    } = this.props;

    let paymentView;
    switch (paymentType) {
      case 'creditCard':
        paymentView = <CreditCardSelection creditCards={creditCards} />
        break;
      case 'loan':
        paymentView = <LoanSelection loans={loans} />
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
