import React from 'react';
import DatePicker from 'react-bootstrap-date-picker'
import './FieldCompletion.css';

export const FieldCompletion = () => (
  <form id="completionForm">

    <div className="form-group">
      <label htmlFor="IBANInput">Προς</label>
      <input className="form-control" id="IBANInput" placeholder="IBAN" />
      <input className="form-control" id="ownerInput" placeholder="Ονοματεπώνυμο Δικαιούχου" />
    </div>

    <div className="form-group">
      <label htmlFor="bankSelect">Τράπεζα</label>
      <div>
        <select id="bankSelect" className="form-control selectpicker">
          <option>Aegean Bank</option>
          <option>Τράπεζα Εσωτερικού</option>
          <option>Τράπεζα Εξωτερικού</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="ammountInput">Ποσό</label>
      <input className="form-control text-right" id="ammountInput" placeholder="€" />
    </div>

    <div className="form-group">
      <label htmlFor="ammountInput">Σχόλια</label>
      <textarea className="form-control" rows="3" id="comment"></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="chooseDate">Εκτέλεση Συναλλαγής</label>
      <div id="chooseDate">
        <span id="now">
          <input type="radio" name="chooseDate" id="transferNowRadio" value="now" />
          <span id="amesa">Άμεσα</span>
        </span>
        <span id="later">
          <input type="radio" name="chooseDate" id="transferLaterRadio" value="later" />
          <span id="stis">Στις</span>
          <DatePicker id="datePicker" weekStartsOnMonday calendarPlacement="top" />
        </span>
      </div>
    </div>

    <div className="form-group">
      <label id="saveMovement">
        <input id="saveCheckBox" type="checkbox" />
        <span>Αποθήκευση ως πρότυπο</span>
      </label>
    </div>

    <div id="completionFormButtons" className="form-group">
      <button id="clearCompletionForm" type="button" className="btn btn-default">Καθαρισμός</button>
      <button id="nextForm" type="button" className="btn btn-default">Συνέχεια</button>
    </div>

  </form>
)

export default FieldCompletion
