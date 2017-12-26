import React, { Component } from 'react'
import Manager from '../components/Manager'
import * as customerService from '../services/customerService';

import Customers from '../components/CustomerManager/Customers'
import {CustomersForm} from '../components/CustomerManager/CustomersForm'
import { createCustomer } from '../services/customerService';

const BACKGROUND_STYLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
}

const CUSTOMER_MANAGEMENT_STYLE = {
    width: 1300,
    margin: 30,
    padding:5,
    backgroundColor: '#E0E0E0',
}

class CustomerManagement extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            error: false,
            customers : [],
        };
        this.requestAllCustomers = this.requestAllCustomers.bind(this);
        this.requestDeleteCustomer = this.requestDeleteCustomer.bind(this);
    }

  componentDidMount() {
    this.requestAllCustomers();
  }

  requestAllCustomers() {
    this.setState({ loading: true, error: false });
    customerService.getAllCustomers()
      .then(res => {
        this.setState({ customers: res.data, error: false, loading: false });
        return res.data;
      }).catch(e => this.setState({ error: true, loading: false }));
  }

  requestDeleteCustomer(id) {
    customerService.deleteCustomer(id).then(res =>{
      customerService.getAllCustomers()
      .then(res2 => {
        this.setState({ customers: res2.data, error: false, loading: false });
        return res2.data;
      });
    }).catch(e => this.setState({ error: true, loading: false }));
  }

  reloadCustomers = () => {
    this.requestAllCustomers();
  }

  renderCustomers = () =>
    this.state.loading === true
    ? 'Loading Customers ...'
    :
    <Customers
      customers={this.state.customers}
      handleEdit={this.refs['customersForm'].handleOnClickOnEdit}
      handleDelete={this.requestDeleteCustomer}
      reloadCustomers={this.reloadCustomers}
      />

  render() {
    return (
      <div style={BACKGROUND_STYLE}>
        <Manager
          formHeader="Customer Management Form"
          listHeader="List of customers"
          managerStyle={CUSTOMER_MANAGEMENT_STYLE}
          renderForm={
            <CustomersForm 
              ref='customersForm'
              reloadCustomers={this.reloadCustomers}
              />
            }
          renderDatas={this.renderCustomers}
        />
      </div>
    )
  }
}

export default CustomerManagement;
