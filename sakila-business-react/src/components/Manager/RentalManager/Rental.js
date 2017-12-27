import React from 'react'

import PropTypes from 'prop-types';

import {
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import DatePicker from 'material-ui/DatePicker';

const col1 = {
    width: '5%',
}

const col2 = {
    width: '35%',
}

const col3 = {
    width: '20%',
}

const col4 = {
    width: '10%',
}

const col5 = {
    width: '10%',
}
const col6 = {
    width: '20%',
}

const RentalHeader = (props) => (
    <TableRow>
        <TableHeaderColumn style={col1}>ID</TableHeaderColumn>
        <TableHeaderColumn style={col2}>Store address</TableHeaderColumn>
        <TableHeaderColumn style={col3}>Film</TableHeaderColumn>
        <TableHeaderColumn style={col4}>Rental Date</TableHeaderColumn>
        <TableHeaderColumn style={col5}>Return Date</TableHeaderColumn>
        <TableHeaderColumn style={col6}>Customer</TableHeaderColumn>
    </TableRow>
)

const RentalData = (props) => {
    const rentalDate = new Date(props.rentalDate);
    const returnDate = new Date(props.returnDate);
    return (
        <TableRow>
            <TableRowColumn style={col1}>{props.rentalId}</TableRowColumn>
            <TableRowColumn style={col2}>
                {props.inventory.store &&
                    <span>{props.inventory.store.address.address} - {props.inventory.store.address.city.city} {props.inventory.store.address.city.country.country}</span>
                }
                {props.inventory.storeId}
            </TableRowColumn>
            <TableRowColumn style={col3}>{props.inventory.film.title}</TableRowColumn>
            <TableRowColumn style={col4}>{new Date(props.rentalDate).toISOString().substr(0, 10)}</TableRowColumn>
            <TableRowColumn style={col5}>{new Date(props.returnDate).toISOString().substr(0, 10)}</TableRowColumn>
            <TableRowColumn style={col6}>
                {props.customer != null &&
                    <span>{props.customer.firstName} - {props.customer.lastName}</span>
                }
            </TableRowColumn>
        </TableRow>
    );
}

RentalData.propTypes = {
    rentalId: PropTypes.number.isRequired
}

export { RentalHeader, RentalData };
