import { connect } from 'react-redux';
import { getCustomerName, logOut } from '../modules/banking';
import Banking from '../components/BankingLayout';

const mapStateToProps = (state) => ({
  initialFetch: state.banking.initialFetch
});

const mapActionCreators = {
  getCustomerName: () => getCustomerName(),
  logOut: () => logOut(),
};

export default connect(mapStateToProps, mapActionCreators)(Banking);
