import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { GOOGLE_API_KEY } from '../../../../constants';
import Marker from '../marker';

import './styles.css';

const PlaceMap = ({ places = [] }) => {
  const defaultProps = {
    center: {
      lat: 19.8715541,
      lng: 72.68373,
    },
    zoom: 15,
  };

  return (
    <div className="map__contianer" data-test="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLE_API_KEY,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        data-test="mapReal"
      >
        {!!places.length &&
          places.map((place, index) => (
            <Marker
              key={index}
              data-test="mapMarker"
              lat={place.geometry.location.lat}
              lng={place.geometry.location.lng}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

PlaceMap.propTypes = {
  places: PropTypes.array,
};

export default PlaceMap;
