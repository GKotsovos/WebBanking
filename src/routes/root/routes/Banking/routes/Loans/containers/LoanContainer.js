import { connect } from 'react-redux';
import { setActiveLoan, getLoanTransactionHistory } from '../modules/loans'
import { linkTo } from '../../../modules/banking'
import Loan from '../components/Loan';

const mapActionCreators = {
  setActiveLoan: (loan) => setActiveLoan(loan),
  getLoanTransactionHistory: (loanId) => getLoanTransactionHistory(loanId),
  linkTo: (route) => linkTo(route)
};


export default connect(null, mapActionCreators)(Loan);
