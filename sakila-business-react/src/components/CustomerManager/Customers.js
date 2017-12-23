import React from 'react';

import { CustomerHeader, CustomerData } from './Customer';
import PropTypes from 'prop-types';


import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';

import TextField from 'material-ui/TextField/TextField';

const displayCustomerData = (props) => props.customers.map(c => <CustomerData key={c.customerId} {...c} />);

const Customers = (props) =>
    <Table>
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <CustomerHeader />
        </TableHeader>
        <TableBody displayRowCheckbox={false} data={props}>
            {displayCustomerData({ ...props })}
        </TableBody>
    </Table>

Customers.propTypes = {
    customers: PropTypes.array.isRequired
}

export default Customers;