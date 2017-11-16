import { connect } from 'react-redux';
import { linkTo } from '../modules/banking';
import { getAccounts, deactiveAccount } from '../routes/Accounts/modules/accounts';
import { getCards, deactivateCard } from '../routes/Cards/modules/cards';
import { getLoans, deactivateLoan } from '../routes/Loans/modules/loans';
import { initTransferTransactionForm } from '../routes/Transfers/modules/transfers'
import { initPaymentTransactionForm } from '../routes/Payments/modules/payments';
import { initializeOrderState } from '../routes/Orders/modules/orders';
import SmallTabs from '../components/Tabs/SmallTabs';

const mapStateToProps = (state) => ({
  activeRoute: state.banking.activeRoute,
  language: state.root.language
});

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
  getAccounts: () => getAccounts(),
  deactiveAccount: () => deactiveAccount(),
  getCards: () => getCards(),
  deactivateCard: ()=> deactivateCard(),
  getLoans: () => getLoans(),
  deactivateLoan: ()=> deactivateLoan(),
  initTransferTransactionForm: ()=> initTransferTransactionForm(),
  initPaymentTransactionForm: () => initPaymentTransactionForm(),
  initializeOrderState: () => initializeOrderState(),
}

export default connect(mapStateToProps, mapActionCreators)(SmallTabs);
