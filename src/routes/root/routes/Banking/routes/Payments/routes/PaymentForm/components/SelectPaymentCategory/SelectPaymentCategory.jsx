import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import './SelectPaymentCategory.css';

export class SelectPaymentCategory extends Component {
  componentDidMount() {
    const { activeCategory } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.paymentCategory').selectpicker('val', [activeCategory])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.paymentCategory").selectpicker('refresh'), 350);
  }

  render(){
    const {
      availableCategories,
      activeCategory,
      setActivePaymentCategory,
    } = this.props;
    return (
      <div className="form-group">
        <select
          id="paymentCategory"
          className={`selectpicker paymentCategory form-control ${_.isEmpty(activeCategory) || activeCategory.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title="Επιλέξτε Κατηγορία"
          onChange={(e) => setActivePaymentCategory(e.target.value)}
        >
          {
            _.map(availableCategories, (category) => (
              <option key={category}>
                {category}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default SelectPaymentCategory
