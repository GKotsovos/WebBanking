import React from 'react';
import './Account.css';

export const Account = () => (
  <div className="panel panel-default accountContainer">
    <div className="panel-heading accountTitle">
      <h3 className="panel-title">
        <span className="titles">(€) Καταθετικός</span>
        <span className="titles IBAN">
          GR2201100470000009237465820
        </span>
      </h3>
    </div>

    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">500,25€</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">100,00€</span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">600,25€</span>
        </span>
        <span className="summary">
          <span className="col-xs-3 text-right">Λογιστικό Υπόλοιπο</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Ευχέρια Υπερανάλληψης</span>
          <span className="col-xs-offset-1 col-xs-3 text-right">Συνολικό Υπόλοιπο</span>
        </span>
      </div>
    </div>
  </div>
)

export default Account
