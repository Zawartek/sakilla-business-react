import React, { Component } from 'react'

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

const CustomerHeader = (props) => (
    <TableRow>
        <TableHeaderColumn style={col1}>ID</TableHeaderColumn>
        <TableHeaderColumn style={col2}>Store address</TableHeaderColumn>
        <TableHeaderColumn style={col3}>Name</TableHeaderColumn>
        <TableHeaderColumn style={col4}>Email address</TableHeaderColumn>
        <TableHeaderColumn style={col5}>Address</TableHeaderColumn>
        <TableHeaderColumn style={col6}></TableHeaderColumn>
    </TableRow>
)

class CustomerData extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <TableRow>
                <TableRowColumn style={col1}>{this.props.customerId}</TableRowColumn>
                <TableRowColumn style={col2}>
                    <span>{this.props.store.address.address} - {this.props.store.address.city.city} {this.props.store.address.city.country.country}</span>
                </TableRowColumn>
                <TableRowColumn style={col3}><span>{this.props.firstName} {this.props.lastName}</span></TableRowColumn>
                <TableRowColumn style={col4}>{this.props.email}</TableRowColumn>
                <TableRowColumn style={col5}>
                    <span>{this.props.address.address} - {this.props.address.city.city} {this.props.address.city.country.country}</span>
                </TableRowColumn>
                <TableRowColumn style={col6}>
                    <RaisedButton label="Edit" labelColor="#FFFFFF" backgroundColor="#3F51B5" style={style} onClick={this.handleOnEditClick}/>
                    <RaisedButton label="Remove" labelColor="#FFFFFF" backgroundColor="#F44336" style={style} onClick={this.handleOnDeleteClick} />
                </TableRowColumn>
            </TableRow>
        );
    }

    handleOnEditClick = (e) => {
        this.props.handleEdit(this.props.customerId);
    }

    handleOnDeleteClick = (e) => {
        this.props.handleDelete(this.props.customerId);
    }
}

CustomerData.propTypes = {
    customerId: PropTypes.number.isRequired
}

export { CustomerHeader, CustomerData };
