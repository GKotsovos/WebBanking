import { connect } from 'react-redux';
import { setActiveLoan, getLoanTransactionHistory } from '../modules/loans'
import { linkTo } from '../../../modules/banking'
import Loan from '../components/Loan';

const mapStateToProps = (state) => ({
  language: state.root.language
});

const mapActionCreators = {
  setActiveLoan: (loan) => setActiveLoan(loan),
  getLoanTransactionHistory: (loanId) => getLoanTransactionHistory(loanId),
  linkTo: (route) => linkTo(route)
};

export default connect(mapStateToProps, mapActionCreators)(Loan);
