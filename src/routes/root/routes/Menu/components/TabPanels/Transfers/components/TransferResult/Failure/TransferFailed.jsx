import React from 'react';
import FontAwesome from 'react-fontawesome'
import './TransferFailed.css';

export const TransferFailed = () => (
  <div className="panel panel-default" id="TransferFailed">
    <div id="failPanelBody" className="panel-body text-center">
      <FontAwesome id="failIcon" name="times" size="3x"/>
      <p id="failText">Η συνναλαγή σας δεν ολοκληρώθηκε με επιτυχία</p>
      <button id="returnToForm" type="button" className="btn btn-default">Επιστροφή</button>
    </div>
  </div>
)

export default TransferFailed
