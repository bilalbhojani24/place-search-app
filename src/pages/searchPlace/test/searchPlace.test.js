/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as UserLocationContext from '../../../context/userLocation';
import SearchPlace from '../index';
import { findByDataSet } from '../../../app/testUtils';

const mockStore = configureMockStore();

describe('>>> Search place page', () => {
  const store = mockStore({
    places: [
      {
        name: 'HDFC Bank',
        rating: 5,
        vicinity: 'Mumbai, India',
      },
    ],
  });
  it('Render component when permission for location is granted', () => {
    const contextValues = {
      latitude: 19.984,
      longitude: 11.92384,
      isPosition: true,
      permission: true,
    };

    jest
      .spyOn(UserLocationContext, 'useUserLocationContextConsumer')
      .mockImplementation(() => contextValues);

    const wrapper = mount(
      <Provider store={store}>
        <SearchPlace />
      </Provider>
    );

    const headerComponentTest = findByDataSet(wrapper, 'headerComponentTest');
    expect(headerComponentTest.length).toBe(1);

    const placeListComponent = findByDataSet(wrapper, 'placeListComponent');
    expect(placeListComponent.length).toBe(1);

    const placeMapComponent = findByDataSet(wrapper, 'placeMapComponent');
    expect(placeMapComponent.length).toBe(1);

    const permissionComponent = findByDataSet(wrapper, 'permissionComponent');
    expect(permissionComponent.length).toBe(0);
  });

  it('Render component when permission for location is denied', () => {
    const contextValues = {
      latitude: 19.984,
      longitude: 11.92384,
      isPosition: true,
      permission: false,
    };

    jest
      .spyOn(UserLocationContext, 'useUserLocationContextConsumer')
      .mockImplementation(() => contextValues);

    const wrapper = mount(
      <Provider store={store}>
        <SearchPlace />
      </Provider>
    );

    const headerComponentTest = findByDataSet(wrapper, 'headerComponentTest');
    expect(headerComponentTest.length).toBe(1);

    const placeListComponent = findByDataSet(wrapper, 'placeListComponent');
    expect(placeListComponent.length).toBe(0);

    const placeMapComponent = findByDataSet(wrapper, 'placeMapComponent');
    expect(placeMapComponent.length).toBe(0);

    const permissionComponent = findByDataSet(wrapper, 'permissionComponent');
    expect(permissionComponent.length).toBe(1);
  });
});
