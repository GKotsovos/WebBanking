import React, { Component, PropTypes } from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import CreditCardServicesTabs from '../../containers/CreditCardServicesContainer'
import './DetailedCardLayout.css';

export const DetailedCardLayout = ({ children }) => (
  <div>
    <DetailedCard type="CREDIT"/>
    <CreditCardServicesTabs />
    {children}
  </div>
)

export default DetailedCardLayout
