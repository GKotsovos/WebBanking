import { connect } from 'react-redux';
import { payment } from 'routes/root/routes/Banking/routes/Payments/modules/payments';
import PaymentApproval from '../components';

const mapStateToProps = (state) => ({
  transactionForm: state.payments.transactionForm,
  language: state.root.language,
});

const mapActionCreators = {
  payment: (transactionForm) => payment(transactionForm)
};

export default connect(mapStateToProps, mapActionCreators)(PaymentApproval);
