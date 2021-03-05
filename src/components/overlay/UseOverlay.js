import React, { useEffect, useState } from 'react';
import './styles.css';
import { connect } from 'react-redux';

const UseOverlay = (props) => {
  const [overlayState, setOverlayState] = useState('hidden');

  useEffect(() => {
    if (props.modalController.modalVisible) {
      setOverlayState('open');
    } else {
      setOverlayState('hidden');
    }

    return () => {};
  }, [props.modalController.modalVisible]);

  return <div className={`overlay ${overlayState}`}></div>;
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UseOverlay);
