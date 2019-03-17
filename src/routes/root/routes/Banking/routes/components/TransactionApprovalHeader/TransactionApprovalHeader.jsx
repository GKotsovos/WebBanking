import React from 'react'

export const TransactionApprovalHeader = ({ title }) => (
  <thead className="common-table-header common-title">
    <tr>
      <th colSpan="3" className="text-center">{title}</th>
    </tr>
  </thead>
)

export default TransactionApprovalHeader
