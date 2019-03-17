import React from 'react';
import Loan from '../../containers/LoanContainer';
import _ from 'underscore';

export const LoansLayout = ({ children, loans, activeLoan }) => (
  <div role="tabpanel" className="tab-pane loans-container" id="loans">
    {
      _.isEmpty(activeLoan) ?
        _.map(loans, (loan) => <Loan key={loan.id} loan={loan} />)
        : children
    }
  </div>
)

export default LoansLayout
