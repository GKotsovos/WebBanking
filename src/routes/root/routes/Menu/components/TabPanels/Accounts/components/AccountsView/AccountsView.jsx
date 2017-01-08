import React from 'react';
import Account from '../Account';
import DetailedAccount from '../DetailedAccount';
import Services from '../Services';
import './AccountsView.css';

export const AccountsView = () => (
  <div id="accounts" role="tabpanel" className="tab-pane">

    {/* <Account />
    <Account />
    <Account /> */}

    <DetailedAccount />

    <Services />
  </div>
)

export default AccountsView
