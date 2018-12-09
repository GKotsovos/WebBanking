import React, { Component, PropTypes } from 'react';
import LogOutModal from '../LogOutModal'
import _ from 'underscore'
import Tabs from '../Tabs'

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
      <div id="bankingLayout" className="container" onClick={() => $('.collapse').collapse('hide')}>
        <Tabs />
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
  children : React.PropTypes.element.isRequired
}

export default BankingLayout
