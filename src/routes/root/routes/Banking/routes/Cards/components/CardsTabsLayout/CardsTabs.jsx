import React from 'react'
import CardTab from '../CardTab'
import localizationText from './localizationText';

export const CardsTabs = ({ language, linkTo, deactivateCard }) => (
  <div>
    <ul className="nav nav-tabs text-center cards-tabs" role="tablist">
      <CardTab
        type={'debit'}
        text={localizationText[language].debitCards}
        linkTo={linkTo}
        deactivateCard={deactivateCard}
      />
      <CardTab
        type='credit'
        text={localizationText[language].creditCards}
        linkTo={linkTo}
        deactivateCard={deactivateCard}
      />
      <CardTab
        type='prepaid'
        text={localizationText[language].prepaidCards}
        linkTo={linkTo}
        deactivateCard={deactivateCard}
      />
    </ul>
  </div>
)

export default CardsTabs
