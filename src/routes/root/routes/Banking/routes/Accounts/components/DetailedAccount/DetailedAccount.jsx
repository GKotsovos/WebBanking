import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import './DetailedAccount.css';

export const DetailedAccount = ({ activeAccount }) => (
  <div className="panel panel-default detailedAccountContainer">
    <div className="panel-heading accountTitle">
      <h3 className="panel-title">
        <span className="titles">
          ({currencyFormatter.findCurrency(activeAccount.currency).symbol}) {activeAccount.type}
        </span>
        <span className="titles IBAN">
          {activeAccount.iban}
        </span>
      </h3>
    </div>

    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">
            {activeAccount.ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(activeAccount.currency).symbol}
          </span>
          <span className="col-xs-offset-1 col-xs-4 text-right">
            {activeAccount.overdraft.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(activeAccount.currency).symbol}
          </span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
            {activeAccount.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(activeAccount.currency).symbol}
          </span>
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
            <span className="col-xs-3 text-right">
              {dateformat(activeAccount.dateCreated, 'dd/mm/yyyy')}
            </span>
            <span className="col-xs-offset-1 col-xs-4 text-right">
              {dateformat(activeAccount.lastMovementDate, 'dd/mm/yyyy')}
            </span>
            <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
              {activeAccount.state ? 'Ενεργός' : 'Ανενεργός'}
            </span>
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
