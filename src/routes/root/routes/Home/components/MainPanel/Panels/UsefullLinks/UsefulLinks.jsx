import React  from 'react';
import Link from './Link';
import ClosePanelButton from 'routes/root/routes/Home/containers/ClosePanelButtonContainer';
import localizationText from './localizationText';

export const UsefulLinks = ({ language }) => (
  <div className="useful-links-panel">
    <ClosePanelButton />
    <h3 className="useful-links-panel__title" id="infoTittle">{localizationText[language].usefullLinksTitle}</h3>
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

export default UsefulLinks
