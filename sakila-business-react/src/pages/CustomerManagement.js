import React, { Component } from 'react'
import Manager from '../components/Manager'
import * as customerService from '../services/customerService';

import Customers from '../components/CustomerManager/Customers'
import {CustomersForm} from '../components/CustomerManager/CustomersForm'

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
            customers : []
        };
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

  renderCustomerForm = () => 
    <CustomersForm /> 

  renderCustomers = () => 
    this.state.loading === true ? 'Loading Customers ...' : <Customers customers={this.state.customers}/> 
 
  render() {
    return (
      <div style={BACKGROUND_STYLE}>
        <Manager 
          formHeader="Customer Management Form"
          listHeader="List of customers"
          managerStyle={CUSTOMER_MANAGEMENT_STYLE} 
          renderForm={this.renderCustomerForm} 
          renderDatas={this.renderCustomers}
        />
      </div>
    )
  }
}

export default CustomerManagement;
