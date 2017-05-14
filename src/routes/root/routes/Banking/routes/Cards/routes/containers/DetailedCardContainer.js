import { connect } from 'react-redux';
import DetailedCard from '../components/DetailedCard';

const mapStateToProps = (state) => ({
  activeCard: state.cards.activeCard
});

export default connect(mapStateToProps, null)(DetailedCard);
