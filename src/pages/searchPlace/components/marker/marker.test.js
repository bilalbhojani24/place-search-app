/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import { findByDataSet } from '../../../../app/testUtils';
import Marker from './index';

describe('Header Component', () => {
  describe('Render component with props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Marker />);
    });

    it('Testing Marker is rendered', () => {
      const mapMarker = findByDataSet(wrapper, 'mapMarker');
      expect(mapMarker.length).toBe(1);
    });
  });
});
