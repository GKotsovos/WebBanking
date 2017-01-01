import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './TransferInput.css';

export const TransferInput = () => (
  <form id="transferCompletionForm">

    <div className="form-group">
      <label htmlFor="transferIBAN">Προς</label>
      <input className="form-control" id="transferIBAN" placeholder="IBAN" />
      <input className="form-control" id="transferOwner" placeholder="Ονοματεπώνυμο Δικαιούχου" />
    </div>

    <div className="form-group">
      <label htmlFor="transferBankSelect">Τράπεζα</label>
      <div>
        <select id="transferBankSelect" className="form-control">
          <option>Aegean Bank</option>
          <option>Τράπεζα Εσωτερικού</option>
          <option>Τράπεζα Εξωτερικού</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="transferBIC">BIC Τράπεζας</label>
      <input className="form-control" id="transferBIC" placeholder="BIC" />
    </div>

    <div className="form-group">
      <label htmlFor="transferAmount">Ποσό</label>
      <input className="form-control text-right" id="transferAmount" placeholder="€" />
    </div>

    <div className="form-group">
      <label htmlFor="transferComment">Σχόλια</label>
      <textarea className="form-control" rows="3" id="transferComment"></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="transferDate">Εκτέλεση Συναλλαγής</label>
      <div id="transferDate">
        <span id="now">
          <input type="radio" name="transferDate" id="transferNowRadio" value="now" />
          <span id="amesa">Άμεσα</span>
        </span>
        <span id="later">
          <input type="radio" name="transferDate" id="transferLaterRadio" value="later" />
          <span id="stis">Στις</span>
          <DatePicker id="transferDatePicker" weekStartsOnMonday calendarPlacement="top" placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"/>
        </span>
      </div>
    </div>

    <div className="form-group">
      <label id="saveTransfer">
        <input id="saveTransferCheckBox" type="checkbox" />
        <span>Αποθήκευση ως πρότυπο</span>
      </label>
    </div>

    <div id="completionTransferButtons" className="form-group">
      <button id="clearTransferForm" type="button" className="btn btn-default">Καθαρισμός</button>
      <button id="nextTransferForm" type="button" className="btn btn-default">Συνέχεια</button>
    </div>

  </form>
)

export default TransferInput
