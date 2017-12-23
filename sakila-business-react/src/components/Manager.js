import React from 'react'

import {Card, CardText} from 'material-ui/Card';

const CARD_STYLE = {
    padding: "16px 24px",
}

const Manager = (props) => 
    <Card zDepth={3}>
        <CardText style={CARD_STYLE}>
            {props.renderDatas()}
        </CardText>
    </Card> 

export default Manager;