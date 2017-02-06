import React from 'react';
import FontAwesome from 'react-fontawesome'
import './OrderFailed.css';

export const OrderFailed = () => (
  <div className="panel panel-default" id="orderFailed">
    <div id="failPanelBody" className="panel-body text-center">
      <FontAwesome id="failIcon" name="times" size="3x"/>
      <p id="failText">Η πάγια εντολή δεν καταχωρήθηκε με επιτυχία</p>
      <button id="returnToForm" type="button" className="btn btn-default">Επιστροφή</button>
    </div>
  </div>
)

export default OrderFailed
