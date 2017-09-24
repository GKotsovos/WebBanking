import React from 'react';
import DeleteLinkedProductModal from '../DeleteLinkedProductModal';
import FontAwesome from 'react-fontawesome';
import './DeleteLinkedProduct.css';

export const DeleteLinkedProduct = ({
  debitCardId,
  linkedProductId,
  deleteLinkedProduct
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
      deleteLinkedProduct={deleteLinkedProduct}
    />
  </div>
)

export default DeleteLinkedProduct
