import { connect } from 'react-redux';
import LoanPaymentForm from '../components';

const mapStateToProps = (state) => ({
  result: state.loans.transactionForm.result,
  linkToStart: state.loans.transactionForm.linkToStart,
});

// const mapActionCreators = {
//   setActiveLoan: (card) => setActiveLoan(card),
//   getProductTransactionHistory: (productId) => getProductTransactionHistory(productId),
//   linkTo: (route) => linkTo(route)
// };

export default connect(mapStateToProps, null)(LoanPaymentForm);
