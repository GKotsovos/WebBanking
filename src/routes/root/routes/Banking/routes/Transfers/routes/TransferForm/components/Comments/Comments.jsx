import React from 'react';
import _ from 'underscore';
import './Comments.css';

export const Comments = ({
  comments,
  setTransferComments
}) => (
  <div className="form-group">
    <label htmlFor="transferComment">Σχόλια</label>
    <textarea
      id="transferComment"
      className={`form-control ${_.isEmpty(comments) || comments.correct ? "" : "notValid"}`}
      value={comments.value || ""}
      onChange={(e) => setTransferComments(e.target.value)}
      rows="3"
    />
  </div>
)

export default Comments
