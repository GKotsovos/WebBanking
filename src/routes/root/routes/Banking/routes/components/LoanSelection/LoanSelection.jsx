import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import localizationText from './localizationText';

export class LoanSelection extends Component {
  componentDidMount() {
    const { selectedLoan } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.paymentLoan').selectpicker('val', [selectedLoan.value])
  }

  render() {
    const {
      loans,
      selectedLoan,
      language,
      setLoanForPayment
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="paymentLoan">{localizationText[language].loanTitle}</label>
        <select
          id="paymentLoan"
          className={`selectpicker paymentLoan form-control ${!_.isEmpty(selectedLoan) || selectedLoan.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title={localizationText[language].selectLoanTitle}
          onChange={(e) => setLoanForPayment(e.target.value)}>
          {
            _.map(loans, (loan) => (
              <option
                key={loan.id}
                data-subtext={
                  `${loan.customTitle} ${loan.availableBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(loan.currency).symbol}`
                }>
                {loan.id}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default LoanSelection
