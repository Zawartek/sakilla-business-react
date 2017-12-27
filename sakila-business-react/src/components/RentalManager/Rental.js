import React, { Component } from 'react'

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

class RentalData extends Component {
    constructor() {
        super();
    }

    render () {
        const rentalDate =new Date(this.props.rentalDate);
        const returnDate =new Date(this.props.returnDate);
        return (
            <TableRow>
                <TableRowColumn style={col1}>{this.props.rentalId}</TableRowColumn>
                <TableRowColumn style={col2}>
                {this.props.inventory.store &&
                    <span>{this.props.inventory.store.address.address} - {this.props.inventory.store.address.city.city} {this.props.inventory.store.address.city.country.country}</span>
                }
               {this.props.inventory.storeId} 
                </TableRowColumn>
                <TableRowColumn style={col3}>{this.props.inventory.film.title}</TableRowColumn>
                <TableRowColumn style={col4}>
                    <DatePicker
                        key="rentalDate"
                        autoOk={false}
                        floatingLabelText=""
                        defaultDate={rentalDate}
                        disabled={true}
                    />
                </TableRowColumn>
                <TableRowColumn style={col5}>
                    <DatePicker
                            key="returnDate"
                            autoOk={false}
                            floatingLabelText=""
                            defaultDate={returnDate}
                            disabled={true}
                        />
                </TableRowColumn>
                <TableRowColumn style={col6}>
                {this.props.customer!=null &&
                    <span>{this.props.customer.firstName} - {this.props.customer.lastName}</span>
                }
                </TableRowColumn>
            </TableRow>
        );
    }
}

RentalData.propTypes = {
    rentalId: PropTypes.number.isRequired
}

export { RentalHeader, RentalData };
