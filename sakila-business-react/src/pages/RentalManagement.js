import React, { Component } from 'react'
import Manager from '../components/Manager'
import * as rentalService from '../services/rentalService';

const BACKGROUND_STYLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
}

const RENTAL_MANAGEMENT_STYLE = {
    width: 1300,
    margin: 30,
    padding:5,
    backgroundColor: '#E0E0E0',
}

class RentalManagement extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            error: false,
            rentals : [],
        };
        this.requestAllRentals = this.requestAllRentals.bind(this);
        this.requestAllRentalsFromCustomer = this.requestAllRentalsFromCustomer.bind(this);
    }

  componentDidMount() {
    this.requestAllRentals();
  }

  requestAllRentals() {
    this.setState({ loading: true, error: false });
    rentalService.getAllRentals()
      .then(res => {
        this.setState({ rentals: res.data, error: false, loading: false });
        return res.data;
      }).catch(e => this.setState({ error: true, loading: false }));
  }

  requestAllRentalsFromCustomer(id) {
    this.setState({ loading: true, error: false });
    rentalService.getAllRentalsFromCustomer(id)
      .then(res => {
        this.setState({ rentals: res.data, error: false, loading: false });
        return res.data;
      }).catch(e => this.setState({ error: true, loading: false }));
  }

  reloadRentals = (id) => {
    if (id===-1) {
      this.requestAllRentals()
    }
    else {
      this.requestAllRentalsFromCustomer(id)
    }
  }

  render() {
    return (
      <div style={BACKGROUND_STYLE}>
        <Manager
          managerType="rental"
          loading={this.state.loading}
          managerStyle={RENTAL_MANAGEMENT_STYLE}
          datas={this.state.rentals}
          reloadDatas={this.reloadRentals}
        />
      </div>
    )
  }
}

export default RentalManagement;
