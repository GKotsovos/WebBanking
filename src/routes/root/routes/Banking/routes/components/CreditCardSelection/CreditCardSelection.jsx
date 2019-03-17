import React, { Component } from 'react'
import CustomerCreditCards from '../CustomerCreditCards';
import CreditCardInput from '../CreditCardInput';

export class CreditCardSelection extends Component {
  render() {
    const {
      creditCardType,
      creditCards,
      selectedCreditCard,
      language,
      setCreditCardForPayment
    } = this.props;

    let creditCardView;
    switch (creditCardType) {
      case 'isCreditCardAgile':
        creditCardView =
          <CustomerCreditCards
            creditCards={creditCards}
            selectedCreditCard={selectedCreditCard}
            language={language}
            setCreditCardForPayment={setCreditCardForPayment}
          />
        break;
      default:
        creditCardView =
          <CreditCardInput
            selectedCreditCard={selectedCreditCard}
            language={language}
            setCreditCardForPayment={setCreditCardForPayment}
          />
    }

    return (
      <div className="form-group">
        {creditCardView}
      </div>
    )
  }
}

export default CreditCardSelection
