import { combineReducers } from 'redux';
import modalController from './modalReducer';
import pokemons from './fetchReducer';

export default combineReducers({
  modalController,
  pokemons,
});
