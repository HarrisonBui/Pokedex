import { connect } from 'react-redux';
import { selectAllPokemon, selectPokemonItem } from '../../reducers/selectors';
import { requestSinglePokemon }  from '../../actions/pokemon_actions';

import ItemDetail from './item_detail';


const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.params.itemId)
});

// const mapDispatchToProps = dispatch => ({
//   requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
// });

export default connect(
  mapStateToProps,
  null
)(ItemDetail);
