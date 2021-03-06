import {connect} from 'react-redux';
import {requestAllPokemon, requestOnePokemon} from './../../actions/pokemon_actions';
import {selectAllPokemon, select} from './../../reducers/selectors';
import PokemonIndex from './pokemon_index';


const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  requestOnePokemon: (PokeId) => dispatch(requestOnePokemon(PokeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)