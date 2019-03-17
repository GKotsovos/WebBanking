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
    data-backdrop="static"
    data-keyboard="false">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">{localizationText[language].confirmationTitle}</span>
        </div>
        <div className="modal-body">
          {localizationText[language].confirmationPartOne}<strong>«{_.map(debitCardId, ((num, key) =>  key % 4 == 0 && key != 0 ? ' ' + num : num ))}»</strong>{localizationText[language].confirmationPartTwo}<span className="strong">«{linkedProductId}»</span>;
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="common-button--red modal__cancel-button btn"
            data-dismiss="modal">
            {localizationText[language].cancel}
          </button>
          <button
            type="button"
            className="common-button--blue btn"
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
