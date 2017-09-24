import React from 'react';
import currencyFormatter from 'currency-formatter';
import dateformat from 'dateformat';
import _ from 'underscore';
import './DetailedCard.css';

export const DetailedCard = ({ activeCard, type }) => (
  <div className="panel panel-default detailedCardContainer">
    <div className="cardTitle panel-heading">
      <h3 className="panel-title">
        <span className="titles">
          ({currencyFormatter.findCurrency(activeCard.currency).symbol}) {type} {activeCard.brand}
        </span>
        <span className="titles cardNumber">
          {_.map(activeCard.id, ((num, key) =>  key % 4 == 0 && key != 0 ? ' ' + num : num ))}
        </span>
      </h3>
    </div>

    <div className="panel-body">
      <span className="row">
        {
          type != 'PREPAID' ?
            <span className="col-xs-3 col-sm-3 text-right">
              {activeCard[type == 'DEBIT' ? 'dailyLimit' : 'limit'].toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeCard.currency).symbol}
            </span>
            : <span className="col-xs-3 col-sm-3 text-right"></span>
        }
        <span className="col-xs-4 col-sm-4 text-right">
          {activeCard.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeCard.currency).symbol}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {activeCard.ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeCard.currency).symbol}
        </span>
      </span>
      <span className="row cardSummary">
        {
          type != 'PREPAID' ?
            <span className="col-xs-3 col-sm-3 text-right">
              { type == 'DEBIT' ? 'Ημερήσιο' : 'Συνολικό' } Όριο
            </span>
            : <span className="col-xs-3 col-sm-3 text-right"></span>
        }
        <span className="col-xs-4 col-sm-4 text-right">Διαθέσιμο Όριο</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">Λογιστικό Υπόλοιπο</span>
      </span>
    </div>

    <ul className="list-group">
      <li className="list-group-item">
        <span className="row">
          <span className="col-xs-3 col-sm-3 text-right">
            {dateformat(activeCard.issueDate, 'dd/mm/yyyy')}
          </span>
          <span className="col-xs-4 col-sm-4 text-right">
            {dateformat(activeCard.expirationDate, 'dd/mm/yyyy')}
          </span>
          <span className="col-xs-offset-1 col-xs-4 text-right">
            {activeCard.status ? 'Ενεργή' : 'Ανενεργή'}
          </span>
        </span>
        <span className="row cardSummary">
          <span className="col-xs-3 col-sm-3 text-right">Ημ/νία Έκδοσης</span>
          <span className="col-xs-4 col-sm-4 text-right">Ημ/νία Λήξης</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Κατάσταση</span>
        </span>
      </li>
    </ul>

    {
      type == 'CREDIT' ? (
        <ul className="list-group">
          <li className="list-group-item">
            <span className="row">
              <span className="col-xs-3 col-sm-3 text-right">
                {activeCard.nextInstallmentAmount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeCard.currency).symbol}
              </span>
              <span className="col-xs-4 col-sm-4 text-right">
                {activeCard.debt.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(activeCard.currency).symbol}
              </span>
              <span className="col-xs-offset-1 col-xs-4 text-right">
                {dateformat(activeCard.nextInstallmentDate, 'dd/mm/yyyy')}
              </span>
            </span>
            <span className="row cardSummary">
              <span className="col-xs-3 col-sm-3 text-right">Τρέχων οφειλή</span>
              <span className="col-xs-4 col-sm-4 text-right">Σύνολο οφειλών</span>
              <span className="col-xs-offset-1 col-xs-4 text-right">Ημ/νία οφειλής</span>
            </span>
          </li>
        </ul>
      ) : []
    }

  </div>
)

export default DetailedCard
