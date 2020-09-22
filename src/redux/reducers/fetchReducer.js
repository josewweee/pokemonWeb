import { FETCH_SUCCESS, FETCH_ERROR, QUERY_POKEMONS, CANCEL_QUERY, INCREASE_ID } from '../actions/fetchActions';

const initialState = {
  pokemons: [],
  queryPokemons: null,
  isFetching: false,
  error: null,
  index: 0,
};

const pokemons = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        pokemons: [...state.pokemons, actions.payload.pokemon],
        isFetching: false,
      };
    case INCREASE_ID:
      return {
        ...state,
        index: state.index + 20,
      };
    case QUERY_POKEMONS:
      return {
        ...state,
        queryPokemons: [...state.pokemons.filter((pokemon) => pokemon.name.includes(actions.payload.query))],
      };
    case CANCEL_QUERY:
      return {
        ...state,
        pokemons: [...state.pokemons],
        queryPokemons: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: actions.error,
      };
    default:
      return state;
  }
};

export default pokemons;
