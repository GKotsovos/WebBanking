import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './CustomerCreditCards.css';

export class CustomerCreditCards extends Component {
  componentDidMount() {
    const { selectedCreditCard } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.paymentCreditCard').selectpicker('val', [selectedCreditCard.value])
  }

  render(){
    const {
      creditCards,
      selectedCreditCard,
      setCreditCardForPayment
    } = this.props;
    return (
      <div className="form-group">
        <select
          id="paymentCreditCard"
          className={`selectpicker paymentCreditCard form-control ${_.isEmpty(selectedCreditCard) || selectedCreditCard.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title="Επιλέξτε δάνειο"
          onChange={
            (e) => setCreditCardForPayment(e.target.value, e.target.options[e.target.options.selectedIndex].className)
          }
        >
        {
          _.map(creditCards, (creditCard) => (
            <option
              key={creditCard.id}
              className="isCreditCard"
              data-subtext={
                `Credit Card ${creditCard.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(creditCard.currency).symbol}`
              }
              value={creditCard.id}
            >
              {_.map(creditCard.id, ((num, key) =>  key % 4 == 0 ? ' ' + num : num ))}
            </option>
          ))
        }
        </select>
      </div>
    )
  }
}

export default CustomerCreditCards
