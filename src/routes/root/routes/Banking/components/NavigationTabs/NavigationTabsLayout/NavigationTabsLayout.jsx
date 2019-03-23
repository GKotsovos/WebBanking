import React from 'react';
import DesktopNavigationTabs from '../../../containers/DesktopNavigationTabsContainer';
import MobileNavigationTas from '../../../containers/MobileNavigationTabsContainer';

export const NavigationTabsLayout = () => (
  <div>
    <div className="mobile-navigation-tabs__container">
      <MobileNavigationTas />
    </div>
    <div className="desktop-navigation-tabs__container">
      <DesktopNavigationTabs />
    </div>
  </div>
)

export default NavigationTabsLayout
