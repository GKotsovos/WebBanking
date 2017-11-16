import React, { Component, PropTypes } from 'react'
import localizationText from './localizationText';
import './OrderSelect.css';

class OrderSelect extends Component {
  componentDidMount() {
    let { activeOrder, changeActiveOrderType } = this.props;
    if (!activeOrder) {
      if (localStorage.path.includes('transfer')) {
        activeOrder = 'Μεταφορά';
        changeActiveOrderType(activeOrder, 'transfer')
      } else if (localStorage.path.includes('payment')) {
        activeOrder = 'Πληρωμή';
        changeActiveOrderType(activeOrder, 'payment')
      } else {
        activeOrder = '';
      }
    }
    $('.selectpicker').selectpicker();
    $('.selectpicker.orderSelect').selectpicker('val', [activeOrder]);
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
      <div id="orderSelectContainer">
        <label htmlFor="orderSelect">{localizationText[language].typeOfOder}</label>
        <div id="newOrderChoice">
          <select
            id="orderSelect"
            className="selectpicker orderSelect form-control"
            title={localizationText[language].selectTypeOfOderTitle}
            onChange={(e) => changeActiveOrderType(e.target.value, e.target.options[e.target.options.selectedIndex].className)}>
            <option className="transfer">{localizationText[language].transferOption}</option>
            <option className="payment">{localizationText[language].paymentOption}</option>
          </select>
          <button
            id="newOrderButton"
            type="button"
            className="btn btn-default"
            onClick={() => linkToNewOrder(activeOrder)}>
            {localizationText[language].newOrder}
          </button>
        </div>
      </div>
    )
  }
}

export default OrderSelect
