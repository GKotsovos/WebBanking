import React, { Component, PropTypes } from 'react';
import Tabs from '../Tabs'
import TabPanels from '../TabPanels'
import './BankingView.css';

// export const BankingView = () => (
class BankingView extends Component {
  componentWillMount() {
    const { initialFetch, getAccounts } = this.props;
    if (!initialFetch) {
      getAccounts();
    }
  }

  render() {
    return (
      <div id="menuContainer" className="container">
        <Tabs />
        <TabPanels />
      </div>
    )
  }
}

export default BankingView
