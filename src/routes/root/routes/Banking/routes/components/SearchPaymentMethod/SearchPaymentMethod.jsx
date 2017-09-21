import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './SearchPaymentMethod.css';

export class SearchPaymentMethod extends Component {
  componentDidMount() {
    const { activeMethod } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.searchPayment').selectpicker('val', [activeMethod])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.searchPayment").selectpicker('refresh'), 350);
  }

  render(){
    const {
      availablePaymentMethods,
      activeMethod,
      setActivePaymentMethod
    } = this.props;
    return (
      <div className="form-group">
        <select
          id="searchPayment"
          className={`selectpicker searchPayment form-control ${_.isEmpty(activeMethod) ? "" : "notValid"}`}
          data-live-search="true"
          title="Αναζητήστε πληρωμή"
          onChange={
            (e) => setActivePaymentMethod(e.target.value)
          }
        >
        {
          _.map(availablePaymentMethods, (paymentMethod) => (
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
