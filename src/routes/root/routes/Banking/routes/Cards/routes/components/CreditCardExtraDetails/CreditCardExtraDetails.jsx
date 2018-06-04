import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import localizationText from './localizationText';
import './CreditCardExtraDetails.css';

export const CreditCardExtraDetails = ({ card, language }) => (
  <ul className="list-group">
    <li className="list-group-item">
      <span className="row">
        <span className="col-xs-3 col-sm-3 text-right">
          {card.nextInstallmentAmount.toLocaleString('el-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(card.currency).symbol}
        </span>
        <span className="col-xs-4 col-sm-4 text-right">
          {card.debt.toLocaleString('el-GR', {minimumFractionDigits: 2})}{currencyFormatter.findCurrency(card.currency).symbol}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {dateformat(card.nextInstallmentDate, 'dd/mm/yyyy')}
        </span>
      </span>
      <span className="row cardSummary">
        <span className="col-xs-3 col-sm-3 text-right">{localizationText[language].installment}</span>
        <span className="col-xs-4 col-sm-4 text-right">{localizationText[language].debt}</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].installmentDate}</span>
      </span>
    </li>
  </ul>
)

export default CreditCardExtraDetails
