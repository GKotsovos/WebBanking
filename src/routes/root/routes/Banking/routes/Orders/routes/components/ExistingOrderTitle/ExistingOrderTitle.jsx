import React from 'react';

export const ExistingOrderTitle = ({ orderTitle, orderTo }) => (
  <div className="orderTitle panel-heading">
    <h3 className="panel-title">
      <span className="titles">
        {orderTitle}
      </span>
      <span className="titles orderTo">
        {orderTo}
      </span>
    </h3>
  </div>
)

export default ExistingOrderTitle
