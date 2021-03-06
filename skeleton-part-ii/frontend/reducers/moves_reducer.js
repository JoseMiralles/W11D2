import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions'

const movesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_ONE_POKEMON:
            return Object.assign({}, state, action.pokemon.moves)
            default:
                return state;
    }
}
export default movesReducer