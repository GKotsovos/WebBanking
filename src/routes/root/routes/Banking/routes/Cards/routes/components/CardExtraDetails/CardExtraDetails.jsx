import React from 'react';
import dateformat from 'dateformat';
import localizationText from './localizationText';

export const CardExtraDetails = ({ card, language }) => (
  <ul className="list-group">
    <li className="list-group-item">
      <span className="row">
        <span className="col-xs-3 col-sm-3 text-right">
          {dateformat(card.issueDate, 'dd/mm/yyyy')}
        </span>
        <span className="col-xs-4 col-sm-4 text-right">
          {dateformat(card.expirationDate, 'dd/mm/yyyy')}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {card.status ? localizationText[language].active : localizationText[language].inactive}
        </span>
      </span>
      <span className="row common-label">
        <span className="col-xs-3 col-sm-3 text-right">{localizationText[language].issueDate}</span>
        <span className="col-xs-4 col-sm-4 text-right">{localizationText[language].expirationDate}</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].state}</span>
      </span>
    </li>
  </ul>
)

export default CardExtraDetails
