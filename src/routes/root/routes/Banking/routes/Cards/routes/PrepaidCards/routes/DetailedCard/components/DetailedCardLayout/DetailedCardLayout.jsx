import React from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import PrepaidCardServicesTabs from '../../containers/PrepaidCardServicesContainer'

export const DetailedCardLayout = ({ children, language }) => (
  <div>
    <DetailedCard type="PREPAID" language={language} />
    <PrepaidCardServicesTabs />
    {children}
  </div>
)

export default DetailedCardLayout
