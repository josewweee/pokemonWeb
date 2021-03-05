export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const COMPARE = 'COMPARE';

export const openModal = (pokemonData) => async (dispatch) => {
  let pokemonReady = {};

  const pokemonInfo = await fetch(pokemonData.url);
  pokemonReady = await pokemonInfo.json();

  const speciesRawData = await fetch(pokemonReady.species.url);
  const speciesData = await speciesRawData.json();

  let englishText = speciesData.flavor_text_entries.find((item) => item.language.name === 'en').flavor_text;
  pokemonReady.description = englishText;
  if (speciesData.gender_rate === -1) {
    pokemonReady.gender = 'Genderless';
  } else if (speciesData.gender_rate >= 4) {
    pokemonReady.gender = 'Female';
  } else {
    pokemonReady.gender = 'Male';
  }

  dispatch({
    type: OPEN_MODAL,
    payload: {
      pokemonData: pokemonReady,
      comparedPokemon: pokemonReady,
    },
  });
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const compare = () => {
  return {
    type: COMPARE,
  };
};
