import React from 'react';
import CardsTabs from '../../containers/CardTabsLayoutContainer'

export const CardsLayout = ({ children }) => (
  <div id="cards" className="cards-container">
    <CardsTabs />
    <div>
      {children}
    </div>
  </div>
)

export default CardsLayout
