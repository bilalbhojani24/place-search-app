/* eslint-disable testing-library/await-async-query */
import { shallow } from 'enzyme';
import Dropdown from './index';
import { findByDataSet } from '../../app/testUtils';

describe('Testing the select dropdown', () => {
  let wrapper;

  let props = {
    handleChange: jest.fn(),
    options: [],
  };
  beforeEach(() => {
    wrapper = shallow(<Dropdown {...props} />);
  });

  it('should render without errors', () => {
    const dropdownTest = findByDataSet(wrapper, 'dropdownTest');
    expect(dropdownTest.props().placeholder).toEqual('Select Place');
  });

  it('On dropdown value change', () => {
    const dropdownTest = findByDataSet(wrapper, 'dropdownTest');

    dropdownTest.simulate('change', {
      target: { value: 'bank', label: 'Bank' },
    });

    expect(props.handleChange).toBeCalled();
  });
});
