export const FETCH_POSTS_REQUEST = 'FETCH_POST_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POST_ERROR'
export const QUERY_POKEMONS = 'QUERY_POKEMONS'
export const CANCEL_QUERY = 'CANCEL_QUERY'
export const INCREASE_ID = 'INCREASE_ID'

//fetch the pokemons
export const fetchPokemons = (id) => (dispatch) => {
        //object to store our new fetchec pokemon
        let pokemonReady = {}
        //fetching the api for the info
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( rawList => rawList.json())
        .then(pokemon => {
            pokemonReady = pokemon
            //in the first fetch we're still missing data, so we do a second fetch to another url
            fetch(pokemon.species.url)
            .then(res => res.json())
            .then(aditionalData => {
                //description
                let en_text = aditionalData.flavor_text_entries.find(item => item.language.name === 'en').flavor_text
                pokemonReady.description = en_text
                //gender formula according to de api docs
                if(aditionalData.gender_rate === -1) pokemonReady.gender = 'Genderless'
                else if (aditionalData.gender_rate >= 4) pokemonReady.gender = 'Female'
                else pokemonReady.gender = 'Male'
                //send it to the reducer
                dispatch({
                    type: FETCH_POSTS_SUCCESS,
                    payload: {
                        pokemon: pokemonReady
                    }
                })
            })
        })
        //errors?
        .catch(error =>{
            dispatch({
                type: FETCH_POSTS_ERROR,
                error: error
            })
        })
}
//increase +20 the pokemons id, thats a next page in the api
export const increasePokemonId = () => {
    return {
        type: INCREASE_ID
    }
} 

//search pokemons in the already loaded ones
export const queryPokemons = (query) => {
    return {
        type: QUERY_POKEMONS,
        payload: {
            query
        }
    }
}

//go back to the old state (loaded pokemons)
export const cancelQuery = () => {
    return {
        type: CANCEL_QUERY
    }
}