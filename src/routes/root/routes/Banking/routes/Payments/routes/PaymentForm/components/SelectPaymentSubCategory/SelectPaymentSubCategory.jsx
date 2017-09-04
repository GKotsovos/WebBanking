import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import './SelectPaymentSubCategory.css';

export class SelectPaymentSubCategory extends Component {
  componentDidMount() {
    const { activeSubCategory } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.paymentSubCategory').selectpicker('val', [activeSubCategory])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.paymentSubCategory").selectpicker('refresh'), 350);
  }

  render(){
    const {
      availableSubCategories,
      activeSubCategory,
      setActivePaymentSubCategory,
    } = this.props;
    return (
      <div className="form-group">
        <select
          id="paymentSubCategory"
          className={`selectpicker paymentSubCategory form-control ${_.isEmpty(activeSubCategory) || activeSubCategory.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title="Επιλέξτε Υποκατηγορία"
          onChange={(e) => setActivePaymentSubCategory(e.target.value)}
        >
          {
            _.map(availableSubCategories, (subCategory) => (
              <option key={subCategory}>
                {subCategory}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default SelectPaymentSubCategory
