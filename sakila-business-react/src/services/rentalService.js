import axios from 'axios';

export function getAllRentals() {
  return axios.get('/rental');
}

export function getAllRentalsFromCustomer(id) {
  return axios.get(`/rental/${id}`);
}