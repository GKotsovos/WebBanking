import { connect } from 'react-redux';
import LinkedProductsLayout from '../components/LinkedProductsLayout';
import { deleteLinkedProduct } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import _ from 'underscore'

const mapStateToProps = (state) => ({
  debitCardId: state.cards.activeCard.id,
  linkedProducts: _.find(state.cards.debitCards, (debitCard) => debitCard.debitCard.id == state.cards.activeCard.id).accounts,
  language: state.root.language,
});

export default connect(mapStateToProps, null)(LinkedProductsLayout);
