import React from 'react';
import TransactionApprovalButtons from '../../../../../../components/TransactionApprovalButtons';
import AccountApproval from '../AccountApproval'
import OrganizationApproval from '../OrganizationApproval'
import './OrderApproval.css';

export const OrderApproval = () => (
<form id="orderApprovalForm">

  <AccountApproval />
  {/* <OrganizationApproval /> */}

  <TransactionApprovalButtons />

</form>
)

export default OrderApproval
