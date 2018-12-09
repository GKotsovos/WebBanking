import React from 'react';
import AccountPanelHeader from '../AccountPanelHeader';
import AccountPanelBody from '../AccountPanelBody';
import AccountExtraDetails from '../AccountExtraDetails';

export const DetailedAccount = ({ activeAccount, language }) => (
  <div className="panel panel-default detailedAccountContainer">
    <AccountPanelHeader
      currency={activeAccount.currency}
      type={activeAccount.type}
      iban={activeAccount.id}
      language={language}
    />
    <AccountPanelBody
      ledgerBalance={activeAccount.ledgerBalance}
      currency={activeAccount.currency}
      overdraft={activeAccount.overdraft}
      availableBalance={activeAccount.availableBalance}
      language={language}
    />
    <AccountExtraDetails
      dateCreated={activeAccount.dateCreated}
      lastMovementDate={activeAccount.lastMovementDate}
      state={activeAccount.state}
      language={language}
    />
  </div>
)

export default DetailedAccount
