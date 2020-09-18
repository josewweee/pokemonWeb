import {OPEN_MODAL, CLOSE_MODAL, COMPARE} from '../actions/modalActions'

const initialState = {
    modalVisible: false,
    pokemonData: null,
    isComparing: false,
    comparedPokemon: null
}
/* OPEN AND CLOSE THE MODAL, SENDING POKEMON DATA DEPENDING OF WHICH ONE WAS SELECTED */
function modalController(state = initialState, actions) {
    switch (actions.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalVisible: true,
                pokemonData: state.isComparing? state.pokemonData: actions.payload.pokemonData,
                comparedPokemon: state.isComparing? actions.payload.comparedPokemon : null
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalVisible: false,
                pokemonData: null,
                comparedPokemon: null,
                isComparing: false
            }
        case COMPARE:
            return {
                ...state,
                modalVisible: false,
                isComparing: true
            }
        default:
            return state;
    }
}

export default modalController