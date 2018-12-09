import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export class SelectPaymentMethod extends Component {
  componentDidMount() {
    const { activeMethod } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.paymentMethod').selectpicker('val', [activeMethod])
  }

  componentWillReceiveProps() {
    const { activeMethod } = this.props;
    setTimeout(() => $(".selectpicker.paymentMethod").selectpicker('refresh'), 350);
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
          id="paymentMethod"
          className={`selectpicker paymentMethod form-control ${_.isEmpty(activeMethod) ? "" : "notValid"}`}
          data-show-subtext="true"
          title={localizationText[language].selectPayment}
          onChange={(e) => setActivePaymentMethod(e.target.value)}>
          {
            _.map(availablePaymentMethods, (method) => (
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
