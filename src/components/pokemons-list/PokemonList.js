import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import { connect } from 'react-redux';
import { fetchPokemons, increasePokemonId } from '../../redux/actions/fetchActions';
import Col from 'react-bootstrap/col';
import { Row, Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import './styles.css';

const PokemonList = (props) => {
  let pokemonActualIndex = props.pokemons.index;

  const loadMorePokemons = () => {
    props.fetch(pokemonActualIndex);
    props.nextPage();
  };

  return (
    <div className="pokemons-list">
      <div className={props.modalController.isComparing ? 'card-alert-container' : 'hiden'}>
        <div className="card">
          <div className="card-header--alert">
            <span>Comparing pokemon</span>
          </div>
          <div className="card-body--alert">
            <strong>
              <span>{props.modalController.pokemonData && props.modalController.pokemonData.name}</span>
            </strong>
          </div>
        </div>
      </div>
      <Container className="pokemons-container">
        {props.pokemons.queryPokemons !== null ? (
          <Row>
            {props.pokemons.queryPokemons.map((pokemon, index) => (
              <Col xs={6} sm={3} md={3} lg={3} key={index}>
                <Pokemon data={pokemon} />
              </Col>
            ))}
          </Row>
        ) : (
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
              {props.pokemons.pokemons.map((pokemon, index) => (
                <Col xs={6} sm={3} md={3} lg={2} key={index}>
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
