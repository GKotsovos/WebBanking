import React from 'react';
import DeleteLinkedProductModal from '../DeleteLinkedProductModal';
import ErrorMessageModal from 'routes/root/routes/Banking/routes/components/ErrorMessageModal';
import FontAwesome from 'react-fontawesome';

export const DeleteLinkedProduct = ({
  debitCardId,
  linkedProductId,
  errorMessage,
  language,
  deleteLinkedProduct,
  clearErrorMessage
}) => (
  <div>
    <FontAwesome
      className="xIcon"
      name="times"
      data-toggle="modal"
      data-target="#deleteLinkedProductModal"
    />
    <DeleteLinkedProductModal
      debitCardId={debitCardId}
      linkedProductId={linkedProductId}
      language={language}
      deleteLinkedProduct={deleteLinkedProduct}
    />
    <ErrorMessageModal
      errorMessage={errorMessage}
      language={language}
      clearErrorMessage={clearErrorMessage}
    />
  </div>
)

export default DeleteLinkedProduct
