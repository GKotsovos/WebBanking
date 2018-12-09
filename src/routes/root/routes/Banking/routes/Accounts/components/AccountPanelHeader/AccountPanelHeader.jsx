import React from 'react';
import currencyFormatter from 'currency-formatter';

export const AccountPanelHeader = ({ currency, type, iban }) => (
  <div className="panel-heading accountTitle">
    <h3 className="panel-title">
      <span className="titles">
        ({currencyFormatter.findCurrency(currency).symbol}) {type}
      </span>
      <span className="titles IBAN">
        {iban}
      </span>
    </h3>
  </div>
)

export default AccountPanelHeader
