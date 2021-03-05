import React from 'react';

import Col from 'react-bootstrap/col';
import { Row } from 'react-bootstrap';

import './style.css';

export const ModalBodyPokemon = ({ data }) => (
  <Row className="row-container">
    <Col xs={4}>
      <img className="body-img" src={data.pokemonData.sprites.front_default} alt={data.pokemonData.name}></img>
    </Col>
    <Col xs={8} className="body-text-container">
      <div>
        <Row>
          <p className="body-description">{data.pokemonData.description}</p>
        </Row>
        <hr className="separator body-separator" />
        <Row>
          <Col className="body-text-container--item">
            <p className="body-title">Height</p>
            <p>{`${data.pokemonData.height}m`}</p>
          </Col>
          <Col className="body-text-container--item">
            <p className="body-title">Weight</p>
            <p>{`${data.pokemonData.weight}kg`}</p>
          </Col>
          <Col className="body-text-container--item">
            <p className="body-title">Gender</p>
            <p>{data.pokemonData.gender}</p>
          </Col>
        </Row>
        <Row className="body-list-items">
          <Col className="body-text-container--item">
            <p className="body-title">Abilities</p>
            <section>
              <ul className="body-text-container--item-list">
                {data.pokemonData.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </section>
          </Col>
          <Col className="body-text-container--item">
            <p className="body-title">Types</p>
            <section>
              <ul className="body-text-container--item-list">
                {data.pokemonData.types.map((type) => (
                  <li key={type.type.name}>{type.type.name}</li>
                ))}
              </ul>
            </section>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);

export default ModalBodyPokemon;
