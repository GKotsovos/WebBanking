import React from 'react';
import Accounts from '../Accounts'
import Cards from '../Cards'
import Loans from '../Loans'
import Transfers from '../Transfers'
import Payments from '../Payments'
import Orders from '../Orders'
import './TabPanelsView.css';

export const TabPanelsView = () => (
  <div id="tabPanels" className="tab-content">
    <Accounts />
    <Cards />
    <Loans />
    <Transfers />
    <Payments />
    <Orders />
  </div>
)

export default TabPanelsView
