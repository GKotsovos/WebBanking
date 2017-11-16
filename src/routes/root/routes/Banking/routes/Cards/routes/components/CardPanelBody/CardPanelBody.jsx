import React from 'react';
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import localizationText from './localizationText';
import './CardPanelBody.css';

export const CardPanelBody = ({ card, type, language }) => (
  <div className="panel-body">
    <span className="row">
      {
        type != 'PREPAID' ?
          <span className="col-xs-3 col-sm-2 text-right">
            {card[type == 'DEBIT' ? 'dailyLimit' : 'limit'].toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(card.currency).symbol}
          </span>
          : <span className="col-xs-3 col-sm-2 text-right"></span>
      }
      <span className="col-xs-4 col-sm-5 text-right">
        {card.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(card.currency).symbol}
      </span>
      <span className="col-xs-offset-1 col-xs-4 text-right">
        {card.ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(card.currency).symbol}
      </span>
    </span>
    <span className="row cardSummary">
      {
        type != 'PREPAID' ?
          <span className="col-xs-3 col-sm-2 text-right">
            {type == 'DEBIT' ? localizationText[language].dailyLimit : localizationText[language].totalLimit}
          </span>
          : <span className="col-xs-3 col-sm-2 text-right"></span>
      }
      <span className="col-xs-4 col-sm-5 text-right">{localizationText[language].availableLimit}</span>
      <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].ledgerBalance}</span>
    </span>
  </div>
)

export default CardPanelBody
