import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './NewOrganizationOrder.css';

export const NewOrganizationOrder = () => (
  <div>

    <div className="form-group">
      <label htmlFor="orderOrganizationSelect">Οργανισμός</label>
      <div>
        <select id="orderOrganizationSelect" className="form-control">
          <option>Cosmote</option>
          <option>Vodafone</option>
          <option>ΔΕΗ</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="orderCode">Κωδικός Ανάθεσης</label>
      <input className="form-control" id="orderCode" />
    </div>

    <div className="form-group">
      <label htmlFor="orderComment">Σχόλια</label>
      <textarea className="form-control" rows="3" id="orderComment"></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="startDatePicker">Ημερομηνία Ενεργοποίησης</label>
      <DatePicker id="startDatePicker" weekStartsOnMonday calendarPlacement="top" placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"/>
    </div>

  </div>
)

export default NewOrganizationOrder
