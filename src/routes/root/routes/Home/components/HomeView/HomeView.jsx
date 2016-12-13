import React from 'react'
import Login from '../Login';
import News from '../News';
import Information from '../Information';
import Contact from '../Contact';
import Guide from '../Guide';
import './HomeView.css'

export const HomeView = () => (
  <div>
    <div id="homeContainer" className="container border">
      <div className="row">
        <div id="login" className="col-sm-4">
          <Login />
        </div>
        <div id="news" className="col-sm-8">
          <News />
          <div id="helpPanels">
            <div className="col-sm-4 col-xs-12">
              <Information id="info"/>
            </div>
            <div className="col-sm-4 col-xs-6">
              <Contact />
            </div>
            <div className="col-sm-4 col-xs-6">
              <Guide />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
