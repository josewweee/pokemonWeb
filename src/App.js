import React from 'react';
import './App.css';
import Banner from './components/banner';
import NavBar from './components/navBar';
import PokemonList from './components/pokemons-list';
import store from './redux/store'
import {Provider} from 'react-redux'
import PokemonModal from './components/pokemon-modal/PokemonModal';
import UseOverlay from './components/overlay';


/* MAIN APP */
function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <UseOverlay/>
        <Banner/>
        <NavBar/>
        <PokemonModal/>
        <PokemonList/>
      </div>
    </Provider>
  );
}

export default App;
