import React from 'react';
import AccountPanelHeader from '../AccountPanelHeader';
import AccountPanelBody from '../AccountPanelBody';
import AccountExtraDetails from '../AccountExtraDetails';
import './DetailedAccount.css';

export const DetailedAccount = ({ activeAccount }) => (
  <div className="panel panel-default detailedAccountContainer">
    <AccountPanelHeader
      currency={activeAccount.currency}
      type={activeAccount.type}
      iban={activeAccount.id}
    />
    <AccountPanelBody
      ledgerBalance={activeAccount.ledgerBalance}
      currency={activeAccount.currency}
      overdraft={activeAccount.overdraft}
      availableBalance={activeAccount.availableBalance}
    />
    <AccountExtraDetails
      dateCreated={activeAccount.dateCreated}
      lastMovementDate={activeAccount.lastMovementDate}
      state={activeAccount.state}
    />
  </div>
)

export default DetailedAccount
