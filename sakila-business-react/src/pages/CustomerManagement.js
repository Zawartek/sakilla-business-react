import React, { Component } from 'react'
import Manager from '../components/Manager'
import * as customerService from '../services/customerService';

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

  render() {
    return (
      <div style={BACKGROUND_STYLE}>
      <Manager
        managerType="customer"
        loading={this.state.loading}
        managerStyle={CUSTOMER_MANAGEMENT_STYLE}
        datas={this.state.customers}
        reloadDatas={this.reloadCustomers}
        handleDelete={this.requestDeleteCustomer}
      />
      </div>
    )
  }
}

export default CustomerManagement;
