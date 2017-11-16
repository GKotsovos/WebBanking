import { connect } from 'react-redux';
import { prepaidCardLoad } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import LoadForm from '../components';

const mapStateToProps = (state) => ({
  transactionForm: state.cards.transactionForm,
  language: state.root.language,
});

const mapActionCreators = {
  prepaidCardLoad: () => prepaidCardLoad(),
};

export default connect(mapStateToProps, mapActionCreators)(LoadForm);
