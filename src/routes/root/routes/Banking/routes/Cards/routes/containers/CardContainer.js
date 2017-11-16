import { connect } from 'react-redux';
import { setActiveCard, getCardTransactionHistory } from '../../modules/cards'
import { linkTo } from '../../../../modules/banking'
import Card from '../components/Card';

const mapStateToProps = (state) => ({
  language: state.root.language
});

const mapActionCreators = {
  setActiveCard: (card) => setActiveCard(card),
  getCardTransactionHistory: (productId) => getCardTransactionHistory(productId),
  linkTo: (route) => linkTo(route)
};

export default connect(mapStateToProps, mapActionCreators)(Card);
