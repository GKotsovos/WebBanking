import React from 'react'
import FontAwesome from 'react-fontawesome'
import CardTab from '../CardTab'
import './CardsTabs.css'

export const CardsTabs = ({ linkTo, deactivateCard }) => (
  <div>
    <ul id="cardTypeTabs" className="nav nav-tabs text-center" role="tablist">
      <CardTab
        type={'debit'}
        text='Χρεωστικές'
        linkTo={linkTo}
        deactivateCard={deactivateCard}
      />
      <CardTab
        type='credit'
        text='Πιστωτικές'
        linkTo={linkTo}
        deactivateCard={deactivateCard}
      />
      <CardTab
        type='prepaid'
        text='Προπληρωμένες'
        linkTo={linkTo}
        deactivateCard={deactivateCard}
      />
    </ul>
  </div>
)

export default CardsTabs
