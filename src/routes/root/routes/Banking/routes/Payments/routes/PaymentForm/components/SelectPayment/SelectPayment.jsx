import React, { Component, PropTypes }  from 'react';
import _ from 'underscore';
import SelectWayOfSelection from '../SelectWayOfSelection';
import SearchPaymentMethod from '../SearchPaymentMethod';
import SelectPaymentCategory from '../SelectPaymentCategory';
import SelectPaymentSubCategory from '../SelectPaymentSubCategory';
import SelectPaymentMethod from '../SelectPaymentMethod';
import './SelectPayment.css';

export const SelectPayment = ({
  setSearchPayment,
  shouldSearch,
  availableCategories,
  activeCategory,
  setActivePaymentCategory,
  availableSubCategories,
  paymentSubCategories,
  activeSubCategory,
  setActivePaymentSubCategory,
  availablePaymentMethods,
  activeMethod,
  setActivePaymentMethod,
}) => (
  <div>
    <SelectWayOfSelection
      setSearchPayment={setSearchPayment}
      shouldSearch={shouldSearch}
    />
    {
      shouldSearch ? (
        <SearchPaymentMethod
          availablePaymentMethods={availablePaymentMethods}
          activeMethod={activeMethod}
          setActivePaymentMethod={setActivePaymentMethod}
        />
      ) : [
        <SelectPaymentCategory
          availableCategories={availableCategories}
          activeCategory={activeCategory}
          setActivePaymentCategory={setActivePaymentCategory}
        />,
          !_.isEmpty(activeCategory) ? (
            availableSubCategories.length > 0 ? [
              <SelectPaymentSubCategory
                availableSubCategories={availableSubCategories}
                activeSubCategory={activeSubCategory}
                setActivePaymentSubCategory={setActivePaymentSubCategory}
              />,
              <SelectPaymentMethod
                availablePaymentMethods={availablePaymentMethods}
                activeMethod={activeMethod}
                setActivePaymentMethod={setActivePaymentMethod}
              />
            ] :
            <SelectPaymentMethod
              availablePaymentMethods={availablePaymentMethods}
              activeMethod={activeMethod}
              setActivePaymentMethod={setActivePaymentMethod}
            />
          ) : null
      ]
    }
  </div>
)

export default SelectPayment
