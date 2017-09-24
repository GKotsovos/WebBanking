import React from 'react'
import './TransactionApprovalHeader.css';

export const TransactionApprovalHeader = ({ title }) => (
  <thead>
    <tr className="tableHead titles">
      <th colSpan="3" className="text-center">{title}</th>
    </tr>
  </thead>  
)

export default TransactionApprovalHeader