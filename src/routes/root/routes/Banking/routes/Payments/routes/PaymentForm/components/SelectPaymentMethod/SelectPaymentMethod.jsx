import React, { Component, PropTypes }  from 'react';
import _ from 'underscore';
import SearchPaymentMethod from '../SearchPaymentMethod';
import './SelectPaymentMethod.css';

export class SelectPaymentMethod extends Component {
  componentDidMount() {
    const { bankType } = this.props;
    $('.selectpicker').selectpicker();
    // $('.selectpicker.transferBankSelect').selectpicker('val', [bankType.selection])
  }

  render(){
    const {
      bankType,
      setCreditBankType
    } = this.props;
    return (
      <div>
        <label htmlFor="selectWayOfSelection">Πληρωμή</label>
        <div id="selectWayOfSelection">
          <span
            id="select"
            onClick={() => setSearchPayment(false)}>
            <input
              type="radio"
              name="wayOfSelection"
              onChange={() => setSearchPayment(false)}
            />
            Επιλογή
          </span>
          <span
            id="search"
            onClick={() => setSearchPayment(true)}>
            <input
              type="radio"
              name="wayOfSelection"
              onChange={() => setSearchPayment(true)}
            />
            Αναζήτηση
          </span>
        </div>
        {
          {/*
          shouldSearch ? (
            <SearchPaymentMethod
              paymentMethods={paymentMethods}
              setPaymentMethod={setPaymentMethod}
            />
          ) : [
              <SelectPaymentCategory
                paymentCategories={paymentCategories}
                setPaymentCategory={setPaymentCategory}
              />,
              activeCategory.subCategory ? (
                <SelectPaymentSubCategory
                  paymentSubCategories={paymentSubCategories}
                  setPaymentSubCategory={setPaymentSubCategory}
                />
              ) : null,
              <PaymentMethodInput
                paymentMethods={paymentMethods}
                setPaymentMethod={setPaymentMethod}
              />
            ]
        */}
        }
      </div>
    )
  }
}

export default SelectPaymentMethod
