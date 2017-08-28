import { connect } from 'react-redux';
import PrepaidCardsLayout from '../components/PrepaidCardsLayout';

const mapStateToProps = (state) => ({
  prepaidCards: state.cards.prepaidCards,
  activeCard: state.cards.activeCard,
});

const mapActionCreators = {

}

export default connect(mapStateToProps, null)(PrepaidCardsLayout);
