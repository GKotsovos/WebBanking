import { connect } from 'react-redux';
import LoadForm from '../components';

const mapStateToProps = (state) => ({
  loadDetails: state.cards.activeCard.loadDetails,
});

// const mapActionCreators = {
//   setActiveCard: (card) => setActiveCard(card),
//   getProductTransactionHistory: (productId) => getProductTransactionHistory(productId),
//   linkTo: (route) => linkTo(route)
// };

export default connect(mapStateToProps, null)(LoadForm);
