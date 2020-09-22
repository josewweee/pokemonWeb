import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import { connect } from 'react-redux';
import { fetchPokemons, increasePokemonId } from '../../redux/actions/fetchActions';
import Col from 'react-bootstrap/col';
import { Row, Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import './styles.css';

//Pokemons lists
const PokemonList = (props) => {
  //pokemons index, we go 20 at the time
  let id = props.pokemons.index;

  //load more pokemons as we scroll down
  const loadMorePokemons = () => {
    props.fetch(id);
    props.nextPage();
  };

  //showing the comparing card alert if we are comparing
  let cardAlertDisplay = props.modalController.isComparing ? '' : 'hidden';

  return (
    <div>
      {/* Check if we are comparing to render */}
      {props.modalController.isComparing && (
        <div className={`card-alert-container ${cardAlertDisplay}`}>
          <div className="card">
            <div className="card-header--alert">
              <span>Comparing pokemon</span>
            </div>
            <div className="card-body--alert">
              <strong>
                <span>{props.modalController.pokemonData.name}</span>
              </strong>
            </div>
          </div>
        </div>
      )}
      <Container className="pokemons-container">
        {/* POKEMONS IF IN A QUERY */}
        {props.pokemons.queryPokemons !== null ? (
          <Row>
            {props.pokemons.queryPokemons.map((pokemon) => (
              <Col xs={6} sm={3} md={3} lg={3} key={pokemon.id}>
                <Pokemon data={pokemon} />
              </Col>
            ))}
          </Row>
        ) : (
          /* POKEMONS IF NOT IN A QUERY */
          /* infinite scroll to keep searching */
          <InfiniteScroll
            loadMore={loadMorePokemons}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
            initialLoad={false}
            threshold={20}
          >
            <Row>
              {props.pokemons.pokemons.map((pokemon) => (
                <Col xs={6} sm={3} md={3} lg={2} key={pokemon.id}>
                  <Pokemon data={pokemon} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (id) => dispatch(fetchPokemons(id)),
    nextPage: () => dispatch(increasePokemonId()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
