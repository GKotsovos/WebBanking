import { connect } from 'react-redux';
import CardPaymentForm from '../components';

const mapStateToProps = (state) => ({
  result: state.cards.activeCard.paymentDetails.result,
});

// const mapActionCreators = {
//   setActiveCard: (card) => setActiveCard(card),
//   getProductTransactionHistory: (productId) => getProductTransactionHistory(productId),
//   linkTo: (route) => linkTo(route)
// };

export default connect(mapStateToProps, null)(CardPaymentForm);
