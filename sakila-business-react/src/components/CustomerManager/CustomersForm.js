import React, { Component } from 'react'

import TextField from 'material-ui/TextField/TextField';

class CustomersForm extends Component {
    
    constructor() {
        super();

        this.state = {
            firstName: 'Enter your first name',
            lasttName: 'Enter your last name',
            email: 'Enter your email',
            address: 'Enter your address',
            city: 'Enter your city',
            country: 'Enter your country'
        };
    } 

    handleOnClickOnEdit = (e) => {
        this.setState({
            firstName: e.firstName,
            lasttName: e.lastName,
            email: e.email,
            address:e.address.addressy,
            city: e.address.city.city,
            country: e.address.city.country.country});
    }

    render() {
    return (
        <form>
        <span>Name : </span>
        <TextField
            name="firstName"
            type="text"
            hintText={this.state.firstName}
            className="textfield-class"
        />
        <TextField
            name="lasttName"
            type="text"
            hintText={this.state.lasttName}
            className="textfield-class"
        />

        <br />
        <span>Email : </span>
        <TextField
            name="email"
            type="text"
            hintText={this.state.email}
            className="textfield-class"
        />

        <br />
        <span>Address : </span>
        <TextField
            name="address"
            type="text"
            hintText={this.state.address}
            className="textfield-class"
        />
        <TextField
            name="city"
            type="text"
            hintText={this.state.city}
            className="textfield-class"
        />
        <TextField
            name="country"
            type="text"
            hintText={this.state.country}
            className="textfield-class"
        />

    </form>
    )
    }
}

export {CustomersForm}
