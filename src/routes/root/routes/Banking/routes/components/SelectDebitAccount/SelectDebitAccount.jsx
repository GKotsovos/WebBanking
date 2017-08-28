import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './SelectDebitAccount.css';

export class SelectDebitAccount extends Component {
  componentDidMount() {
    const { debitAccount } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transactionDebitAccount').selectpicker('val', [debitAccount.value])
  }

  render(){
    const {
      label,
      debitAccount,
      accounts,
      loans,
      creditCards,
      prepaidCards,
      setDebitAccount
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="transactionDebitAccount">{label}</label>
        <select
          id="transactionDebitAccount"
          className={`selectpicker transactionDebitAccount form-control ${_.isEmpty(debitAccount) || debitAccount.correct ? "" : "notValid"}`}
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
    )
  }
}

export default SelectDebitAccount
