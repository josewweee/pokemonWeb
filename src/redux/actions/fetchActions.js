export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const QUERY_POKEMONS = 'QUERY_POKEMONS';
export const CANCEL_QUERY = 'CANCEL_QUERY';
export const INCREASE_ID = 'INCREASE_ID';

export const fetchPokemons = (id) => async (dispatch) => {
  const imageBaseEndPoint = 'https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/';
  try {
    const rawPokemonsPageList = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${id}`);
    const jsonPokemonsPageList = await rawPokemonsPageList.json();

    jsonPokemonsPageList.results.forEach(async (result) => {
      id = id + 1;
      const rawPokemonImage = await fetch(`${imageBaseEndPoint}${id}.png`);
      const pokemonImage = await rawPokemonImage.blob();
      const pokemonReady = {
        name: result.name,
        image: URL.createObjectURL(pokemonImage),
        url: result.url,
      };
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          pokemon: pokemonReady,
        },
      });
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      error: error,
    });
  }
};

//increase +20 to the offset, thats a next page in the api
export const increasePokemonId = () => {
  return {
    type: INCREASE_ID,
  };
};

//search pokemons in the already loaded ones
export const queryPokemons = (query) => {
  return {
    type: QUERY_POKEMONS,
    payload: {
      query,
    },
  };
};

//go back to the old state (loaded pokemons)
export const cancelQuery = () => {
  return {
    type: CANCEL_QUERY,
  };
};
