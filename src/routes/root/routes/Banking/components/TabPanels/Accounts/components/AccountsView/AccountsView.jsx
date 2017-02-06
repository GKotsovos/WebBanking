import React from 'react';
import Account from '../Account';
import DetailedAccount from '../DetailedAccount';
import MovementsHistory from '../MovementsHistory';
import './AccountsView.css';

export const AccountsView = () => (
  <div id="accounts" role="tabpanel" className="tab-pane active">

    <Account />
    <Account />
    <Account />
{/*
    <DetailedAccount />

    <MovementsHistory /> */}
  </div>
)

export default AccountsView
