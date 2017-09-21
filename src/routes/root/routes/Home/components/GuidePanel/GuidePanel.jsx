import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import './GuidePanel.css'

const GuidePanel = ({ changePanel }) => (
  <div id="guidePanel" className="panel panel-default verticalCenter" onClick={() => changePanel('GUIDE')}>
    <div className="panel-body text-center">
      <FontAwesome id="bookIcon" name="book" />
      <p id="guideText">Agile Web Banking οδηγίες</p>
    </div>
  </div>
)

GuidePanel.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default GuidePanel
