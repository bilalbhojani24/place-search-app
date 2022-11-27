/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import { findByDataSet } from '../../../../app/testUtils';
import PlaceMap from './index';
import { checkPropTypes } from 'prop-types';

const setUp = (props = {}) => {
  const component = shallow(<PlaceMap {...props} />);
  return component;
};

describe('Header Component', () => {
  // to check prop type
  describe('checking proptypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = [
        {
          name: 'HDFC Bank',
          rating: 5,
          vicinity: 'Mumbai, India',
        },
      ];

      const propsError = checkPropTypes(
        PlaceMap.propTypes,
        expectedProps,
        'props',
        PlaceMap.name
      );
      expect(propsError).toBeUndefined();
    });
  });

  // Check the component render
  describe('Render component with props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        places: [
          {
            name: 'HDFC Bank',
            rating: 5,
            vicinity: 'Mumbai, India',
            geometry: {
              location: {
                lat: 10,
                lng: 10,
              },
            },
          },
        ],
      };
      wrapper = setUp(props);
    });

    it('Testing container', () => {
      const mapContainer = findByDataSet(wrapper, 'mapContainer');
      expect(mapContainer.length).toBe(1);
    });

    it('Testing map loaded', () => {
      const mapReal = findByDataSet(wrapper, 'mapReal');
      expect(mapReal.length).toBe(1);
    });

    it('Testing map marker', () => {
      const mapMarker = findByDataSet(wrapper, 'mapMarker');
      expect(mapMarker.length).toBe(1);
    });
  });

  describe('Render component without props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Testing container', () => {
      const mapContainer = findByDataSet(wrapper, 'mapContainer');
      expect(mapContainer.length).toBe(1);
    });

    it('Testing map loaded', () => {
      const mapReal = findByDataSet(wrapper, 'mapReal');
      expect(mapReal.length).toBe(1);
    });
  });
});
