import React, { Component } from 'react'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export class SelectPaymentMethod extends Component {
  componentDidMount() {
    const { activeMethod } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.select-payment-method__dropdown').selectpicker('val', [activeMethod])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.select-payment-method__dropdown").selectpicker('refresh'), 350);
  }

  render() {
    const {
      availablePaymentMethods,
      activeMethod,
      language,
      setActivePaymentMethod,
    } = this.props;
    return (
      <div className="form-group">
        <select
          className={`selectpicker select-payment-method__dropdown form-control ${isEmpty(activeMethod) ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectPayment}
          onChange={(e) => setActivePaymentMethod(e.target.value)}>
          {
            availablePaymentMethods.map(method => (
              <option key={method}>
                {method}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default SelectPaymentMethod
