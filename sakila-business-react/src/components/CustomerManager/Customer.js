import React, { Component } from 'react'

import PropTypes from 'prop-types';

import {
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import RaisedButton from 'material-ui/RaisedButton';
import customerDataHelper from "../../helpers/customerDataHelper";

const style = {
    margin: 2,
};

const col1 = {
    width: '5%',
}

const col2 = {
    width: '20%',
}

const col3 = {
    width: '15%',
}

const col4 = {
    width: '20%',
}

const col5 = {
    width: '22.5%',
}

const col6 = {
    width: '17.5%',
    textAlign: 'center'
}

const CustomerHeader = () => (
    <TableRow>
        <TableHeaderColumn style={col1}>ID</TableHeaderColumn>
        <TableHeaderColumn style={col2}>Store address</TableHeaderColumn>
        <TableHeaderColumn style={col3}>Name</TableHeaderColumn>
        <TableHeaderColumn style={col4}>Email address</TableHeaderColumn>
        <TableHeaderColumn style={col5}>Address</TableHeaderColumn>
        <TableHeaderColumn style={col6}></TableHeaderColumn>
    </TableRow>
)

const CustomerData = (props) => (
    customerDataHelper.displayCustomerRow(props)
)

CustomerData.propTypes = {
    customerId: PropTypes.number.isRequired
}

export { CustomerHeader, CustomerData };
