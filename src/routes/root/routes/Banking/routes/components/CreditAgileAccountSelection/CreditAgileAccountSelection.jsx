import React, { Component } from 'react'
import currencyFormatter from 'currency-formatter';
import localizationText from './localizationText';
import _ from 'underscore';

class CreditAgileAccountSelection extends Component {
  componentDidMount() {
    const { creditAccount } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.credit-agile-account-selection__dropdown').selectpicker('val', [creditAccount ? creditAccount.value : '']);
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.credit-agile-account-selection__dropdown").selectpicker('refresh'), 350);
  }

  render() {
    const {
      accounts,
      creditAccount,
      language,
      setCreditAccount,
    } = this.props;

    return (
      <div
        className="form-group">
        <label htmlFor="credit-agile-account-selection-dropdown">{localizationText[language].to}</label>
        <select
          id="credit-agile-account-selection-dropdown"
          className={`selectpicker credit-agile-account-selection__dropdown form-control ${_.isEmpty(creditAccount) || creditAccount.type != "" ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectAccountTitle}
          onChange={(e) => setCreditAccount(e.target.value, e.target.options[e.target.options.selectedIndex].dataset.value)}>
          {
            _.map(accounts, (account) => (
              <option
                key={account.id}
                data-value="isAccount"
                data-subtext={`${account.type} ${account.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(account.currency).symbol}`}>
                {account.id}
              </option>
            ))
          }
          <option data-value="other">{localizationText[language].thirdPartyLanguage}</option>
        </select>
      </div>
    )
  }
}

export default CreditAgileAccountSelection
