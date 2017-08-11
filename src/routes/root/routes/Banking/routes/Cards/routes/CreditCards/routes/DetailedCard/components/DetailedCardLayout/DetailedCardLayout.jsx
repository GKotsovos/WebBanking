import React, { Component, PropTypes } from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import CreditCardServicesTabs from '../../containers/CreditCardServicesContainer'
import './DetailedCardLayout.css';

class DetailedCardLayout extends Component {
  render() {
    return (
      <div>
        <DetailedCard type="CREDIT"/>
        <CreditCardServicesTabs />
        {this.props.children}
      </div>
    )
  }
}

export default DetailedCardLayout
