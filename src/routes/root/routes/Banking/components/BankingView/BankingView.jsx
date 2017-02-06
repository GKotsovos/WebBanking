import React from 'react';
import Tabs from '../Tabs'
import TabPanels from '../TabPanels'
import './BankingView.css';

export const BankingView = () => (
  <div id="menuContainer" className="container">
    <Tabs />
    <TabPanels />
  </div>
)

export default BankingView
