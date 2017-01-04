import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './NewAccountOrder.css';

export const NewAccountOrder = () => (
  <div>

    <div className="form-group">
      <label htmlFor="orderIBAN">Προς</label>
      <input className="form-control" id="orderIBAN" placeholder="IBAN" />
      <input className="form-control" id="orderOwner" placeholder="Ονοματεπώνυμο Δικαιούχου" />
    </div>

    <div className="form-group">
      <label htmlFor="orderBankSelect">Τράπεζα</label>
      <div>
        <select id="orderBankSelect" className="form-control">
          <option>Agile Bank</option>
          <option>Τράπεζα Εσωτερικού</option>
          <option>Τράπεζα Εξωτερικού</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="orderBIC">BIC Τράπεζας</label>
      <input className="form-control" id="orderBIC" placeholder="BIC" />
    </div>

    <div className="form-group">
      <label htmlFor="orderAmount">Ποσό</label>
      <input className="form-control text-right" id="orderAmount" placeholder="€" />
    </div>

    <div className="form-group">
      <label htmlFor="orderComment">Σχόλια</label>
      <textarea className="form-control" rows="3" id="orderComment"></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="startDatePicker">Ημερομηνία Ενεργοποίησης</label>
      <DatePicker id="startDatePicker" weekStartsOnMonday calendarPlacement="top" placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"/>
    </div>

    <div className="row">
      <div className="col-xs-12">

        <div className="form-group col-xs-6">
          <label htmlFor="periodSelect">Περιοδικότητα</label>
          <select id="periodSelect" className="form-control">
            <option>Κάθε μήνα</option>
            <option>Κάθε δύο μήνες</option>
            <option>Κάθε τρεις μήνες</option>
            <option>Κάθε τέσσερις μήνες</option>
            <option>Κάθε πέντε μήνες</option>
            <option>Κάθε έξι μήνες</option>
            <option>Κάθε έτος</option>
          </select>
        </div>

        <div className="form-group col-xs-6">
          <label id="times" htmlFor="timesInput">Πλήθος εκτελέσεων</label>
          <input className="form-control" id="timesInput" />
        </div>

      </div>
    </div>

  </div>
)

export default NewAccountOrder
