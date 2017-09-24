import React, { Component, PropTypes } from 'react';
import LogOutModal from '../LogOutModal'
import _ from 'underscore'
import Tabs from '../Tabs'
import './BankingLayout.css';

class BankingLayout extends Component {
  componentWillMount() {
    const {
      getCustomerName,
      getAccounts,
      getCards,
      getLoans,
    } = this.props;
    getCustomerName();
    getAccounts();
    getCards();
    getLoans();
  }

  render() {
    const {
      children,
      shouldShowLogOutModal,
      logOut
     } = this.props;
    return (
      <div id="bankingLayout" className="container">
        <Tabs />
        <div>
          {children}
        </div>
        <LogOutModal
          shouldShow={shouldShowLogOutModal}
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
