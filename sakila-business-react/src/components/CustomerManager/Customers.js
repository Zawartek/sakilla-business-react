import React from 'react';

import {CustomerHeader, CustomerData} from './Customer';
import PropTypes from 'prop-types';


import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';

import TextField from 'material-ui/TextField/TextField';

const CustomerForm = (props) => (
    <form>
        <span>Name : </span>
            <TextField
                name="firstName"
                type="text"
                hintText="Enter your first name"
                className="textfield-class"
            /> 
            <TextField
                name="lasttName"
                type="text"
                hintText="Enter your last name"
                className="textfield-class"
            />
        
        <br/>
        <span>Email : </span>
            <TextField
                name="email"
                type="text"
                hintText="Enter your email"
                className="textfield-class"
            />
        
        <br/>
        <span>Address : </span>
            <TextField
                name="address"
                type="text"
                hintText="Enter your address"
                className="textfield-class"
            /> 
            <TextField
                name="city"
                type="text"
                hintText="Enter your city"
                className="textfield-class"
            /> 
            <TextField
                name="country"
                type="text"
                hintText="Enter your country"
                className="textfield-class"
            />
        
    </form>
)
const displayCustomerData = (props) => props.customers.map(c => <CustomerData key={c.customerId} {...c}/>);

const Customers = (props) => 
    <Table>
        <TableHeader 
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <CustomerHeader/>
        </TableHeader>
        <TableBody displayRowCheckbox={false} data={props}>
            {displayCustomerData({...props})}
        </TableBody>
    </Table>

Customers.propTypes = {
    customers: PropTypes.array.isRequired
}

export  {Customers, CustomerForm};