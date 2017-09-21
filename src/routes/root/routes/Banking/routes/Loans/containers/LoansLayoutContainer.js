import { connect } from 'react-redux';
// import { linkTo } from '../modules/cards'
import LoansLayout from '../components/LoansLayout';

const mapStateToProps = (state) => ({
  loans: state.loans.loans,
  activeLoan: state.loans.activeLoan,
});

const mapActionCreators = {
  // linkTo: (route) => linkTo(route)
}

export default connect(mapStateToProps, null)(LoansLayout);
