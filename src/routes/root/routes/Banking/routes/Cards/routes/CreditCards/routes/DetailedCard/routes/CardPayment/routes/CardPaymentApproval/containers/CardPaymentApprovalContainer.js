import { connect } from 'react-redux';
import { creditCardPayment } from '../../../../../../../../../modules/cards'
import CardPaymentApproval from '../components';

const mapStateToProps = (state) => ({
  transactionForm: state.cards.transactionForm,
});

const mapActionCreators = {
  creditCardPayment: () => creditCardPayment()
};

export default connect(mapStateToProps, mapActionCreators)(CardPaymentApproval);
