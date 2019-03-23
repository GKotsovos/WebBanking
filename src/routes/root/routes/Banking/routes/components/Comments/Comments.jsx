import React from 'react';
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export const Comments = ({
  comments,
  language,
  setTransferComments
}) => (
  <div className="form-group">
    <label htmlFor="comment">{localizationText[language].commentsTitle}</label>
    <textarea
      id="comment"
      className={`form-control ${isEmpty(comments) || comments.correct ? "" : "invalid-value"}`}
      value={comments ? comments.value : ""}
      onChange={(e) => setTransferComments(e.target.value)}
      rows="3"
    />
  </div>
)

export default Comments
