import React from 'react'

import PropTypes from 'prop-types';

import {
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 2,
};

const CustomerHeader = (props) => (
    <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Store Address</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Address</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
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
        <TableRowColumn>
            <RaisedButton label="Edit" labelColor="#FFFFFF" backgroundColor="#4CAF50" style={style} />
            <RaisedButton label="Remove" labelColor="#FFFFFF" backgroundColor="#F44336" style={style} />
        </TableRowColumn>
    </TableRow>
    
)

CustomerData.propTypes = {
    customerId: PropTypes.number.isRequired
}

export {CustomerHeader, CustomerData};
