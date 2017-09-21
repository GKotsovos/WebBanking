import { connect } from 'react-redux';
import { clearCardTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import LoadResult from '../components';

const mapStateToProps = (state) => ({
  result: state.cards.transactionForm.result,
  errorMessage: state.cards.transactionForm.errorMessage,
  linkToStart: state.cards.transactionForm.linkToStart,
});

const mapActionCreators = {
  clearCardTransactionForm: () => clearCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoadResult);
