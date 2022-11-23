import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GOOGLE_API_KEY } from '../../constants';
import Header from './components/header';
import PlaceList from './components/placeList';
import PlaceMap from './components/placeMap';
import { getPlaceAsync } from './searchPlaceSlice';
import { useUserLocationContextConsumer } from '../../context/userLocation';

import './styles.css';

const SearchPlace = () => {
  const { permission, isPosition, latitude, longitude } =
    useUserLocationContextConsumer();
  const { places } = useSelector((state) => state);
  const [type, setType] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (_type) => {
    setType(_type.value);
  };

  useEffect(() => {
    if (isPosition && type)
      dispatch(
        getPlaceAsync({
          location: `${latitude} ${longitude}`,
          radius: '2000',
          type: type,
          key: GOOGLE_API_KEY,
        })
      );
  }, [isPosition, type]);

  return (
    <div className="search__place">
      <Header data-test="headerComponentTest" handleChange={handleChange} />
      {permission ? (
        <section className="search__place--body">
          <aside className="search__place--aside">
            <PlaceList places={places.data} data-test="placeListComponent" />
          </aside>
          <main className="search__place--main">
            <PlaceMap places={places.data} data-test="placeMapComponent" />
          </main>
        </section>
      ) : (
        <h1 data-test="permissionComponent">Permission for location denied</h1>
      )}
    </div>
  );
};

export default SearchPlace;
