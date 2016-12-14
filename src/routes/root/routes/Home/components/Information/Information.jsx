import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Information.css'

export const Information = () => (
  <div id="infoPanel" className="panel panel-default">
    <div className="panel-body">
      <div id="panelRow" className="row">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-2">
          <FontAwesome id="infoIcon" name="info-circle" size="3x" />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-10">
          <p id="infoText">Σημαντικές πληροφορίες και συμβουλές ασφαλείας</p>
        </div>
      </div>
    </div>
  </div>
)

export default Information
