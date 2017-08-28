import { connect } from 'react-redux';
import { linkTo } from '../../../modules/banking';
import { deactivateCard } from '../modules/cards';
import CardsTabsLayout from '../components/CardsTabsLayout';

const mapStateToProps = (state) => ({
  activeRoute: state.banking.activeRoute
});

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
  deactivateCard: () => deactivateCard(),
}

export default connect(mapStateToProps, mapActionCreators)(CardsTabsLayout);
