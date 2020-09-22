import React from 'react';
import { connect } from 'react-redux';
import ModalBodyComparing from './modal-body-comparing';
import ModalBodyPokemon from './modal-body-pokemon';

const ModalBody = (props) => (
  <div>{!props.modalController.isComparing ? <ModalBodyPokemon data={props.modalController} /> : <ModalBodyComparing data={props.modalController} />}</div>
);

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ModalBody);
