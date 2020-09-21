import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { closeModal, compare } from "../../redux/actions/modalActions";
import Col from "react-bootstrap/col";
import { Row } from "react-bootstrap";
import { XAxis, YAxis, BarChart, Bar } from "recharts";

import "./style.css";

const GraphsMaker = ({ data }) => {
  const fistPokemonStats = data.pokemonData.stats.map((stat) => stat.base_stat);
  const comparedStats = data.comparedPokemon ? data.comparedPokemon.stats.map((stat) => stat.base_stat) : null;
  let dataSet;

  if (comparedStats !== null) {
    dataSet = [
      { name: "hp", pokemonData: fistPokemonStats[0], comparedPokemon: comparedStats[0] },
      { name: "attack", pokemonData: fistPokemonStats[1], comparedPokemon: comparedStats[1] },
      { name: "", pokemonData: fistPokemonStats[2], comparedPokemon: comparedStats[2] },
      { name: "special", pokemonData: fistPokemonStats[3], comparedPokemon: comparedStats[3] },
      { name: "", pokemonData: fistPokemonStats[4], comparedPokemon: comparedStats[4] },
      { name: "speed", pokemonData: fistPokemonStats[5], comparedPokemon: comparedStats[5] },
    ];
  } else {
    dataSet = [
      { name: "hp", pokemonData: fistPokemonStats[0] },
      { name: "attack", pokemonData: fistPokemonStats[1] },
      { name: "", pokemonData: fistPokemonStats[2] },
      { name: "special", pokemonData: fistPokemonStats[3] },
      { name: "", pokemonData: fistPokemonStats[4] },
      { name: "speed", pokemonData: fistPokemonStats[5] },
    ];
  }

  return (
    <BarChart
      width={350}
      height={200}
      data={dataSet}
      margin={{ top: 0, right: 25, bottom: 0, left: 0 }}
      className="stats-chart"
    >
      <Bar dataKey="pokemonData" barSize={35} fill="#096700" />

      {comparedStats !== null && <Bar dataKey="comparedPokemon" barSize={35} fill="#12d400" />}

      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  );
};

const ModalHeaderPokemon = ({ props }) => {
  const data = props.modalController;

  const handleCloseModal = () => {
    props.closeModal();
  };

  //Closing the modal and setting a compare variable in the store
  const handleCompare = () => {
    props.comparePokemons();
  };

  return (
    <div className="header">
      <div className="header--texts">
        <h6 className="header-texts--name">{data.pokemonData.name}</h6>
        <button onClick={handleCompare} className="header-texts--compare">
          Compare To...
        </button>
      </div>
      <button onClick={handleCloseModal} className="header--close">
        X
      </button>
    </div>
  );
};

const ModalHeaderComparing = ({ props }) => {
  const data = props.modalController;

  const handleCloseModal = () => {
    props.closeModal();
  };

  return (
    <div className="header">
      <div className="header--texts">
        <h6 className="header-texts--name">{data.pokemonData.name} VS.</h6>
        <h6 className="header-texts--name">{data.comparedPokemon.name}</h6>
      </div>
      <button onClick={handleCloseModal} className="header--close">
        X
      </button>
    </div>
  );
};

const ModalBodyPokemon = ({ data }) => (
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
            <ul>
              {data.pokemonData.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </Col>
          <Col className="body-text-container--item">
            <p className="body-title">Types</p>
            <ul>
              {data.pokemonData.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
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
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </Col>
            <Col xs={4}>
              <p className="body-title">Abilities</p>
            </Col>
            <Col xs={4}>
              <ul className="body-comparing-list">
                {data.comparedPokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

const ModalPokemonFooter = ({ data }) => (
  <div>
    <Row className="row-footer">
      <h4 className="footer-title">Stats</h4>
    </Row>
    <Row className="row-footer">
      <GraphsMaker data={data} />
    </Row>
  </div>
);

const PokemonModal = (props) => {
  if (!props.modalController.modalVisible) {
    return null;
  } else
    return ReactDOM.createPortal(
      <div className="root-modal">
        {/* HEADER */}
        <div>
          {!props.modalController.isComparing ? (
            <ModalHeaderPokemon props={props} />
          ) : (
            <ModalHeaderComparing props={props} />
          )}
        </div>
        <hr />
        {/* END HEADER */}

        {/* BODY */}
        <Row>
          <div className="body">
            {!props.modalController.isComparing ? (
              <ModalBodyPokemon data={props.modalController} />
            ) : (
              <ModalBodyComparing data={props.modalController} />
            )}

            <hr />
          </div>
        </Row>
        {/* END BODY */}

        {/* FOOTER */}
        <Row>
          <div className="footer">
            <ModalPokemonFooter data={props.modalController} />
          </div>
        </Row>
        {/* END FOOTER */}
      </div>,
      document.getElementById("modal-root")
    );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (pokemonData) => dispatch(closeModal(pokemonData)),
    comparePokemons: () => dispatch(compare()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonModal);
