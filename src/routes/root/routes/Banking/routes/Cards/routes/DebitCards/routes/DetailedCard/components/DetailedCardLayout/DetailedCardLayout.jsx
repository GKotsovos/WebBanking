import React, { Component, PropTypes } from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import DebitCardServicesTabs from '../../containers/DebitCardServicesContainer'
import './DetailedCardLayout.css';

class DetailedCardLayout extends Component {
  render() {
    return (
      <div>
        <DetailedCard type="DEBIT"/>
        <DebitCardServicesTabs />
        {this.props.children}
      </div>
    )
  }
}
export default DetailedCardLayout
