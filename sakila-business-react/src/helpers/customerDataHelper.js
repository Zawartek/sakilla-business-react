import React from 'react';

import RaisedButton from "material-ui/RaisedButton";
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import SelectField from "material-ui/SelectField";
import MenuItem from 'material-ui/MenuItem';

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

const customerDataHelper = {

  displayCustomerRow: (props) => (
    props.customers.map( (customer) => (

        <TableRow key={customer.customerId}>
        <TableRowColumn style={col1}>{customer.customerId}</TableRowColumn>
        <TableRowColumn style={col2}>
            <span>{customer.store.address.address} - {customer.store.address.city.city} {customer.store.address.city.country.country}</span>
        </TableRowColumn>
        <TableRowColumn style={col3}><span>{customer.firstName} {customer.lastName}</span></TableRowColumn>
        <TableRowColumn style={col4}>{customer.email}</TableRowColumn>
        <TableRowColumn style={col5}>
            <span>{customer.address.address} - {customer.address.city.city} {customer.address.city.country.country}</span>
        </TableRowColumn>
        <TableRowColumn style={col6}>
            <RaisedButton id={customer.customerId} label="Edit" labelColor="#FFFFFF" backgroundColor="#3F51B5" style={style} onClick={() => props.handleEdit(customer.customerId)}/>
            <RaisedButton label="Remove" labelColor="#FFFFFF" backgroundColor="#F44336" style={style} onClick={() => props.handleDelete(customer.customerId)} />
        </TableRowColumn>
    </TableRow>
    ))
  )
}

export default customerDataHelper;