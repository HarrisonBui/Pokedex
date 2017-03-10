import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestSinglePokemon, requestCreatePokemon }  from '../../actions/pokemon_actions';

import PokemonForm from './pokemon_detail';

const mapDispatchToProps = dispatch => ({
  createPokemon: (id) => dispatch(requestCreatePokemon(id))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
