import { connect } from 'react-redux';
// import { linkTo } from '../modules/cards'
import CreditCardsLayout from '../components/CreditCardsLayout';

const mapStateToProps = (state) => ({
  creditCards: state.cards.creditCards,
  activeCard: state.cards.activeCard,
});

const mapActionCreators = {
  // linkTo: (route) => linkTo(route)
}

export default connect(mapStateToProps, null)(CreditCardsLayout);
