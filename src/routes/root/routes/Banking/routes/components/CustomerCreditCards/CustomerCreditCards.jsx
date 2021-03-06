import React, { Component } from 'react'
import currencyFormatter from 'currency-formatter';
import { isEmpty } from 'underscore';
import { formatCardNumber } from 'routes/root/routes/Banking/routes/utils/commonUtils';
import localizationText from './localizationText';

export class CustomerCreditCards extends Component {
  componentDidMount() {
    const { selectedCreditCard } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.customer-credit-cards__dropdown').selectpicker('val', [selectedCreditCard.value])
  }

  render() {
    const {
      creditCards,
      selectedCreditCard,
      language,
      setCreditCardForPayment
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="customer-credit-cards-dropdown">{localizationText[language].creditCardTitle}</label>
        <select
          id="customer-credit-cards-dropdown"
          className={`selectpicker customer-credit-cards__dropdown form-control ${isEmpty(selectedCreditCard) || selectedCreditCard.correct ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectCreditCardTitle}
          onChange={
            (e) => setCreditCardForPayment(e.target.value, e.target.options[e.target.options.selectedIndex].className)
          }
        >
        {
          creditCards.map(creditCard => (
            <option
              key={creditCard.id}
              className="isCreditCard"
              data-subtext={
                `Credit Card ${creditCard.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(creditCard.currency).symbol}`
              }
              value={creditCard.id}
            >
              {formatCardNumber(creditCard.id)}
            </option>
          ))
        }
        </select>
      </div>
    )
  }
}

export default CustomerCreditCards
