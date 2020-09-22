import React from 'react';

import Col from 'react-bootstrap/col';
import { Row } from 'react-bootstrap';

import './style.css';

export const ModalBodyPokemon = ({ data }) => (
  <Row>
    <Col xs={4}>
      <img className="body-img" src={data.pokemonData.sprites.front_default} alt={data.pokemonData.name}></img>
    </Col>
    <Col xs={8} className="body-text-container">
      <div>
        <Row>
          <p className="body-description">{data.pokemonData.description}</p>
        </Row>
        <hr />
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

export const ModalBodyComparing = ({ data }) => (
  <div>
    <Row>
      <div className="body-comparing--img">
        <Col xs={6}>
          <img src={data.pokemonData.sprites.front_default} alt={data.pokemonData.name}></img>
        </Col>
        <Col xs={6}>
          <img src={data.comparedPokemon.sprites.front_default} alt={data.comparedPokemon.name}></img>
        </Col>
      </div>
    </Row>
    <Row>
      <Col xs={12}>
        <div className="body-comparing-texts--container">
          {/* HEIGHT */}
          <hr />
          <div className="body-comparing--description">
            <Col xs={4}>
              <p>{`${data.pokemonData.height}m`}</p>
            </Col>
            <Col xs={4}>
              <p className="body-title">Height</p>
            </Col>
            <Col xs={4}>
              <p>{`${data.comparedPokemon.height}m`}</p>
            </Col>
          </div>
          {/* WEIGHT */}
          <div className="body-comparing--description">
            <Col xs={4}>
              <p>{`${data.pokemonData.weight}kg`}</p>
            </Col>
            <Col xs={4}>
              <p className="body-title">Weight</p>
            </Col>
            <Col xs={4}>
              <p>{`${data.comparedPokemon.weight}kg`}</p>
            </Col>
          </div>
          {/* GENDER */}
          <div className="body-comparing--description">
            <Col xs={4}>
              <p>Male</p>
            </Col>
            <Col xs={4}>
              <p className="body-title">Gender</p>
            </Col>
            <Col xs={4}>
              <p>Female</p>
            </Col>
          </div>
          {/* ABILITIES */}
          <div className="body-comparing--description">
            <Col xs={4} className="body-comparing-list">
              <ul>
                {data.pokemonData.abilities.map((ability) => (
                  <li className="body-comparing-list--item" key={ability.ability.name}>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={4}>
              <p className="body-title">Abilities</p>
            </Col>
            <Col xs={4}>
              <ul className="body-comparing-list">
                {data.comparedPokemon.abilities.map((ability) => (
                  <li className="body-comparing-list--item" key={ability.ability.name}>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);
