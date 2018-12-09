import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

export const ClosePanelButton = ({ changePanel }) => (
  <FontAwesome className="close-panel-icon" name="window-close-o" onClick={() => changePanel('NEWS')} />
)

ClosePanelButton.PropTypes = {
  panel: PropTypes.string.isRequired,
};

export default ClosePanelButton
