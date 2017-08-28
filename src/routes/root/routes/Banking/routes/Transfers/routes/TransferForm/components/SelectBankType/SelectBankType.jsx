import React, { Component, PropTypes }  from 'react';
import _ from 'underscore';
import './SelectBankType.css';

export class SelectBankType extends Component {
  componentDidMount() {
    const { bank } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferBankSelect').selectpicker('val', [bank.selection])
  }

  render(){
    const {
      bank,
      setCreditBankType
    } = this.props;
    return (
      <div id="bankDiv" className="form-group">
        <label htmlFor="transferBankSelect">Τράπεζα</label>
        <div>
          <select
            className={`selectpicker transferBankSelect form-control ${_.isEmpty(bank) || bank.correct ? "" : "notValid"}`}
            data-show-subtext="true"
            title="Επιλέξτε Τύπο Τράπεζας"
            value={bank.type || ""}
            onChange={
              (e) => setCreditBankType(e.target.value, e.target.options[e.target.options.selectedIndex].id)
            }
          >
            <option id="agileBank">Agile Bank</option>
            <option id="domesticBank">Τράπεζα Εσωτερικού</option>
            <option id="foreignBank">Τράπεζα Εξωτερικού</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SelectBankType
