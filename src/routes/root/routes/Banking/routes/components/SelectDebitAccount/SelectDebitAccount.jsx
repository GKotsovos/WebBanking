import React, { Component } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import localizationText from './localizationText';

export class SelectDebitAccount extends Component {
  componentDidMount() {
    const { debitAccount } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.select-debit-account__dropdown').selectpicker('val', [debitAccount.value])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.select-debit-account__dropdown").selectpicker('refresh'), 350);
  }

  render() {
    const {
      label,
      debitAccount,
      accounts,
      loans,
      creditCards,
      prepaidCards,
      language,
      setDebitAccount
    } = this.props;
    return (
      <div className="form-group select-debit-account">
        <label htmlFor="select-debit-account-dropdown">{label}</label>
        <select
          id="select-debit-account-dropdown"
          className={`selectpicker select-debit-account__dropdown form-control ${_.isEmpty(debitAccount) || debitAccount.correct ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectAccountTitle}
          onChange={(e) => setDebitAccount(e.target.value, e.target.options[e.target.options.selectedIndex].dataset.value)}>
          {
            _.map(accounts, (account) => (
              <option
                key={account.id}
                data-value="isAccount"
                data-subtext={
                  `${account.type} ${account.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(account.currency).symbol}`
                }>
                {account.id}
              </option>
            ))
          }
          {
            _.map(loans, (loan) => (
              <option
                key={loan.id}
                data-value="isLoan"
                data-subtext={
                  `${loan.customTitle} ${loan.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(loan.currency).symbol}`
                }>
                {loan.id}
              </option>
            ))
          }
          {
            _.map(creditCards, (creditCard) => (
              <option
                key={creditCard.id}
                data-value="isCreditCard"
                data-subtext={
                  `Credit Card ${creditCard.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(creditCard.currency).symbol}`
                }
                value={creditCard.id}>
                {_.map(creditCard.id, ((num, key) =>  key % 4 == 0 ? ' ' + num : num ))}
              </option>
            ))
          }
          {
            _.map(prepaidCards, (prepaidCard) => (
              <option
                key={prepaidCard.id}
                data-value="isPrepaidCard"
                data-subtext={
                  `Prepaid Card ${prepaidCard.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(prepaidCard.currency).symbol}`
                }
                value={prepaidCard.id}>
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
