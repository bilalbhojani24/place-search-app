import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const PlaceList = ({ places = [] }) => {
  return (
    <div className="placelist" data-test="placeListContainer">
      {!!places.length ? (
        React.Children.toArray(
          places?.map((place, index) => (
            <div className="placelist__cards" key={index}>
              <section className="placelist__cards--header">
                <p
                  className="placelist__cards--header--title"
                  data-test="listItemHeader"
                >
                  {place.name}
                </p>
                <section>
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      data-test="listItemStars"
                      class={`fa fa-star ${
                        index + 1 <= place?.rating ? 'placelist__checked' : ''
                      }`}
                    ></span>
                  ))}
                </section>
              </section>
              <p data-test="listItemAddress">{place.vicinity}</p>
            </div>
          ))
        )
      ) : (
        <p data-test="noPlaceFoundTest" className="placelist__not--found--text">
          No Places Found!!
        </p>
      )}
    </div>
  );
};

PlaceList.propTypes = {
  places: PropTypes.array,
};

export default PlaceList;
