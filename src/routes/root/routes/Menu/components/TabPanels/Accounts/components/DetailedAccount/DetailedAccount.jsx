import React from 'react';
import './DetailedAccount.css';

export const DetailedAccount = () => (
  <div className="panel panel-default detailedAccountContainer">
    <div id="accountTitle" className="panel-heading">
      <h3 className="panel-title">
        <span className="titles">(€) Καταθετικός</span>
        <span className="titles" id="IBAN">
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

    <ul className="list-group">
      <li className="cellRow list-group-item">
        <div className="row">
          <span>
            <span className="col-xs-3 text-right">12/12/2012</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">20/12/2016</span>
            <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">Ενεργός</span>
          </span>
          <span className="summary">
            <span className="col-xs-3 text-right">Ημ/νία Ανοίγματος</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">Τελευταία Κίνηση</span>
            <span className="col-xs-offset-1 col-xs-3 text-right">Κατάσταση</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
)

export default DetailedAccount
