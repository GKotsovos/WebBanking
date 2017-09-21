import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';

class CreditAgileAccountSelection extends Component {
  componentDidMount() {
    const { creditAccount } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferCreditAccountType').selectpicker('val', [creditAccount ? creditAccount.value : '']);
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.transferCreditAccountType").selectpicker('refresh'), 350);
  }

  render() {
    const {
      accounts,
      creditAccount,
      setCreditAccount,
    } = this.props;

    return (
      <div
        className="form-group">
        <label htmlFor="transferCreditAccountType">Προς</label>
        <select
          id="transferCreditAccountType"
          className={`selectpicker transferCreditAccountType form-control ${_.isEmpty(creditAccount) || creditAccount.type != "" ? "" : "notValid"}`}
          data-show-subtext="true"
          title="Λογαριασμός πίστωσης"
          onChange={
            (e) => setCreditAccount(e.target.value, e.target.options[e.target.options.selectedIndex].className)
          }
        >
          {
            _.map(accounts, (account) => (
              <option
                key={account.id}
                className="isAccount"
                data-subtext={
                  `${account.type} ${account.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(account.currency).symbol}`
                }
              >
                {account.id}
              </option>
            ))
          }
          <option className="other" value="">Λογαριασμός Τρίτου</option>
        </select>
      </div>
    )
  }
}

export default CreditAgileAccountSelection
