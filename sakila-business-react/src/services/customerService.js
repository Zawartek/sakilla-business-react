import axios from 'axios';

export function getAllCustomers() {
  return axios.get('/customer');
}

export function getCustomer(id){
  return axios.get(`/customer/${id}`);
}

export function createCustomer(form) {
  return axios.post('/customer', form);
}

export function updateCustomer(form) {
  return axios.post('/customerUpdate', form);
}

export function deleteCustomer(id){
  return axios.get(`/customerDelete/${id}`);
}