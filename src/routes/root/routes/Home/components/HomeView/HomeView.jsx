import React from 'react';
import Login from '../../containers/LoginContainer';
import InformationPanel from '../../containers/InformationPanelContainer';
import ContactPanel from '../../containers/ContactPanelContainer';
import UsefulLinksPanel from '../../containers/UsefulLinksPanelContainer';
import MainPanel from '../../containers/MainPanelContainer';

export const HomeView = () => (
  <div className="home-page container" onClick={() => $('.collapse').collapse('hide')}>
    <div className="home-page__row row">
      <div className="home-page__login col-sm-4">
        <Login />
      </div>
      <div className="home-page-panels col-xs-12 col-sm-8">
        <MainPanel />
        <div className="home-page-panels__information-panels">
          <div className="home-page-panels__panel-container col-sm-4 col-xs-12">
            <InformationPanel />
          </div>
          <div className="home-page-panels__panel-container col-sm-4 col-xs-12">
            <ContactPanel />
          </div>
          <div className="home-page-panels__panel-container col-sm-4 col-xs-12">
            <UsefulLinksPanel />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
