import axios from 'axios';

export function getAllCustomers() {
  return axios.get('/customer');
}
