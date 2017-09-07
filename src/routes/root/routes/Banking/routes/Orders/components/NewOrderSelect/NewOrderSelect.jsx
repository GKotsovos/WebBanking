import React, { Component, PropTypes } from 'react'
import './NewOrderSelect.css';

class NewOrderSelect extends Component {
  componentDidMount() {
    const { typeOfOrder } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.orderSelect').selectpicker('val', [typeOfOrder.value]);
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.orderSelect").selectpicker('refresh'), 350);
  }

  render() {
    const {
      children,
      orderType,
      setOrderType,
      setNewOrder
    } = this.props;
    return (
      <div id="newOrderSelectContainer">
        <label htmlFor="orderSelect">Τύπος πάγιας εντολής</label>
        <div id="newOrderChoice">
          <select
            id="orderSelect"
            className={`selectpicker orderSelect form-control ${_.isEmpty(orderType) || orderType.correct ? "" : "notValid"}`}
            data-show-subtext="true"
            title="Επιλέξτε τύπο πάγιας εντολής"
            onChange={(e) => setOrderType(e.target.value, e.target.options[e.target.options.selectedIndex].className)}>
            <option className="accountOrder">Σε λογαριασμό</option>
            <option className="organizationOrder">Σε οργανισμό</option>
          </select>
          <button
            id="newOrderButton"
            type="button"
            className="btn btn-default"
            onClick={() => setNewOrder()}>
            Νέα εντολή
          </button>
        </div>
      </div>
    )
  }
}

export default NewOrderSelect
