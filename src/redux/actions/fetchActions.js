export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const QUERY_POKEMONS = 'QUERY_POKEMONS';
export const CANCEL_QUERY = 'CANCEL_QUERY';
export const INCREASE_ID = 'INCREASE_ID';

//fetch the pokemons
export const fetchPokemons = (id) => async (dispatch) => {
  //object to store our new fetched pokemon
  let pokemonReady = {};
  //initial list
  try {
    const rawPokemonsPageList = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${id}`);
    const jsonPokemonsPageList = await rawPokemonsPageList.json();
    //each pokemon
    jsonPokemonsPageList.results.forEach(async (result) => {
      const rawIndividualPokemonData = await fetch(result.url);
      const individualPokemonData = await rawIndividualPokemonData.json();
      //pokemon aditional data
      const speciesRawData = await fetch(individualPokemonData.species.url);
      const speciesData = await speciesRawData.json();
      pokemonReady = individualPokemonData;
      //description
      let englishText = speciesData.flavor_text_entries.find((item) => item.language.name === 'en').flavor_text;
      pokemonReady.description = englishText;
      //gender formula according to de api docs
      if (speciesData.gender_rate === -1) pokemonReady.gender = 'Genderless';
      else if (speciesData.gender_rate >= 4) pokemonReady.gender = 'Female';
      else pokemonReady.gender = 'Male';
      //send it to the reducer
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
