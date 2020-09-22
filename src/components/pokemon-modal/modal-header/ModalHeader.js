import React from 'react';
import { connect } from 'react-redux';
import { closeModal, compare } from '../../../redux/actions/modalActions';

import './style.css';

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

const ModalHeader = (props) => <div>{!props.modalController.isComparing ? <ModalHeaderPokemon props={props} /> : <ModalHeaderComparing props={props} />}</div>;

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (pokemonData) => dispatch(closeModal(pokemonData)),
    comparePokemons: () => dispatch(compare()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalHeader);
