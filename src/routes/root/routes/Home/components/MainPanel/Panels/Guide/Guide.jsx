import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import './Guide.css'

export const Guide = ({ changePanel }) => (
  <div id="" className="">
    <FontAwesome className="closePanel" name="window-close-o" onClick={() => changePanel('NEWS')} />

  </div>
)

Guide.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default Guide
