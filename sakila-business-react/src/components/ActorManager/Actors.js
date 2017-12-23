import React from 'react';

import {ActorHeader, ActorData} from './Actor';
import PropTypes from 'prop-types';


import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';
import TextField from 'material-ui/TextField/TextField';

const ActorForm = (props) => (
    <form>
        <span>Name : </span>
            <TextField
                name="firstName"
                type="text"
                hintText="Enter your first name"
                className="textfield-class"
            /> 
            <TextField
                name="lasttName"
                type="text"
                hintText="Enter your last name"
                className="textfield-class"
            />
    </form>
)

const displayActorData = (props) => props.actors.map(a => <ActorData key={a.actorId} {...a}/>);

const Actors = (props) => 
    <Table>
        <TableHeader 
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <ActorHeader/>
        </TableHeader>
        <TableBody displayRowCheckbox={false} data={props}>
            {displayActorData({...props})}
        </TableBody>
    </Table>

Actors.propTypes = {
    actors: PropTypes.array.isRequired
}

export {Actors, ActorForm};