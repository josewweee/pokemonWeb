import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { ModalBodyPokemon, ModalBodyComparing } from './modal-body/ModalBody';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';

import './style.css';

const PokemonModal = (props) => {
  if (!props.modalController.modalVisible) {
    return null;
  } else
    return ReactDOM.createPortal(
      <div className="root-modal">
        <ModalHeader />
        <hr />

        <Row>
          <div className="body">
            {!props.modalController.isComparing ? <ModalBodyPokemon data={props.modalController} /> : <ModalBodyComparing data={props.modalController} />}

            <hr />
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
