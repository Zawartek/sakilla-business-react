import React from 'react';

import Customer from './Customer';
import PropTypes from 'prop-types';

import {Card, CardText} from 'material-ui/Card';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
} from 'material-ui/Table';

const CARD_STYLE = {
padding: "16px 24px",
}

const displayCustomer = (props) => props.customers.map(c => <Customer key={c.customerId} {...c}/>);

const Customers = (props) => 
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
                <TableBody displayRowCheckbox={false} data={props}>
                    {displayCustomer({...props})}
                </TableBody>
            </Table>
        </CardText>
    </Card>   

Customers.propTypes = {
    customers: PropTypes.array.isRequired
}

export default Customers;