import React from 'react'
import _ from 'underscore';

export const CustomTitleInput = ({ customTitle, setTransferOrderCustomTitle }) => (
  <div className="form-group">
    <label htmlFor="transferOrderTitle">Ονομασία</label>
    <input
      id="transferOrderTitle"
      className={`form-control ${_.isEmpty(customTitle) || customTitle.correct ? "" : "notValid"}`}
      value={customTitle ? customTitle.value : ""}
      placeholder="Όνομα πάγιας εντολής"
      onChange={(e) => setTransferOrderCustomTitle(e.target.value)}
    />
  </div>
)

export default CustomTitleInput
