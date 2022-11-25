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
    requestPlaces: (state) => {
      state.loading = true;
    },
    responsePlacesSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = false;
    },
    responsePlacesFailure: (state) => {
      state.error = true;
    },
  },
});

export const { requestPlaces, responsePlacesSuccess, responsePlacesFailure } =
  searchPlaceSlice.actions;

export function getPlaceAsync(params = {}) {
  return async (dispatch) => {
    dispatch(requestPlaces());
    try {
      const res = await getPlacesList(params);
      dispatch(responsePlacesSuccess(res.data.results));
    } catch (e) {
      dispatch(responsePlacesFailure());
    }
  };
}

export default searchPlaceSlice.reducer;
