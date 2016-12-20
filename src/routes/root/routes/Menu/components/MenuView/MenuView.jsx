import React from 'react';
import Tabs from '../Tabs'
import TabPanels from '../TabPanels'
import './MenuView.css';

export const MenuView = () => (
  <div id="menuContainer" className="container">
    <Tabs />
    <TabPanels />
  </div>
)

export default MenuView
