import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './TransferInput.css';

const callJquery = () => {
  $(document).ready( () => $('.selectpicker').selectpicker() )
}

export const TransferInput = () => (
  <form className="transfersContainer" id="transferCompletionForm">

    {callJquery()}
    <div className="form-group">
      <label htmlFor="transferSelectAccount">Από</label>
      <div>
      <select className="selectpicker transferSelectAccount form-control" data-show-subtext="true">
        <option data-subtext="Μισθοδοσία 525,00€">
          <span className="fromIBANText">GR2201100470000009237465820</span>
        </option>
        <option data-subtext="Αποταμίευση 1525,00€">
          <span className="fromIBANText">GR2201100470000009237465350</span>
        </option>
        <option data-subtext="Αποταμίευση 5425,00€">
          <span className="fromIBANText">GR2201100470000009237465700</span>
        </option>
      </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="transferIBAN">Προς</label>
      <input className="form-control" id="transferIBAN" placeholder="IBAN" />
      <input className="form-control" id="transferOwner" placeholder="Ονοματεπώνυμο Δικαιούχου" />
    </div>

    <div className="form-group">
      <label htmlFor="transferBankSelect">Τράπεζα</label>
      <div>
        <select id="transferBankSelect" className="selectpicker transferBankSelect form-control">
          <option>Agile Bank</option>
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
      <label htmlFor="transferSelectCharges">Επιβάρυνση Εξόδων</label>
      <div>
      <select className="selectpicker transferSelectCharges form-control" data-show-subtext="true">
        <option data-subtext="3,00€">
          <span className="chargesText">Να επιβαρυνθώ μόνο με τα έξοδα της τράπεζας μου</span>
        </option>
        <option data-subtext="6,00€">
          <span className="chargesText">Να επιβαρυνθώ με όλα τα έξοδα</span>
        </option>
        <option data-subtext="0,00€">
          <span className="chargesText">Να επιβαρυνθεί ο δικαιούχος με όλα τα έξοδα</span>
        </option>
      </select>
      </div>
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
