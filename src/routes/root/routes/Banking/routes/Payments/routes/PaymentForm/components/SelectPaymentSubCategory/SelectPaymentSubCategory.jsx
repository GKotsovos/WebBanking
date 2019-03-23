import React, { Component } from 'react'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export class SelectPaymentSubCategory extends Component {
  componentDidMount() {
    const { activeSubCategory } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.select-payment-subcategory__dropdown').selectpicker('val', [activeSubCategory])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.select-payment-subcategory__dropdown").selectpicker('refresh'), 350);
  }

  render() {
    const {
      availableSubCategories,
      activeSubCategory,
      language,
      setActivePaymentSubCategory,
    } = this.props;
    return (
      <div className="form-group">
        <select
          className={`selectpicker select-payment-subcategory__dropdown form-control ${isEmpty(activeSubCategory) || activeSubCategory.correct ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectSubCategory}
          onChange={(e) => setActivePaymentSubCategory(e.target.value)}>
          {
            availableSubCategories.map(subCategory => (
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
