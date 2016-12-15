import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Guide.css'

export const Guide = () => (
  <div id="guidePanel" className="panel panel-default verticalCenter">
    <div className="panel-body text-center">
      <FontAwesome id="bookIcon" name="book" />
      <p id="guideText">Aegean Web Banking οδηγίες</p>
    </div>
  </div>
)

export default Guide
