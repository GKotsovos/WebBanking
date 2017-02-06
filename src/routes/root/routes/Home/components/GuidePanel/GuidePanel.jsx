import React from 'react'
import FontAwesome from 'react-fontawesome'
import './GuidePanel.css'

export const GuidePanel = () => (
  <div id="guidePanel" className="panel panel-default verticalCenter">
    <div className="panel-body text-center">
      <FontAwesome id="bookIcon" name="book" />
      <p id="guideText">Agile Web Banking οδηγίες</p>
    </div>
  </div>
)

export default GuidePanel
