import React from 'react'
import _ from 'underscore';
import './SelectWayOfSelection.css';

export const SelectWayOfSelection = ({ setSearchPayment, shouldSearch }) => (
  <div id="wayOfSelection" className="form-group">
    <label htmlFor="selectWayOfSelection">Πληρωμή</label>
    <div id="selectWayOfSelection">
      <span
        id="select"
        onClick={() => setSearchPayment(false)}>
        <input
          type="radio"
          name="wayOfSelection"
          onChange={() => setSearchPayment(false)}
          checked={!shouldSearch}
        />
        Επιλογή
      </span>
      <span
        id="search"
        onClick={() => setSearchPayment(true)}>
        <input
          type="radio"
          name="wayOfSelection"
          onChange={() => setSearchPayment(true)}
          checked={shouldSearch}
        />
        Αναζήτηση
      </span>
    </div>
  </div>
)

export default SelectWayOfSelection
