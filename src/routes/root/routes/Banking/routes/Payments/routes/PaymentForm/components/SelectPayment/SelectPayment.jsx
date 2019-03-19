import React from 'react';
import { isEmpty } from 'underscore';
import SelectWayOfSelection from '../SelectWayOfSelection';
import SearchPaymentMethod from 'routes/root/routes/Banking/routes/components/SearchPaymentMethod';
import SelectPaymentCategory from '../SelectPaymentCategory';
import SelectPaymentSubCategory from '../SelectPaymentSubCategory';
import SelectPaymentMethod from '../SelectPaymentMethod';

export const SelectPayment = ({
  setSearchPayment,
  shouldSearch,
  availableCategories,
  activeCategory,
  availableSubCategories,
  paymentSubCategories,
  activeSubCategory,
  availablePaymentMethods,
  activeMethod,
  language,
  setActivePaymentCategory,
  setActivePaymentSubCategory,
  setActivePaymentMethod,
}) => (
  <div>
    <SelectWayOfSelection
      shouldSearch={shouldSearch}
      language={language}
      setSearchPayment={setSearchPayment}
    />
    {
      shouldSearch ? (
        <SearchPaymentMethod
          availablePaymentMethods={availablePaymentMethods}
          activeMethod={activeMethod}
          language={language}
          setActivePaymentMethod={setActivePaymentMethod}
        />
      ) : [
        <SelectPaymentCategory
          availableCategories={availableCategories}
          activeCategory={activeCategory}
          language={language}
          setActivePaymentCategory={setActivePaymentCategory}
        />,
          !isEmpty(activeCategory) ? (
            availableSubCategories.length > 0 ? [
              <SelectPaymentSubCategory
                availableSubCategories={availableSubCategories}
                activeSubCategory={activeSubCategory}
                language={language}
                setActivePaymentSubCategory={setActivePaymentSubCategory}
              />,
              <SelectPaymentMethod
                availablePaymentMethods={availablePaymentMethods}
                activeMethod={activeMethod}
                language={language}
                setActivePaymentMethod={setActivePaymentMethod}
              />
            ] :
            <SelectPaymentMethod
              availablePaymentMethods={availablePaymentMethods}
              activeMethod={activeMethod}
              language={language}
              setActivePaymentMethod={setActivePaymentMethod}
            />
          ) : null
      ]
    }
  </div>
)

export default SelectPayment
