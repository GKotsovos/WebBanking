import React from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import DebitCardServicesTabs from '../../containers/DebitCardServicesContainer'

export const DetailedCardLayout = ({ children, language }) => (
  <div>
    <DetailedCard type="DEBIT" language={language} />
    <DebitCardServicesTabs />
    {children}
  </div>
)

export default DetailedCardLayout
