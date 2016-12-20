import React from 'react';
import Tabs from '../Tabs'
import './MenuView.css';

export const MenuView = ({ children }) => (
  <div id="menuContainer" className="container">
    <Tabs />
    <div className='menu-layout__viewport'>
      {children}
    </div>
  </div>
)

export default MenuView
