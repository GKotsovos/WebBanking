import { connect } from 'react-redux';
import _ from 'underscore'
import { deleteLinkedProduct } from '../../../../../../../modules/cards'
import LinkedProducts from '../components';

const mapStateToProps = (state) => ({
  linkedProducts: _.find(state.cards.debitCards, (debitCard) => debitCard.debitCard.id == state.cards.activeCard.id).accounts
});

const mapActionCreators = {
  deleteLinkedProduct: (productId) => deleteLinkedProduct(productId),
};


export default connect(mapStateToProps, mapActionCreators)(LinkedProducts);
