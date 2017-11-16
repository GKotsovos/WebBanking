import { connect } from 'react-redux';
import { getCardTransactionHistory } from '../../../../../modules/cards'
import DetailedCardLayout from '../components/DetailedCardLayout';

const mapStateToProps = (state) => ({
  activeCard: state.cards.activeCard
});

const mapActionCreators = {
  getCardTransactionHistory: (productId) => getCardTransactionHistory(productId),
};

export default connect(mapStateToProps, mapActionCreators)(DetailedCardLayout);
