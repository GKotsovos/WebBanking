import { connect } from 'react-redux';
// import { linkTo } from '../modules/cards'
import PrepaidCardsLayout from '../components/PrepaidCardsLayout';

const mapStateToProps = (state) => ({
  prepaidCards: state.cards.prepaidCards,
  activeCard: state.cards.activeCard,
});

const mapActionCreators = {
  // linkTo: (route) => linkTo(route)
}

export default connect(mapStateToProps, null)(PrepaidCardsLayout);
