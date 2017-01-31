import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './Payment.css';

export const Payment = () => (
  <div>

    <div className="form-group">
      <label htmlFor="paymentAccount">Λογαριασμός Χρέωσης</label>
      <div>
        <select id="paymentAccount" className="form-control">
          <option>GR2201100470000009237465820</option>
          <option>GR2201100470000009237465350</option>
          <option>GR2201100470000009237465700</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="organizationSelect">Οργανισμός</label>
      <div>
        <select id="organizationSelect" className="form-control">
          <option>Cosmote</option>
          <option>Vodafone</option>
          <option>ΔΕΗ</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="paymentCode">Κωδικός Πληρωμής</label>
      <input className="form-control" id="paymentCode" />
    </div>

    <div className="form-group">
      <label htmlFor="amount">Ποσό</label>
      <input className="form-control text-right" id="amount" placeholder="€"/>
    </div>

    <div className="form-group">
      <label htmlFor="paymentDatePicker">Ημερομηνία Εκτέλεσης</label>
      <DatePicker id="paymentDatePicker" weekStartsOnMonday calendarPlacement="top" placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"/>
    </div>

  </div>
)

export default Payment
