import React, { Component, PropTypes } from 'react'
import './ExistingOrdersLayout.css';

class ExistingOrdersLayout extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker()
  }

  render() {
    const { children } = this.props;
    return (
      <form id="existingOrdersContainer">
        {children}
      </form>
    )
  }
}

export default ExistingOrdersLayout
