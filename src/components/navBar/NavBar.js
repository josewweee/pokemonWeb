import React, {useState} from 'react'
import './styles.css'
import {connect} from 'react-redux'
import {queryPokemons, cancelQuery} from '../../redux/actions/fetchActions'

const UseNavBar = (props) => {

    let inputRef = React.createRef()

    //variable to show or hide the cancel button
    const [cancelButtonClass, setCancelButtonClass] = useState('query-button hidden')

    //Search in the already fetched pokemons list
    const handleSearchBar = (e) => {
        //if we have nothing to search, go back to the pokemon list before query
        if(e.target.value === '') {
            //hide the cancel button
            setCancelButtonClass('query-button hidden')
            //cancel query
            props.cancelQuery();
            return
        }
        //show cancel button
        setCancelButtonClass('query-button')
        //query
        props.query(e.target.value)
    }

    //Go back to the pokemon list before query
    const cleanQuery = () => {
        //clear input
        inputRef.current.value = ''
        //hide cancel button
        setCancelButtonClass('query-button hidden')
        //cancel query
        props.cancelQuery();
    }


    return(
        <div className='navbar-custom'>
            <div className='titles'>
                <h5 className='main'>PokéApp</h5>
                <p className='description'>Pokemons</p>
                <span className='items-section'>Items</span>

            </div>
            <div className='query-container'>
                <input type='text' placeholder='Search' ref={inputRef} className='query-bar' onChange={handleSearchBar}/>
                <button onClick={cleanQuery} className={cancelButtonClass}>X</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        query: (query) => dispatch(queryPokemons(query)),
        cancelQuery: () => dispatch(cancelQuery()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseNavBar)