import { connect } from 'react-redux';
import { deleteLinkedProduct, clearErrorMessage } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import DeleteLinkedProduct from '../components/DeleteLinkedProduct';

const mapStateToProps = (state) => ({
  errorMessage: state.cards.errorMessage,
  language: state.root.language
});

const mapActionCreators = {
  deleteLinkedProduct: (productId) => deleteLinkedProduct(productId),
  clearErrorMessage: () => clearErrorMessage(),
};

export default connect(mapStateToProps, mapActionCreators)(DeleteLinkedProduct);
