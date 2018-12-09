import React, { Component, PropTypes } from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import CreditCardServicesTabs from '../../containers/CreditCardServicesContainer'

export const DetailedCardLayout = ({ children, language }) => (
  <div>
    <DetailedCard type="CREDIT" language={language} />
    <CreditCardServicesTabs language={language} />
    {children}
  </div>
)

export default DetailedCardLayout
