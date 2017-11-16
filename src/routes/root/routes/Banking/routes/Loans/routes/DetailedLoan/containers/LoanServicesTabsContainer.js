import { connect } from 'react-redux';
import { linkTo } from 'routes/root/routes/Banking/modules/banking';
import { initLoanTransactionForm } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanServicesTabs from '../components/LoanServicesTabs';

const mapStateToProps = (state) => ({
  activeRoute: state.banking.activeRoute,
  language: state.root.language,
});

const mapActionCreators = {
  initLoanTransactionForm: () => initLoanTransactionForm(),
  linkTo: (route) => linkTo(route),
};

export default connect(mapStateToProps, mapActionCreators)(LoanServicesTabs);
