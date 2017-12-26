import React from 'react';

import { RentalHeader, RentalData } from './Rental';
import PropTypes from 'prop-types';

import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';

const displayRentalData = (props) => 
    (props.rentals.slice(0,100)).map(r => 
        <RentalData 
        key={r.rentalId} {...r} 
        />
    );

const Rentals = (props) =>
    <Table>
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <RentalHeader />
        </TableHeader>
        <TableBody displayRowCheckbox={false} data={props}>
            {displayRentalData({ ...props })}
        </TableBody>
        
    </Table>

Rentals.propTypes = {
    rentals: PropTypes.array.isRequired
}

export default Rentals;