import { connect } from 'react-redux';
import DetailedCard from '../components/DetailedCard';

const mapStateToProps = (state) => ({
  activeCard: state.cards.activeCard,
  language: state.root.language
});

export default connect(mapStateToProps, null)(DetailedCard);
