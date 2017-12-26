import React, { Component } from 'react'

import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import * as customerService from '../../services/customerService';

const style = {
    margin: 50,
};

class CustomersForm extends Component {
    
    constructor() {
        super();

        this.state = {
            adding:true,
            formData: {
                customerId:-1,
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                country: ''
            }
        };
    } 

    handleOnClickOnAdd = (e) =>{
        customerService.createCustomer(this.state.formData).then(res=>{
            
        })
    }

    handleOnClickOnRemove = (e) => {
        this.setState({
            adding:true,
            formData: {
                customerId:-1,
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                country: ''
            }
        });
    }

    handleOnClickOnEdit = (id) => {
        customerService.getCustomer(id).then(res => {
            this.setState({
                adding:false,
                formData: {
                    customerId:res.data.customerId,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    address: res.data.address.address,
                    city: res.data.address.city.city,
                    country: res.data.address.city.country.country
                }
        });

        })
    }

    handleOnChangeOnFirstName = (e) => {
        this.setState({formData:{...this.state.formData,firstName:e.target.value}});
    }
    handleOnChangeOnLastName = (e) => {
        this.setState({formData:{...this.state.formData,lastName:e.target.value}});
    }
    handleOnChangeOnEmail = (e) => {
        this.setState({formData:{...this.state.formData,email:e.target.value}});
    }
    handleOnChangeOnAddress = (e) => {
        this.setState({formData:{...this.state.formData,address:e.target.value}});
    }
    handleOnChangeOnCity = (e) => {
        this.setState({formData:{...this.state.formData,city:e.target.value}});
    }
    handleOnChangeOnCountry = (e) => {
        this.setState({formData:{...this.state.formData,country:e.target.value}});
    }

    render() {
        const {adding} = this.state
    return (
        <form>
            <input type="hidden" value={this.state.formData.customerId}/>
        <span>Name : </span>
        <TextField
            name="firstName"
            type="text"
            value= {this.state.formData.firstName}
            onChange= {this.handleOnChangeOnFirstName}
            hintText='Enter your first name'
            className="textfield-class"
        />
        <TextField
            name="lastName"
            type="text"
            value= {this.state.formData.lastName}
            onChange= {this.handleOnChangeOnLastName}
            hintText='Enter your last name'
            className="textfield-class"
        />

        <br />
        <span>Email : </span>
        <TextField
            name="email"
            type="text"
            value= {this.state.formData.email}
            onChange= {this.handleOnChangeOnEmail}
            hintText='Enter your email'
            className="textfield-class"
        />

        <br />
        <span>Address : </span>
        <TextField
            name="address"
            type="text"
            value= {this.state.formData.address}
            onChange= {this.handleOnChangeOnAddress}
            hintText='Enter your address'
            className="textfield-class"
        />
        <TextField
            name="city"
            type="text"
            value= {this.state.formData.city}
            onChange= {this.handleOnChangeOnCity}
            hintText='Enter your city'
            className="textfield-class"
        />
        <TextField
            name="country"
            type="text"
            value= {this.state.formData.country}
            onChange= {this.handleOnChangeOnCountry}
            hintText='Enter your country'
            className="textfield-class"
        />
        <div>
            { adding?
            <RaisedButton 
                label='Add' 
                labelColor="#FFFFFF" 
                backgroundColor="#3F51B5" 
                style={style} 
                onClick = {this.handleOnClickOnAdd}
                />
            :
            <RaisedButton 
                label='Update' 
                labelColor="#FFFFFF" 
                backgroundColor="#3F51B5" 
                style={style} 
                />
            }
            <RaisedButton 
                label='Remove'
                labelColor="#FFFFFF" 
                backgroundColor="#F44336" 
                style={style} 
                onClick = {this.handleOnClickOnRemove}
                />
        </div>

    </form>
    )
    }
}

export {CustomersForm}
