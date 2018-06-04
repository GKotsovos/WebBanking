import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import localizationText from './localizationText';
import './SelectCustomerAccounts.css';

export class SelectCustomerAccounts extends Component {
  componentDidMount() {
    const { creditAccount } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferOrderCreditAccount').selectpicker('val', [creditAccount.value])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.transferOrderCreditAccount").selectpicker('refresh'), 350);
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
        <label htmlFor="transferOrderCreditAccount">{localizationText[language].to}</label>
        <select
          id="transferOrderCreditAccount"
          className={`selectpicker transferOrderCreditAccount form-control ${_.isEmpty(creditAccount) || creditAccount.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title={localizationText[language].selectAccountTitle}
          onChange={
            (e) => setCreditAccount(e.target.value, e.target.options[e.target.options.selectedIndex].className)
          }
        >
          {
            _.map(accounts, (account) => (
              <option
                key={account.id}
                className="isAccount"
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
