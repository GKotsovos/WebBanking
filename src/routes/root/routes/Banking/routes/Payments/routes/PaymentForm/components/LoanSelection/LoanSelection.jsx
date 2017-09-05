import React, { Component, PropTypes } from 'react'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './LoanSelection.css';

export class LoanSelection extends Component {
  componentDidMount() {
    const { selectedLoan } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.paymentLoan').selectpicker('val', [selectedLoan.value])
  }

  render(){
    const {
      loans,
      selectedLoan,
      setLoanForPayment
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="paymentLoan">Δάνειο</label>
        <select
          id="paymentLoan"
          className={`selectpicker paymentLoan form-control ${_.isEmpty(selectedLoan) || selectedLoan.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title="Επιλέξτε δάνειο"
          onChange={
            (e) => setLoanForPayment(e.target.value, e.target.options[e.target.options.selectedIndex].className)
          }
        >
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
        </select>
      </div>
    )
  }
}

export default LoanSelection
