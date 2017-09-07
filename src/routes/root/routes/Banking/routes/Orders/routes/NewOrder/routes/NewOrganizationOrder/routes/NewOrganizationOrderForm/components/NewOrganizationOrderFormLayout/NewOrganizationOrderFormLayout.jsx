import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './NewOrganizationOrderFormLayout.css';

export const NewOrganizationOrderFormLayout = () => (
  <div>

    <div className="form-group">
      <label htmlFor="orderOrganizationSelect">Οργανισμός</label>
      <div>
        <select id="orderOrganizationSelect" className="selectpicker orderOrganizationSelect form-control">
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
      <label htmlFor="maxAmount">Ανώτατο ποσό χρέωσης</label>
      <input className="form-control text-right" id="maxAmount" placeholder="€"/>
    </div>

    <div className="form-group">
      <label htmlFor="startDatePicker">Ημερομηνία Λήξης</label>
      <DatePicker id="startDatePicker" weekStartsOnMonday calendarPlacement="top" placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"/>
    </div>

  </div>
)

export default NewOrganizationOrderFormLayout
