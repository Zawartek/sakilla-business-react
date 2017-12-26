import React, { Component } from 'react'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as customerService from '../../services/customerService';

class RentalsForm extends Component {
    
    constructor() {
        super();

        this.state = {
            adding:true,
            customerId:-1,
            customers:[]
        };
    } 

    componentDidMount() {
        this.loadCustomers();
    }

    loadCustomers = () => {
        customerService.getAllCustomers().then(res =>{
            this.setState({customers:res.data});
        })
    }

    handleChange = (event, index, value) => {
        this.setState({customerId: value});
        this.props.reloadRentals(value);
    };

    displayCustomers = () => {
        this.state.customers.map(res =>{
            <MenuItem value={res.customerId}>{res.firstName} {res.lastName}</MenuItem>
        })
    }

    render() {
        const customers = this.state;
        return (
        <form>
            <span>Customer : </span>
            <SelectField
                key="listCustomers"
                floatingLabelText="Customer"
                defaultValue={-1}
                value={this.state.customerId}
                onChange={this.handleChange}
            >
          <MenuItem value={-1} primaryText="All customers" />
          {
              this.state.customers.map((obj, index) => {
                return ( 
                    <MenuItem 
                        value={obj.customerId} 
                        primaryText={`${obj.firstName} ${obj.lastName}`}
                        />
                    )
                })
            }
        </SelectField>
        </form>
        )
    }
}

export {RentalsForm}
