import React, { Component, PropTypes } from 'react';
import DetailedCard from '../../../../../containers/DetailedCardContainer'
import PrepaidCardServicesTabs from '../../containers/PrepaidCardServicesContainer'
import './DetailedCardLayout.css';

class DetailedCardLayout extends Component {
  render() {
    return (
      <div>
        <DetailedCard type="PREPAID"/>
        <PrepaidCardServicesTabs />
        {this.props.children}
      </div>
    )
  }
}
export default DetailedCardLayout
