import { connect } from 'react-redux';
import { clearCardTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import CardPaymentForm from '../components';

const mapStateToProps = (state) => ({
  result: state.cards.activeCard.paymentDetails.result,
  linkToStart: state.cards.transactionForm.linkToStart,
});

const mapActionCreators = {
  clearCardTransactionForm: () => clearCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(CardPaymentForm);
