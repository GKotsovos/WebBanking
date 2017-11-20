import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import Link from './Link';
import localizationText from './localizationText';
import './UsefullLinks.css'

export const UsefullLinks = ({ language, changePanel }) => (
  <div id="usefullLinks" className="">
    <FontAwesome className="closePanel" name="window-close-o" onClick={() => changePanel('NEWS')} />
    <h3 id="infoTittle">{localizationText[language].usefullLinksTitle}</h3>
    <ul>
      <Link
        title={localizationText[language].bankOfGreece}
        link="http://www.bankofgreece.gr"
      />
      <Link
        title={localizationText[language].bicMatching}
        link="http://www.bankofgreece.gr/Pages/el/PaymentsSystems/SEPA/BICcodeGr.aspx"
      />
      <Link
        title={localizationText[language].ibanValidator}
        link="https://www.iban.com"
      />
      <Link
        title={localizationText[language].bicSearch}
        link="https://transferwise.com/us/swift-codes"
      />
      <Link
        title={localizationText[language].exchangeRates}
        link="http://www.xe.com"
      />
    </ul>
  </div>
)

UsefullLinks.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default UsefullLinks
