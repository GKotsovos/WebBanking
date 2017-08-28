import React from 'react'
import './SimpleTransactionApprovalRow.css';

export const SimpleTransactionApprovalRow = ({ title, value}) => (
  <tr>
    <td className="titleCell col-sm-5 text-right">{title}</td>
    <td className="cell col-sm-4 text-center">
      {value}
    </td>
  </tr>
)

export default SimpleTransactionApprovalRow
