import { connect } from 'react-redux';
import {
  setInitAccountsTabState,
  setInitCardsTabState,
  setInitLoansTabState,
  setInitTransfersTabState,
  setInitPaymentsTabState,
  setInitOrdersTabState
 } from '../modules/banking';
import SmallTabs from '../components/Tabs/SmallTabs';

const mapActionCreators = {
  setInitAccountsTabState: () => setInitAccountsTabState(),
  setInitCardsTabState: () => setInitCardsTabState(),
  setInitLoansTabState: () => setInitLoansTabState(),
  setInitTransfersTabState: () => setInitTransfersTabState(),
  setInitPaymentsTabState: () => setInitPaymentsTabState(),
  setInitOrdersTabState: () => setInitOrdersTabState(),
};

export default connect(null, mapActionCreators)(SmallTabs);
