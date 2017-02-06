import React from 'react';
import FontAwesome from 'react-fontawesome'
import './SuccessfulLoad.css';

export const SuccessfulLoad = () => (
  <div className="panel panel-default" id="successfulLoad">
    <div id="successPanelBody" className="panel-body text-center">
      <FontAwesome id="successIcon" name="check" size="3x"/>
      <p id="successText">Η φόρτιση της κάρτας σας ολοκληρώθηκε με επιτυχία</p>
      <button id="finishPayment" type="button" className="btn btn-default">Τέλος</button>
    </div>
  </div>
)

export default SuccessfulLoad
