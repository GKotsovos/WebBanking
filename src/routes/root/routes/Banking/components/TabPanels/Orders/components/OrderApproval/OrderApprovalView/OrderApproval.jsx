import React from 'react';
import AccountApproval from '../AccountApproval'
import OrganizationApproval from '../OrganizationApproval'
import './OrderApproval.css';

export const OrderApproval = () => (
<form id="orderApprovalForm">

  <AccountApproval />
  {/* <OrganizationApproval /> */}

  <div id="orderApprovalFormButtons">
    <button id="previousOrderForm" type="button" className="btn btn-default">Επιστροφή</button>
    <button id="submitOrderApprovalForm" type="submit" className="btn btn-default">Επιβεβαίωση</button>
  </div>

</form>
)

export default OrderApproval
