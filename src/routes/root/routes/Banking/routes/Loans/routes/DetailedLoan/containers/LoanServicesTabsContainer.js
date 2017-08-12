import { connect } from 'react-redux';
import { linkTo } from 'routes/root/routes/Banking/modules/banking';
import { clearLoanTransactionForm } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanServicesTabs from '../components/LoanServicesTabs';

const mapStateToProps = (state) => ({
  activeRoute: state.banking.activeRoute
});

const mapActionCreators = {
  clearLoanTransactionForm: () => clearLoanTransactionForm(),
  linkTo: (route) => linkTo(route),
};

export default connect(mapStateToProps, mapActionCreators)(LoanServicesTabs);
