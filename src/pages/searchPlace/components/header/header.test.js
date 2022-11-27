/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import { findByDataSet } from '../../../../app/testUtils';
import Header from './index';
import { checkPropTypes } from 'prop-types';

describe('Header Component', () => {
  // to check prop type
  describe('checking proptypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        handleChange: () => {},
      };
      const propsError = checkPropTypes(
        Header.propTypes,
        expectedProps,
        'props',
        Header.name
      );
      expect(propsError).toBeUndefined();
    });
  });

  // Check the component render
  describe('Render header component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('Should render the header component', () => {
      const headerComponent = findByDataSet(wrapper, 'headerComponent');
      expect(headerComponent.length).toBe(1);
    });

    it('Should have logo in header', () => {
      const profileButtonTest = findByDataSet(wrapper, 'profileButtonTest');
      expect(profileButtonTest.length).toBe(1);
    });

    it('Should have dropdown in header', () => {
      const dropdownComponent = findByDataSet(wrapper, 'dropdownComponent');
      expect(dropdownComponent.length).toBe(1);
    });

    it('Should have profile button in header', () => {
      const profileButtonTest = findByDataSet(wrapper, 'profileButtonTest');
      expect(profileButtonTest.length).toBe(1);
    });
  });

  // describe('Testing the select dropdown', () => {
  //   let wrapper;

  //   let props = {
  //     handleChange: jest.fn(),
  //   };
  //   beforeEach(() => {
  //     wrapper = shallow(<Header {...props} />);
  //   });

  //   it('should render without errors', async () => {
  //     const dropdownTest = findByDataSet(wrapper, 'dropdownTest');
  //     expect(dropdownTest.props().placeholder).toEqual('Select Place');
  //   });

  //   it('On dropdown value change', () => {
  //     const dropdownTest = findByDataSet(wrapper, 'dropdownTest');

  //     dropdownTest.simulate('change', {
  //       target: { value: 'bank', label: 'Bank' },
  //     });

  //     expect(props.handleChange).toBeCalled();
  //   });
  // });
});
