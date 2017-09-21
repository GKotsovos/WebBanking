import React, { Component, PropTypes } from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import PrepaidCardServicesTabs from '../../containers/PrepaidCardServicesContainer'

export const DetailedCardLayout = ({ children }) => (
  <div>
    <DetailedCard type="PREPAID"/>
    <PrepaidCardServicesTabs />
    {children}
  </div>
)

export default DetailedCardLayout
