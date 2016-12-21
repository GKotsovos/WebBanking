import React from 'react';
import Account from '../Account';
import DetailedAccount from '../DetailedAccount';
import Services from '../Services';
import './AccountsView.css';

export const AccountsView = () => (
  <div id="accounts" role="tabpanel" className="tab-pane active col-md-offset-3 col-sm-offset-2 col-md-6 col-sm-8">
    <DetailedAccount />
    <Services />
  </div>
)

export default AccountsView
