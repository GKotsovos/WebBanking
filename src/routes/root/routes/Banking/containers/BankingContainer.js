import { connect } from 'react-redux';
import { getAccounts } from '../modules/banking';
import Banking from '../components/BankingView';

const mapActionCreators = {
  getAccounts: () => getAccounts()
};

const mapStateToProps = (state) => ({
  initialFetch: state.banking.initialFetch
});

export default connect(mapStateToProps, mapActionCreators)(Banking);
