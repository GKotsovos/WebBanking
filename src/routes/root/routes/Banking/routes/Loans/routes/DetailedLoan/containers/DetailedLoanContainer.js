import { connect } from 'react-redux';
import { getLoanTransactionHistory } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import DetailedLoan from '../components/DetailedLoan';

const mapStateToProps = (state) => ({
  activeLoan: state.loans.activeLoan
});

const mapActionCreators = {
  getLoanTransactionHistory: (productId) => getLoanTransactionHistory(productId),
};

export default connect(mapStateToProps, mapActionCreators)(DetailedLoan);
