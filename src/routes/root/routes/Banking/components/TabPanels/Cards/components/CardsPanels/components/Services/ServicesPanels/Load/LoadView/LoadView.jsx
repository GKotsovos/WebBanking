import React from 'react';
import Load from '../Load';
import LoadApproval from '../LoadApproval'
import LoadResult from '../LoadResult'
import './LoadView.css';

export const LoadView = () => (
  <div role="tabpanel" className="loadContainer tab-pane" id="load">
    <Load />
    {/* <LoadApproval /> */}
    {/* <LoadResult /> */}
  </div>
)

export default LoadView
