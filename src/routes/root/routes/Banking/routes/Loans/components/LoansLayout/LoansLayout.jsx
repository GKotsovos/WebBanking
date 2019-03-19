import React from 'react';
import Loan from '../../containers/LoanContainer';
import { isEmpty } from 'underscore';

export const LoansLayout = ({ children, loans, activeLoan }) => (
  <div role="tabpanel" className="tab-pane loans-container" id="loans">
    {
      isEmpty(activeLoan) ?
        loans.map(loan => <Loan key={loan.id} loan={loan} />)
        : children
    }
  </div>
)

export default LoansLayout
