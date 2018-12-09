import React from 'react';
import dateformat from 'dateformat';
import localizationText from './localizationText';

export const AccountExtraDetails = ({ dateCreated, lastMovementDate, state, language }) => (
  <ul className="list-group">
    <li className="list-group-item">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">
            {dateformat(dateCreated, 'dd/mm/yyyy')}
          </span>
          <span className="col-xs-offset-1 col-xs-4 text-right">
            {dateformat(lastMovementDate, 'dd/mm/yyyy')}
          </span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
            {state ? localizationText[language].active : localizationText[language].inactive}
          </span>
        </span>
        <span className="account-panel-body__summary">
          <span className="col-xs-3 text-right">{localizationText[language].dateCreated}</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">{localizationText[language].lastMovementDate}</span>
          <span className="col-xs-offset-1 col-xs-3 text-right">{localizationText[language].state}</span>
        </span>
      </div>
    </li>
  </ul>
)

export default AccountExtraDetails
