import React from 'react';
import './styles.css';

const Marker = () => {
  return (
    <i
      data-test="mapMarker"
      className="fa fa-3x fa-map-marker marker"
      aria-hidden="true"
    />
  );
};

export default Marker;
