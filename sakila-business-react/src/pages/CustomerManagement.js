import React, { Component } from 'react'

import * as customerService from '../services/customerService';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

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

  const CARD_STYLE = {
    padding: "16px 24px",
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

  render() {
      const {customers} = this.state;
    return (
      <div style={BACKGROUND_STYLE, CUSTOMER_MANAGEMENT_STYLE}>
          <Card zDepth={3}>
            <CardText style={CARD_STYLE}>
                <Table>
                    <TableHeader 
                        displaySelectAll={false}
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Store Address</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>Address</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} data={customers}>
                    {
                        customers.map((customer) => {
                            return (
                                <TableRow>
                                <TableRowColumn>{customer.customerId}</TableRowColumn>
                                <TableRowColumn>
                                    <span>{customer.store.address.address} - {customer.store.address.city.city} {customer.store.address.city.country.country}</span>
                                    </TableRowColumn>
                                <TableRowColumn>{customer.lastName}</TableRowColumn>
                                <TableRowColumn>{customer.email}</TableRowColumn>
                                <TableRowColumn>
                                    <span>{customer.address.address} - {customer.address.city.city} {customer.address.city.country.country}</span>
                                </TableRowColumn>
                                </TableRow>
                            )
                        })
                    }
                    </TableBody>
                </Table>
            </CardText>
        </Card>
      </div>
    )
  }
}

export default CustomerManagement;
