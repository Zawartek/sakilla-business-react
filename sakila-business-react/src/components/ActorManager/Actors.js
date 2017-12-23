import React from 'react';

import {ActorHeader, ActorData} from './Actor';
import PropTypes from 'prop-types';


import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';


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

export default Actors;