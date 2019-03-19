import React, { Component } from 'react'
import currencyFormatter from 'currency-formatter';
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export class SelectCustomerAccounts extends Component {
  componentDidMount() {
    const { creditAccount } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transfer-order__credit-account').selectpicker('val', [creditAccount.value])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.transfer-order__credit-account").selectpicker('refresh'), 350);
  }

  render() {
    const {
      accounts,
      creditAccount,
      language,
      setCreditAccount
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="transfer-order-credit-account">{localizationText[language].to}</label>
        <select
          id="transfer-order-credit-account"
          className={`selectpicker transfer-order__credit-account form-control ${isEmpty(creditAccount) || creditAccount.correct ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectAccountTitle}
          onChange={
            (e) => setCreditAccount(e.target.value, e.target.options[e.target.options.selectedIndex].dataset.accountType)
          }
        >
          {
            accounts.map(account => (
              <option
                key={account.id}
                data-account-type="isAccount"
                data-subtext={`${account.type} ${account.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})}${currencyFormatter.findCurrency(account.currency).symbol}`}>
                {account.id}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default SelectCustomerAccounts
