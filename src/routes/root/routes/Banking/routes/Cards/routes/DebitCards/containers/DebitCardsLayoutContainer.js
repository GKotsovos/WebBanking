import { connect } from 'react-redux';
// import { linkTo } from '../modules/cards'
import DebitCardsLayout from '../components/DebitCardsLayout';

const mapStateToProps = (state) => ({
  debitCards: state.cards.debitCards,
  activeCard: state.cards.activeCard,
});

const mapActionCreators = {
  // linkTo: (route) => linkTo(route)
}

export default connect(mapStateToProps, null)(DebitCardsLayout);
