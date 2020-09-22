import { combineReducers } from 'redux';
import modalController from './modalReducer';
import pokemons from './pokemonsReducer';

export default combineReducers({
  modalController,
  pokemons,
});
