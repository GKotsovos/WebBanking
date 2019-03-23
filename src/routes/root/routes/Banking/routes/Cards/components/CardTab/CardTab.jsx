import React from 'react'

export const CardTab = ({ type, text, deactivateCard, linkTo }) => (
  <li className={`card-tab ${window.location.href.includes('/' + type + 'cards') ? 'active' : ''}`}
    onClick={() => {
      deactivateCard();
      linkTo('/banking/cards/' + type + 'cards');
    }}>
    <a href={`#${type}`} className="card-tab__link" aria-controls={type} role="tab" data-toggle="tab">{text}</a>
  </li>
)

export default CardTab
