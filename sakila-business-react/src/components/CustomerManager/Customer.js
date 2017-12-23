import React from 'react'

import PropTypes from 'prop-types';

import {
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const CustomerHeader = (props) => (
    <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Store Address</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Address</TableHeaderColumn>
    </TableRow>
)

const CustomerData = (props) => (
    <TableRow>
        <TableRowColumn>{props.customerId}</TableRowColumn>
        <TableRowColumn>
            <span>{props.store.address.address} - {props.store.address.city.city} {props.store.address.city.country.country}</span>
            </TableRowColumn>
        <TableRowColumn><span>{props.firstName} {props.lastName}</span></TableRowColumn>
        <TableRowColumn>{props.email}</TableRowColumn>
        <TableRowColumn>
            <span>{props.address.address} - {props.address.city.city} {props.address.city.country.country}</span>
        </TableRowColumn>
    </TableRow>
)

CustomerData.propTypes = {
    customerId: PropTypes.number.isRequired
}

export {CustomerHeader, CustomerData};
