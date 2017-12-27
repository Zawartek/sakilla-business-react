import React from 'react';

import { CustomerHeader, CustomerData } from './Customer';
import PropTypes from 'prop-types';


import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';

const Customers = (props) =>
    <Table>
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <CustomerHeader />
        </TableHeader>
        <TableBody>
            <CustomerData 
                customers={props.customers}
                handleEdit={props.handleEdit}
                handleDelete={props.handleDelete}
            />
        </TableBody>
    </Table>

Customers.propTypes = {
    customers: PropTypes.array.isRequired
}

export default Customers;