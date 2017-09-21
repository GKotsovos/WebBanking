import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import CustomerCreditCards from '../CustomerCreditCards';
import CreditCardInput from '../CreditCardInput';
import _ from 'underscore';
import './CreditCardSelection.css';

export class CreditCardSelection extends Component {
  render(){
    const {
      creditCardType,
      creditCards,
      selectedCreditCard,
      setCreditCardForPayment
    } = this.props;

    let creditCardView;
    switch (creditCardType) {
      case 'isCreditCardAgile':
        creditCardView =
          <CustomerCreditCards
            creditCards={creditCards}
            selectedCreditCard={selectedCreditCard}
            setCreditCardForPayment={setCreditCardForPayment}
          />
        break;
      default:
        creditCardView =
          <CreditCardInput
            selectedCreditCard={selectedCreditCard}
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
