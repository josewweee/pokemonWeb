import { combineReducers } from 'redux';
import modalController from './modalReducer';
import pokemons from './pokemonsReducer';

/* MIXING THE REDUCERS INTO ONE */
export default combineReducers({
  modalController,
  pokemons,
});
