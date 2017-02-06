import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './NewOrderSelect.css';

export const NewOrderSelect = () => (
  <div id="newOrderSelectContainer">
    <label htmlFor="orderSelect">Επιλογή Εντολής</label>
    <div id="newOrderChoice">
      <select id="orderSelect" className="form-control">
        <option>Σε λογαριασμό</option>
        <option>Σε οργανισμό</option>
      </select>
      <button id="newOrderButton" type="button" className="btn btn-default">Νέα εντολή</button>
    </div>
  </div>
)

export default NewOrderSelect
