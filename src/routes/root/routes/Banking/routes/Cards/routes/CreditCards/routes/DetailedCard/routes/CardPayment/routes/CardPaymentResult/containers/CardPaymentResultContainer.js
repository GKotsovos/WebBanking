import { connect } from 'react-redux';
import CardPaymentForm from '../components';

const mapStateToProps = (state) => ({
  result: state.cards.transactionForm.result,
  linkToStart: state.cards.transactionForm.linkToStart,
});

// const mapActionCreators = {
//   setActiveCard: (card) => setActiveCard(card),
//   getProductTransactionHistory: (productId) => getProductTransactionHistory(productId),
//   linkTo: (route) => linkTo(route)
// };

export default connect(mapStateToProps, null)(CardPaymentForm);
