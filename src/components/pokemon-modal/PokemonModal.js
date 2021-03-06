import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ModalBodyComparing from './modal-body/modal-body-comparing';
import ModalBodyPokemon from './modal-body/modal-body-pokemon';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';
import ModalBody from './modal-body';

import './style.css';

const PokemonModal = (props) => {
  if (!props.modalController.modalVisible) {
    return null;
  } else
    return ReactDOM.createPortal(
      <div className="root-modal">
        <ModalHeader />
        <hr className="separator separator-lg" />

        <Row>
          <div className="body">
            <ModalBody />
            <hr className="separator separator-sm" />
          </div>
        </Row>

        <Row>
          <div className="footer">
            <ModalFooter data={props.modalController} />
          </div>
        </Row>
      </div>,
      document.getElementById('modal-root')
    );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PokemonModal);
