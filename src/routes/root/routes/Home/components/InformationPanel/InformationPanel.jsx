import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import './InformationPanel.css'

const InformationPanel = ({ changePanel }) => (
  <div id="infoPanel" className="panel panel-default verticalCenter" onClick={() => changePanel('INFORMATION')}>
    <div className="panel-body text-center">
          <FontAwesome id="infoIcon" name="info-circle" size="3x" />
          <div id="infoText">Σημαντικές πληροφορίες και συμβουλές ασφαλείας</div>
    </div>
  </div>
)

InformationPanel.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default InformationPanel
