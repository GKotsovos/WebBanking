import React from 'react'
import _ from 'underscore';

export const DeleteLinkedProductModal = ({
  debitCardId,
  linkedProductId,
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
          <span className="modal-title">Επιβεβαίωση</span>
        </div>
        <div className="modal-body">
          Είστε βέβαιος ότι θέλετε να διαγράψετε την σύνδεση μεταξύ της <span className="strong">«{_.map(debitCardId, ((num, key) =>  key % 4 == 0 && key != 0 ? ' ' + num : num ))}»</span> και του <span className="strong">«{linkedProductId}»</span>;
        </div>
        <div className="modal-footer">
          <button
            id="cancel"
            type="button"
            className="btn btn-default"
            data-dismiss="modal">
            Ακύρωση
          </button>
          <button
            id="accept"
            type="button"
            className="btn btn-default accept"
            onClick={() => {
              deleteLinkedProduct(linkedProductId);
              $('#deleteLinkedProductModal').modal('hide');
            }}>
            Αποδοχή
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default DeleteLinkedProductModal
