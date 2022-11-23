import React from 'react';

const Marker = () => {
  return (
    <i
      data-test="mapMarker"
      class="fa fa-3x fa-map-marker"
      aria-hidden="true"
      style={{
        color: 'red',
      }}
    />
  );
};

export default Marker;
