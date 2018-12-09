import React, { Component, PropTypes } from 'react';
import CardsTabs from '../../containers/CardTabsLayoutContainer'

export const CardsLayout = ({ children }) => (
  <div id="cards" className="cardsContainer">
    <CardsTabs />
    <div>
      {children}
    </div>
  </div>
)

export default CardsLayout
