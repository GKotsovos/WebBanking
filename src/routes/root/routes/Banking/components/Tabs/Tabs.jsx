import React from 'react'
import DefaultTabs from '../../containers/DefaultTabsContainer'
import SmallTabs from '../../containers/SmallTabsContainer'
import FontAwesome from 'react-fontawesome'
import './Tabs.css'

export const Tabs = () => (
  <div id="menuTabs">
    <div className="small">
      <SmallTabs />
    </div>
    <div className="default">
      <DefaultTabs />
    </div>
  </div>
)

export default Tabs
