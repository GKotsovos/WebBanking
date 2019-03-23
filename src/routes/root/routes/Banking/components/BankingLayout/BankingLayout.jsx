import React, { Component, PropTypes } from 'react';
import LogOutModal from '../LogOutModal';
import NavigationTabs from '../NavigationTabs'

class BankingLayout extends Component {
  componentWillMount() {
    const {
      initLoad,
      setInitLoad,
      getCustomerName,
      getAccounts,
      getCards,
      getLoans,
      logOutCountDown
    } = this.props;
    if (!initLoad) {
      setInitLoad();
      logOutCountDown();
    }
    getCustomerName();
    getAccounts();
    getCards();
    getLoans();
  }

  render() {
    const {
      children,
      shouldShowLogOutModal,
      language,
      logOut
     } = this.props;

    return (
      <div className="banking-layout container" onClick={() => $('.collapse').collapse('hide')}>
        <NavigationTabs />
        <div>
          {children}
        </div>
        <LogOutModal
          shouldShow={shouldShowLogOutModal}
          language={language}
          logOut={logOut}
        />
      </div>
    )
  }
}

BankingLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default BankingLayout
