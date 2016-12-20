import React from 'react';
import Login from '../Login';
import ForgotPassword from '../ForgotPassword';
import NewApplication from '../NewApplication';
import News from '../News';
import InformationPanel from '../InformationPanel';
import Information from '../Information';
import ContactPanel from '../ContactPanel';
import GuidePanel from '../GuidePanel';
import Guide from '../Guide';
import './HomeView.css';

export const HomeView = () => (
  <div>
    <div id="homeContainer" className="container">
      <div id="homeRow" className="row">
        <div id="login" className="col-sm-4">
          <Login />
        </div>
        <div id="news" className="col-sm-8">
          <NewApplication />
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
