import React from 'react';
import Account from '../Account';
import DetailedAccount from '../DetailedAccount';
import Services from '../Services';
import './AccountsView.css';

export const AccountsView = () => (
  <div id="accounts" role="tabpanel" className="tab-pane active">

    <div className="col-sm-offset-3 col-sm-6">
      <DetailedAccount />
    </div>

    <div className="col-sm-offset-2 col-sm-8">
      <Services />
    </div>
  </div>
)

export default AccountsView
