import React, { Component } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import localizationText from './localizationText';

export class LoanSelection extends Component {
  componentDidMount() {
    const { selectedLoan } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.loan-selection__dropdown').selectpicker('val', [selectedLoan.value])
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
        <label htmlFor="loan-selection-dropdown">{localizationText[language].loanTitle}</label>
        <select
          id="loan-selection-dropdown"
          className={`selectpicker loan-selection__dropdown form-control ${!_.isEmpty(selectedLoan) || selectedLoan.correct ? "" : "invalid-value"}`}
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
