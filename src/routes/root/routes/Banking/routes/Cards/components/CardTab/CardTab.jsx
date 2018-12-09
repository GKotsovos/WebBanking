import React from 'react'

export const CardTab = ({ type, text, deactivateCard, linkTo }) => (
  <li className={`cardTypeTab ${window.location.href.includes('/' + type + 'cards') ? 'active' : ''}`}
    onClick={() => {
      deactivateCard();
      linkTo('/banking/cards/' + type + 'cards');
    }}>
    <a href={`#${type}`} className="mainCardTab" aria-controls={type} role="tab" data-toggle="tab">{text}</a>
  </li>
)

export default CardTab
