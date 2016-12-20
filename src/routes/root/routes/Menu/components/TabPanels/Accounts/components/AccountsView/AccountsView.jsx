import React from 'react';
import Account from '../Account';
import DetailedAccount from '../DetailedAccount';
import Movements from '../Movements';
import './AccountsView.css';

export const AccountsView = () => (
  <div id="accountsContainer" role="tabpanel" className="tab-pane active col-md-offset-3 col-sm-offset-2 col-md-6 col-sm-8">
    <Account />
    <Account />
    <Account />
  </div>
)

export default AccountsView
