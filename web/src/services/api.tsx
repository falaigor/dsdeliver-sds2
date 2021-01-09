import axios from 'axios';
import { OrderPayload } from '../pages/Orders/types';

const api = axios.create({
  baseURL: 'https://igor-sds2.herokuapp.com/',
})

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchLocalMapBox(local: string) {
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}

export function saveOrder(payload: OrderPayload) {
  return axios.post(`${api}orders`, payload);
}

export default api;