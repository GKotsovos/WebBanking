import React from 'react'

export const SimpleTransactionApprovalRow = ({ title, value}) => (
  <tr>
    <td className="common-table-cell common-table-cell--bold col-sm-5 text-right">{title}</td>
    <td className="common-table-cell col-sm-4 text-center">
      {value}
    </td>
  </tr>
)

export default SimpleTransactionApprovalRow
