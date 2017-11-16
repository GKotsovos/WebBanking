import React from 'react';
import Login from '../../containers/LoginContainer';
import InformationPanel from '../../containers/InformationPanelContainer';
import ContactPanel from '../../containers/ContactPanelContainer';
import GuidePanel from '../../containers/GuidePanelContainer';
import MainPanel from '../../containers/MainPanelContainer';
import './HomeView.css';

export const HomeView = () => (
  <div>
    <div id="homeContainer" className="container">
      <div id="homeRow" className="row">
        <div id="login" className="col-sm-4">
          <Login />
        </div>
        <div id="panelView" className="col-xs-12 col-sm-8">
          <MainPanel />
          <div id="helpPanels">
            <div className="col-sm-4 col-xs-12">
              <InformationPanel id="info"/>
            </div>
            <div className="col-sm-4 col-xs-12">
              <ContactPanel />
            </div>
            <div className="col-sm-4 col-xs-12">
              <GuidePanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
