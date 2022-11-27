/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import { findByDataSet } from '../../../../app/testUtils';
import PlaceList from './index';
import { checkPropTypes } from 'prop-types';

const setUp = (props = {}) => {
  const component = shallow(<PlaceList {...props} />);
  return component;
};

describe('Header Component', () => {
  //   to check prop type
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
        PlaceList.propTypes,
        expectedProps,
        'props',
        PlaceList.name
      );
      expect(propsError).toBeUndefined();
    });
  });

  // Check the component render
  describe('Render component with props and places list has atleast 1 entry', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        places: [
          {
            name: 'HDFC Bank',
            rating: 5,
            vicinity: 'Mumbai, India',
          },
        ],
      };
      wrapper = setUp(props);
    });

    it('Testing PlaceList', () => {
      const placeList = findByDataSet(wrapper, 'placeListContainer');
      expect(placeList.length).toBe(1);
    });

    it('Testing place name', () => {
      const listItemHeader = findByDataSet(wrapper, 'listItemHeader');
      expect(listItemHeader.length).toBe(1);
    });

    it('Testing List of stars', () => {
      const listItemStars = findByDataSet(wrapper, 'listItemStars');
      expect(listItemStars.length).toBe(5);
    });

    it('Testing address of place', () => {
      const listItemAddress = findByDataSet(wrapper, 'listItemAddress');
      expect(listItemAddress.length).toBe(1);
    });
  });

  describe('Render component with props and places list is empty', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        places: [],
      };
      wrapper = setUp(props);
    });

    it('Testing PlaceList', () => {
      const placeList = findByDataSet(wrapper, 'placeListContainer');
      expect(placeList.length).toBe(1);
    });

    it('Testing No data found block', () => {
      const noPlaceFoundTest = findByDataSet(wrapper, 'noPlaceFoundTest');
      expect(noPlaceFoundTest.length).toBe(1);
    });
  });

  describe('Render component without props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Testing PlaceList', () => {
      const placeList = findByDataSet(wrapper, 'placeListContainer');
      expect(placeList.length).toBe(1);
    });
  });
});
