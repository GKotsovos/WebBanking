import React, { Component, PropTypes } from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import DebitCardServicesTabs from '../../containers/DebitCardServicesContainer'

export const DetailedCardLayout = ({ children }) => (
  <div>
    <DetailedCard type="DEBIT"/>
    <DebitCardServicesTabs />
    {children}
  </div>
)

export default DetailedCardLayout
