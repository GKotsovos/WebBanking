import React from 'react';
import FontAwesome from 'react-fontawesome'
import './OrderSucceed.css';

export const OrderSucceed = () => (
  <div className="panel panel-default" id="orderSucceed">
    <div id="successPanelBody" className="panel-body text-center">
      <FontAwesome id="successIcon" name="check" size="3x"/>
      <p id="successText">Η πάγια εντολή καταχωρήθηκε με επιτυχία</p>
      <button id="finishTransfer" type="button" className="btn btn-default">Τέλος</button>
    </div>
  </div>
)

export default OrderSucceed
