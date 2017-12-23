import axios from 'axios';

export function getAllActors() {
  return axios.get('/actor');
}
