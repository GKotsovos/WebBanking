import React, { Component, PropTypes } from 'react'
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
      changeActiveOrderType,
      linkToNewOrder
    } = this.props;
    return (
      <div id="orderSelectContainer">
        <label htmlFor="orderSelect">Τύπος πάγιας εντολής</label>
        <div id="newOrderChoice">
          <select
            id="orderSelect"
            className="selectpicker orderSelect form-control"
            title="Επιλέξτε τύπο πάγιας εντολής"
            onChange={(e) => changeActiveOrderType(e.target.value, e.target.options[e.target.options.selectedIndex].className)}>
            <option className="transfer">Μεταφορά</option>
            <option className="payment">Πληρωμή</option>
          </select>
          <button
            id="newOrderButton"
            type="button"
            className="btn btn-default"
            onClick={() => linkToNewOrder(activeOrder)}>
            Νέα εντολή
          </button>
        </div>
      </div>
    )
  }
}

export default OrderSelect
