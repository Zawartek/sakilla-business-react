import React from 'react'

import {Card, CardHeader, CardText} from 'material-ui/Card';

const CARD_HEADER_STYLE = {
    fontSize:26,
}

const CARD_STYLE = {
    padding: "16px 24px",
    margin: "1em 0em 0em 0em"
}


const Manager = (props) => 
    <Card zDepth={3} style={props.managerStyle}>
        <Card zDepth={3}
            initiallyExpanded={true}
            style={CARD_STYLE}
        >
            <CardHeader
                titleStyle = {CARD_HEADER_STYLE}
                title={props.formHeader}
                showExpandableButton={true}
                actAsExpander={true}
            />
            <CardText 
                expandable={true}
                style={CARD_STYLE}>
                {props.renderForm}
            </CardText>
        </Card> 
        <Card zDepth={3}
            style={CARD_STYLE}
        >
            <CardHeader
                titleStyle = {CARD_HEADER_STYLE}
                title={props.listHeader}
                showExpandableButton={false}
                actAsExpander={true}
            />
            <CardText style={CARD_STYLE}>
                {props.renderDatas()}
            </CardText>
        </Card>
    </Card> 

export default Manager;