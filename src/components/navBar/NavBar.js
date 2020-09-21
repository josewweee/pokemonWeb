import React, {useState} from 'react'
import './styles.css'
import {connect} from 'react-redux'
import {queryPokemons, cancelQuery} from '../../redux/actions/fetchActions'

const UseNavBar = (props) => {

    let inputRef = React.createRef()

    const [cancelButtonVisibility, setCancelButtonVisibility] = useState('query-button hidden')


    const handleSearchBar = (event) => {
        
        if(event.target.value === '') {
            setCancelButtonVisibility('query-button hidden')
            props.cancelQuery();
            return
        }
        setCancelButtonVisibility('query-button')
        props.StartToquery(event.target.value)
    }

    const cleanQueryAndResetList = () => {
        inputRef.current.value = ''
        setCancelButtonVisibility('query-button hidden')
        props.cancelQuery();
    }


    return(
        <div className='navbar-custom'>
            <div className='titles'>
                <span className='main'>PokéApp</span>
                <p className='description'>Pokemons</p>
                <span className='items-section'>Items</span>

            </div>
            <div className='query-container'>
                <input type='text' placeholder='Search' ref={inputRef} className='query-bar' onChange={handleSearchBar}/>
                <button onClick={cleanQueryAndResetList} className={cancelButtonVisibility}>X</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        StartToquery: (query) => dispatch(queryPokemons(query)),
        cancelQuery: () => dispatch(cancelQuery()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseNavBar)