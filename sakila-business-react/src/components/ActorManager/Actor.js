import React from 'react'

import PropTypes from 'prop-types';

import {
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const ActorHeader = (props) => (
    <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
    </TableRow>
)

const ActorData = (props) => (
    <TableRow>
        <TableRowColumn>{props.actorId}</TableRowColumn>
        <TableRowColumn><span>{props.firstName} {props.lastName}</span></TableRowColumn>
    </TableRow>
)

ActorData.propTypes = {
    actorId: PropTypes.number.isRequired
}

export {ActorHeader, ActorData};
