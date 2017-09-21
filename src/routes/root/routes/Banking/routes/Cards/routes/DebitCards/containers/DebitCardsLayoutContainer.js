import { connect } from 'react-redux';
import DebitCardsLayout from '../components/DebitCardsLayout';

const mapStateToProps = (state) => ({
  debitCards: state.cards.debitCards,
  activeCard: state.cards.activeCard,
});

const mapActionCreators = {
  
}

export default connect(mapStateToProps, null)(DebitCardsLayout);
