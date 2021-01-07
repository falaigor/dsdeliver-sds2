import axios from 'axios';

const api = axios.create({
  baseURL: 'https://igor-sds2.herokuapp.com/',
})

export default api;