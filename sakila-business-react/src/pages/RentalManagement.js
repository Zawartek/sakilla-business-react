import React, { Component } from 'react'
import Manager from '../components/Manager'
import * as rentalService from '../services/rentalService';

import Rentals from '../components/RentalManager/Rentals'
import {RentalsForm} from '../components/RentalManager/RentalsForm'

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
    {id===-1 ?
    this.requestAllRentals()
    :
    this.requestAllRentalsFromCustomer(id)
    }
  }

  renderRentals = () =>
    this.state.loading === true
    ? 'Loading Rentals ...'
    :
    <Rentals
      rentals={this.state.rentals}
      />

  render() {
    return (
      <div style={BACKGROUND_STYLE}>
        <Manager
          formHeader="Rental Management Form"
          listHeader="List of rentals"
          managerStyle={RENTAL_MANAGEMENT_STYLE}
          renderForm={
            <RentalsForm 
              ref='rentalsForm'
              reloadRentals={this.reloadRentals}
              />
            }
          renderDatas={this.renderRentals}
        />
      </div>
    )
  }
}

export default RentalManagement;
