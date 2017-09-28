import React from 'react';
import dateformat from 'dateformat';
import './AccountExtraDetails.css';

export const AccountExtraDetails = ({ dateCreated, lastMovementDate, state }) => (
  <ul className="list-group">
    <li className="cellRow list-group-item">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">
            {dateformat(dateCreated, 'dd/mm/yyyy')}
          </span>
          <span className="col-xs-offset-1 col-xs-4 text-right">
            {dateformat(lastMovementDate, 'dd/mm/yyyy')}
          </span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">
            {state ? 'Ενεργός' : 'Ανενεργός'}
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
)

export default AccountExtraDetails
