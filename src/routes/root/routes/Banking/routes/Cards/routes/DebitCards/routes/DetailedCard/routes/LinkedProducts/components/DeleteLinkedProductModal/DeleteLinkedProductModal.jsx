import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export const DeleteLinkedProductModal = ({
  debitCardId,
  linkedProductId,
  language,
  deleteLinkedProduct
}) => (
  <div
    id="deleteLinkedProductModal"
    className="modal fade"
    aria-labelledby="myModalLabel"
    data-backdrop="static"
    data-keyboard="false">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">{localizationText[language].confirmationTitle}</span>
        </div>
        <div className="modal-body">
          {localizationText[language].confirmationPartOne}<span className="strong">«{_.map(debitCardId, ((num, key) =>  key % 4 == 0 && key != 0 ? ' ' + num : num ))}»</span>{localizationText[language].confirmationPartTwo}<span className="strong">«{linkedProductId}»</span>;
        </div>
        <div className="modal-footer">
          <button
            id="cancel"
            type="button"
            className="btn btn-default"
            data-dismiss="modal">
            {localizationText[language].cancel}
          </button>
          <button
            id="accept"
            type="button"
            className="btn btn-default accept"
            onClick={() => {
              deleteLinkedProduct(linkedProductId);
              $('#deleteLinkedProductModal').modal('hide');
            }}>
            {localizationText[language].accept}
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default DeleteLinkedProductModal
