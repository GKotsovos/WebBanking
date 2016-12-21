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
      <span className="row">
        <span className="col-sm-offset-1 col-xs-2 col-sm-3 text-right">500,25€</span>
        <span className="col-xs-offset-1 col-xs-4 col-sm-3 text-right">100,00€</span>
        <span className="col-sm-offset-1 col-sm-3 col-xs-5 text-right">600,25€</span>
      </span>
      <span id="summary" className="row">
        <span className="col-sm-offset-1 col-xs-2 col-sm-3 text-right">Λογιστικό Υπόλοιπο</span>
        <span className="col-xs-5 col-sm-4 text-right">Ευχέρια Υπερανάλληψης</span>
        <span className="col-sm-offset-1 col-sm-3 col-xs-5 text-right">Συνολικό Υπόλοιπο</span>
      </span>
    </div>

    <ul className="list-group">
      <li className="cellRow list-group-item">
        <span className="row">
          <span className="col-sm-offset-1 col-xs-2 col-sm-3 text-right">12/12/2012</span>
          <span className="col-xs-offset-1 col-xs-4 col-sm-3 text-right">20/12/2016</span>
          <span className="col-sm-offset-1 col-sm-3 col-xs-5 text-right">-</span>
        </span>
        <span id="summary" className="row">
          <span className="col-sm-offset-1 col-xs-2 col-sm-3 text-right">Ημ/νία Ανοίγματος</span>
          <span className="col-xs-5 col-sm-4 text-right">Τελευταία Κίνηση</span>
          <span className="col-sm-offset-1 col-sm-3 col-xs-5 text-right">Συχνότητα Εκτοκισμού</span>
        </span>
      </li>
      <li className="cellRow list-group-item">
        <span className="row">
          <span className="col-sm-offset-1 col-xs-2 col-sm-3 text-right">0,00€</span>
          <span className="col-xs-offset-1 col-xs-4 col-sm-3 text-right">0,00€</span>
          <span className="col-sm-offset-1 col-sm-3 col-xs-5 text-right">0,00€</span>
        </span>
        <span id="summary" className="row">
          <span className="col-sm-offset-1 col-xs-2 col-sm-3 text-right">Δεσμ. από επιταγές</span>
          <span className="col-xs-5 col-sm-4 text-right">Άλλες δεσμεύσεις</span>
          <span className="col-sm-offset-1 col-sm-3 col-xs-5 text-right">Ευχέρεια από επιταγές</span>
        </span>
      </li>
    </ul>
  </div>
)

export default DetailedAccount
