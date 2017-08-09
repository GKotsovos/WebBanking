import { connect } from 'react-redux';
import { getCards } from '../modules/cards'
import CardsTabs from '../components/CardsLayout';

const mapActionCreators = {
  getCards: () => getCards(),
}

export default connect(null, mapActionCreators)(CardsTabs);
