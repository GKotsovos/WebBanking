import React from 'react';
import _ from 'underscore';
import localizationText from './localizationText';
import './Comments.css';

export const Comments = ({
  comments,
  language,
  setTransferComments
}) => (
  <div className="form-group">
    <label htmlFor="transferComment">{localizationText[language].commentsTitle}</label>
    <textarea
      id="transferComment"
      className={`form-control ${_.isEmpty(comments) || comments.correct ? "" : "notValid"}`}
      value={comments ? comments.value : ""}
      onChange={(e) => setTransferComments(e.target.value)}
      rows="3"
    />
  </div>
)

export default Comments
