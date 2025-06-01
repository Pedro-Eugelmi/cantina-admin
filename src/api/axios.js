import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cantinaapi.dingols.com.br/api/cantina'
});

export default api;
