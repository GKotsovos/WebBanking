import React, { Component, PropTypes } from 'react';
import _ from 'underscore'
import Tabs from '../Tabs'
import './BankingLayout.css';

class BankingLayout extends Component {
  componentWillMount() {
    const {
      getCustomerName,
      getAccounts,
      getCards
    } = this.props;
    getCustomerName();
    getAccounts();
    getCards();
  }

  componentDidMount() {
    const { logOut } = this.props;
    setTimeout(() => logOut(), 509000)
  }

  render() {
    const { children } = this.props;
    return (
      <div id="bankingLayout" className="container">
        <Tabs />
        <div>
          {children}
        </div>
      </div>
    )
  }
}

BankingLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default BankingLayout
