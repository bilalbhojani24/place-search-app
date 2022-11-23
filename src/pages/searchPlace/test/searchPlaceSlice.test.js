import reducer, { searchPlaceSlice } from '../searchPlaceSlice';

describe('>>> Testing the slicer', () => {
  const initialState = { loading: false, data: [], error: false };

  const expectedResponse = [
    {
      name: 'HDFC Bank',
      vicinity: 'Chinchani',
    },
    {
      name: 'ICICI Bank',
      vicinity: 'Tarapur',
    },
  ];

  it('fetching data >> pending state', () => {
    const action = { type: searchPlaceSlice.actions.getPlaces };
    const state = reducer(initialState, action);
    expect(state).toEqual({ loading: true, error: false, data: [] });
  });

  it('fetching data >> success state', () => {
    const action = {
      type: searchPlaceSlice.actions.getPlacesSuccess,
      payload: expectedResponse,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      loading: false,
      data: expectedResponse,
      error: false,
    });
  });

  it('fetching data >> error state', () => {
    const action = {
      type: searchPlaceSlice.actions.getPlacesFailure,
      payload: { error: 'some error' },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ loading: false, data: [], error: true });
  });
});
