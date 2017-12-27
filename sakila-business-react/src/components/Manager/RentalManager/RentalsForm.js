import React, { Component } from 'react'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as customerService from '../../../services/customerService';

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
        this.props.reloadDatas(value);
    };

    displayCustomers = () => {
       this.state.customers.map(res => {
            return <MenuItem value={res.customerId}>{res.firstName} {res.lastName}</MenuItem>
        })
    }

    render() {
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
          <MenuItem key={-1} value={-1} primaryText="All customers" />
          {
              this.state.customers.map((obj, index) => {
                return ( 
                    <MenuItem 
                    key={obj.customerId}
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
