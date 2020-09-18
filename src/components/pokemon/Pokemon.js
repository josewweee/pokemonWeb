import React from 'react'
import './styles.css'
import {connect} from 'react-redux'
import {openModal} from '../../redux/actions/modalActions'


const Pokemon = (props) => {
    const checkPokemonData = ()=> {
        props.openModal(props.data)
    }

    return (
        <div className='card' onClick={checkPokemonData}>
            <img src={props.data.sprites.front_default} alt='imagen pokemon' className='card-img'></img>
            <div className='card-name--container'>
                <p className='card-name'>{props.data.name}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (pokemonData) => dispatch(openModal(pokemonData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)