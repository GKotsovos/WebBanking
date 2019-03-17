import React, { Component } from 'react'
import localizationText from './localizationText';

class OrderSelect extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker();
    $('.selectpicker.orderSelect').selectpicker('val', [this.props.activeOrder]);
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.orderSelect").selectpicker('refresh'), 350);
  }

  render() {
    const {
      activeOrder,
      language,
      changeActiveOrderType,
      linkToNewOrder
    } = this.props;
    return (
      <div className="select-order-container">
        <label htmlFor="select-order-dropdown">{localizationText[language].typeOfOder}</label>
        <div className="select-order__dropdown-container">
          <select
            id="select-order-dropdown"
            className="selectpicker select-order__dropdown form-control"
            title={localizationText[language].selectTypeOfOderTitle}
            onChange={(e) => changeActiveOrderType(e.target.value, e.target.options[e.target.options.selectedIndex].dataset.orderType)}>
            <option data-order-type="transfer">{localizationText[language].transferOption}</option>
            <option data-order-type="payment">{localizationText[language].paymentOption}</option>
          </select>
          <button
            type="button"
            className="btn btn-default select-order__button"
            onClick={() => linkToNewOrder(activeOrder)}>
            {localizationText[language].newOrder}
          </button>
        </div>
      </div>
    )
  }
}

export default OrderSelect
