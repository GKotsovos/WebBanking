import React from 'react';
import FontAwesome from 'react-fontawesome'
import './SuccessfulTransfer.css';

export const SuccessfulTransfer = () => (
  <div className="panel panel-default" id="SuccessfulTransfer">
    <div id="successPanelBody" className="panel-body text-center">
      <FontAwesome id="successIcon" name="check" size="3x"/>
      <p id="successText">Η συνναλαγή σας ολοκληρώθηκε με επιτυχία</p>
      <button id="finishTransfer" type="button" className="btn btn-default">Τέλος</button>
    </div>
  </div>
)

export default SuccessfulTransfer
