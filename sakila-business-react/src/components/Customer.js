import React from 'react'

import PropTypes from 'prop-types';

import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const Customer = (props) => (
    <TableRow>
    <TableRowColumn>{props.customerId}</TableRowColumn>
    <TableRowColumn>
        <span>{props.store.address.address} - {props.store.address.city.city} {props.store.address.city.country.country}</span>
        </TableRowColumn>
    <TableRowColumn>{props.lastName}</TableRowColumn>
    <TableRowColumn>{props.email}</TableRowColumn>
    <TableRowColumn>
        <span>{props.address.address} - {props.address.city.city} {props.address.city.country.country}</span>
    </TableRowColumn>
    </TableRow>
)

Customer.propTypes = {
    customerId: PropTypes.number.isRequired
}

export default Customer;
