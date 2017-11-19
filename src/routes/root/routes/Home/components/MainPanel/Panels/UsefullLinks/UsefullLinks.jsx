import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import './UsefullLinks.css'

export const UsefullLinks = ({ changePanel }) => (
  <div id="" className="">
    <FontAwesome className="closePanel" name="window-close-o" onClick={() => changePanel('NEWS')} />

  </div>
)

UsefullLinks.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default UsefullLinks
