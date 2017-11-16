import { connect } from 'react-redux';
import { creditCardPayment } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import CardPaymentApproval from '../components';

const mapStateToProps = (state) => ({
  transactionForm: state.cards.transactionForm,
  language: state.root.language,
});

const mapActionCreators = {
  creditCardPayment: () => creditCardPayment()
};

export default connect(mapStateToProps, mapActionCreators)(CardPaymentApproval);
