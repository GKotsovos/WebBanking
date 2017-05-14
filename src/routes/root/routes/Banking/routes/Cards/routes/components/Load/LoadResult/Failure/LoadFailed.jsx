import React from 'react';
import FontAwesome from 'react-fontawesome'
import './LoadFailed.css';

export const LoadFailed = () => (
  <div className="panel panel-default" id="loadFailed">
    <div id="failPanelBody" className="panel-body text-center">
      <FontAwesome id="failIcon" name="times" size="3x"/>
      <p id="failText">Η φόρτιση της κάρτας σας δεν ολοκληρώθηκε με επιτυχία</p>
      <button id="returnToForm" type="button" className="btn btn-default">Επιστροφή</button>
    </div>
  </div>
)

export default LoadFailed
