import React, { Component } from 'react'
import Customers from '../components/Customers'
import * as customerService from '../services/customerService';

const BACKGROUND_STYLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
}
    
const CUSTOMER_MANAGEMENT_STYLE = {
    width: 1200,
    margin: 30,
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

  renderCustomers = () => 
    this.state.loading === true ? 'Loading Customers ...' : <Customers customers={this.state.customers}/> 
 
  render() {
    return (
      <div style={BACKGROUND_STYLE, CUSTOMER_MANAGEMENT_STYLE}>
        {this.renderCustomers()}
      </div>
    )
  }
}

export default CustomerManagement;
