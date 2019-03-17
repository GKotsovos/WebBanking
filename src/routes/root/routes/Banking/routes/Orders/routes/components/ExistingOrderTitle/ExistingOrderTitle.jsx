import React from 'react';

export const ExistingOrderTitle = ({ orderTitle, orderTo }) => (
  <div className="panel-heading panel-title">
    <h3 className="existing-order-title panel-title common-title">
      <span>
        {orderTitle}
      </span>
      <span>
        {orderTo}
      </span>
    </h3>
  </div>
)

export default ExistingOrderTitle
