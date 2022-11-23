import { createSlice } from '@reduxjs/toolkit';
import { getPlacesList } from './services';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const searchPlaceSlice = createSlice({
  name: 'searchPlace',
  initialState,
  reducers: {
    getPlaces: (state) => {
      state.loading = true;
    },
    getPlacesSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = false;
    },
    getPlacesFailure: (state) => {
      state.error = true;
    },
  },
});

export const { getPlaces, getPlacesSuccess, getPlacesFailure } =
  searchPlaceSlice.actions;

export function getPlaceAsync(params = {}) {
  return async (dispatch) => {
    dispatch(getPlaces());
    try {
      const res = await getPlacesList(params);
      dispatch(getPlacesSuccess(res.data.results));
    } catch (e) {
      dispatch(getPlacesFailure());
    }
  };
}

export default searchPlaceSlice.reducer;
