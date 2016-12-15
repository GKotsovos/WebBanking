import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Information.css'

export const Information = () => (
  <div id="infoPanel" className="panel panel-default verticalCenter">
    <div className="panel-body">
      <div id="panelRow" className="row verticalCenter">
        <div className="col-sm-3 col-xs-2">
          <FontAwesome id="infoIcon" name="info-circle" size="3x" />
        </div>
        <div id="infoText" className="col-sm-9 col-xs-10">
          <span >Σημαντικές πληροφορίες και συμβουλές ασφαλείας</span>
        </div>
      </div>
    </div>
  </div>
)

export default Information
