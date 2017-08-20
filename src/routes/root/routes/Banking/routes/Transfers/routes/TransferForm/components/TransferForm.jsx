import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons'
import './TransferForm.css';

class TransferForm extends Component {
  componentDidMount() {
    const { transactionForm } = this.props;
    $('.selectpicker').selectpicker()
    $('.selectpicker').selectpicker('val', [transactionForm.debitAccount.value])
  }

  clearForm() {
    const { initCardTransactionForm } = this.props;
    $('.selectpicker').selectpicker('val', [''])
    initCardTransactionForm();
  }

  render() {
    const {
      accounts,
      loans,
      creditCards,
      prepaidCards,
      transactionForm,
      setDebitAccount,
      setTransferAmount,
      setTransactionDate
    } = this.props;
    return (
      <form id="transferCompletionForm" className="transfersContainer">

        <div className="form-group">
          <label htmlFor="transferSelectAccount">Λογαριασμός Χρέωσης</label>
          <div>
          <select
            className={`selectpicker transferSelectAccount form-control ${_.isEmpty(transactionForm.debitAccount) || transactionForm.debitAccount.correct ? "" : "notValid"}`}
            data-show-subtext="true"
            title="Επιλέξτε λογαριασμό"
            onChange={
              (e) => setDebitAccount(e.target.value, e.target.options[e.target.options.selectedIndex].className)
            }
          >
            {
              _.map(accounts, (account) => (
                <option
                  key={account.iban}
                  className="isAccount"
                  data-subtext={
                    `${account.type} ${account.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(account.currency).symbol}`
                  }
                >
                  {account.iban}
                </option>
              ))
            }
            {
              _.map(loans, (loan) => (
                <option
                  key={loan.id}
                  className="isLoan"
                  data-subtext={
                    `${loan.customTitle} ${loan.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(loan.currency).symbol}`
                  }
                >
                  {loan.id}
                </option>
              ))
            }
            {
              _.map(creditCards, (creditCard) => (
                <option
                  key={creditCard.id}
                  className="isCreditCard"
                  data-subtext={
                    `Credit Card ${creditCard.availableLimit.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(creditCard.currency).symbol}`
                  }
                  value={creditCard.id}
                >
                  {_.map(creditCard.id, ((num, key) =>  key % 4 == 0 ? ' ' + num : num ))}
                </option>
              ))
            }
            {
              _.map(prepaidCards, (prepaidCard) => (
                <option
                  key={prepaidCard.id}
                  className="isPrepaidCard"
                  data-subtext={
                    `Prepaid Card ${prepaidCard.availableLimit.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(prepaidCard.currency).symbol}`
                  }
                  value={prepaidCard.id}
                >
                  {_.map(prepaidCard.id, ((num, key) =>  key % 4 == 0 ? ' ' + num : num ))}
                </option>
              ))
            }
          </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="transferIBAN">Λογαριασμός Πίστωσης</label>
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
          <input
            className={`form-control text-right ${_.isEmpty(transactionForm.amount) || transactionForm.amount.correct ? "" : "notValid"}`}
            id="transferAmount"
            placeholder="€"
            value={transactionForm.amount.value || ""}
            onChange={(e) => setTransferAmount(e.target.value)}
           />
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

        <FormCompletionButtons />

      </form>
    )
  }
}

export default TransferForm
