import { connect } from 'react-redux';
import {
  setInitAccountsTabState,
  setInitCardsTabState,
  setInitLoansTabState,
  setInitTransfersTabState,
  setInitPaymentsTabState,
  setInitOrdersTabState
 } from '../modules/banking';
import DefaultTabs from '../components/Tabs/DefaultTabs';

const mapActionCreators = {
  setInitAccountsTabState: () => setInitAccountsTabState(),
  setInitCardsTabState: () => setInitCardsTabState(),
  setInitLoansTabState: () => setInitLoansTabState(),
  setInitTransfersTabState: () => setInitTransfersTabState(),
  setInitPaymentsTabState: () => setInitPaymentsTabState(),
  setInitOrdersTabState: () => setInitOrdersTabState(),
};

export default connect(null, mapActionCreators)(DefaultTabs);
