import React from 'react';
import Col from 'react-bootstrap/col';
import { Row } from 'react-bootstrap';
import './style.css';

const StatsComparatingComponent = ({ data, stat, measure }) => (
  <div className="body-comparing--description">
    <Col xs={4}>
      <p className="body-data">{`${data.pokemonData[stat]}${measure}`}</p>
    </Col>
    <Col xs={4}>
      <p className="body-title">{stat}</p>
    </Col>
    <Col xs={4}>
      <p className="body-data">{`${data.comparedPokemon[stat]}${measure}`}</p>
    </Col>
  </div>
);

const ModalBodyComparing = ({ data }) => (
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
          <hr />
          <StatsComparatingComponent data={data} stat={'height'} measure={'m'} />
          <StatsComparatingComponent data={data} stat={'weight'} measure={'kg'} />
          <StatsComparatingComponent data={data} stat={'gender'} measure={''} />

          <div className="body-comparing--description">
            <Col xs={4} className="container-padding-left-0">
              <ul className="body-comparing-list">
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
              <ul className="body-comparing-list container-padding-left-0">
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

export default ModalBodyComparing;
