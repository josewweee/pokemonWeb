export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const COMPARE = "COMPARE";

export const openModal = (pokemonData) => {
  return {
    type: OPEN_MODAL,
    payload: {
      pokemonData,
      comparedPokemon: pokemonData,
    },
  };
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
