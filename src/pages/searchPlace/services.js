import axios from 'axios';

export const getPlacesList = (params) => {
  const response = axios.get(
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    {
      params: params,
    }
  );
  return response;
};
