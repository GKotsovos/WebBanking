import React from 'react'
import FontAwesome from 'react-fontawesome'
import './InformationPanel.css'

export const InformationPanel = () => (
  <div onClick={() => console.log("clicked")} id="infoPanel" className="panel panel-default verticalCenter">
    <div className="panel-body text-center">
          <FontAwesome id="infoIcon" name="info-circle" size="3x" />
          <div id="infoText">Σημαντικές πληροφορίες και συμβουλές ασφαλείας</div>
    </div>
  </div>
)

export default InformationPanel
