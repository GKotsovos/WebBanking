import { connect } from 'react-redux';
import _ from 'underscore'
import { deleteLinkedProduct } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import LinkedProductsLayout from '../components/LinkedProductsLayout';

const mapStateToProps = (state) => ({
  debitCardId: state.cards.activeCard.id,
  linkedProducts: _.find(state.cards.debitCards, (debitCard) => debitCard.debitCard.id == state.cards.activeCard.id).accounts
});

const mapActionCreators = {
  deleteLinkedProduct: (productId) => deleteLinkedProduct(productId),
};


export default connect(mapStateToProps, mapActionCreators)(LinkedProductsLayout);
