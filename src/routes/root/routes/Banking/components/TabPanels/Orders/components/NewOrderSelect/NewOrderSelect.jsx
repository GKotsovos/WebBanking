import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './NewOrderSelect.css';

const callJquery = () => {
  $(document).ready( () => $('.selectpicker').selectpicker() )
}

export const NewOrderSelect = () => (
  <div id="newOrderSelectContainer">
    {callJquery()}
    <label htmlFor="orderSelect">Λογαριασμός Χρέωσης</label>
    <div id="newOrderChoice">
      <select id="orderSelect" className="selectpicker orderSelect form-control" data-show-subtext="true">
        <option>Σε λογαριασμό</option>
        <option>Σε οργανισμό</option>
      </select>
      <button id="newOrderButton" type="button" className="btn btn-default">Νέα εντολή</button>
    </div>
  </div>
)

export default NewOrderSelect
