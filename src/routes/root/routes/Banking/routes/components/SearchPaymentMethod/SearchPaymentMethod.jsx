import React, { Component } from 'react'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export class SearchPaymentMethod extends Component {
  componentDidMount() {
    const { activeMethod } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.search-payment-method__dropdown').selectpicker('val', [activeMethod])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.search-payment-method__dropdown").selectpicker('refresh'), 350);
  }

  render() {
    const {
      availablePaymentMethods,
      activeMethod,
      language,
      setActivePaymentMethod
    } = this.props;
    return (
      <div className="form-group">
        <select
          className={`selectpicker search-payment-method__dropdown form-control ${isEmpty(activeMethod) ? "" : "invalid-value"}`}
          data-live-search="true"
          title={localizationText[language].selectPaymentTitle}
          onChange={
            (e) => setActivePaymentMethod(e.target.value)
          }
        >
        {
          availablePaymentMethods.map(paymentMethod => (
            <option
              key={paymentMethod}
              value={paymentMethod}
            >
              {paymentMethod}
            </option>
          ))
        }
        </select>
      </div>
    )
  }
}

export default SearchPaymentMethod
