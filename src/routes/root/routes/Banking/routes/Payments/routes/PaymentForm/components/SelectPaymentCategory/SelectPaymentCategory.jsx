import React, { Component } from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export class SelectPaymentCategory extends Component {
  componentDidMount() {
    const { activeCategory } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.select-payment-category__dropdown').selectpicker('val', [activeCategory])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.select-payment-category__dropdown").selectpicker('refresh'), 350);
  }

  render() {
    const {
      availableCategories,
      activeCategory,
      language,
      setActivePaymentCategory,
    } = this.props;
    return (
      <div className="form-group">
        <select
          className={`selectpicker select-payment-category__dropdown form-control ${_.isEmpty(activeCategory) || activeCategory.correct ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectPaymentCategory}
          onChange={(e) => setActivePaymentCategory(e.target.value)}>
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
