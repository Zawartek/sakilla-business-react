import React, {Component} from 'react'

import {Card, CardHeader, CardText} from 'material-ui/Card';

import Customers from './CustomerManager/Customers'
import {CustomersForm} from './CustomerManager/CustomersForm'

import Rentals from './RentalManager/Rentals'
import {RentalsForm} from './RentalManager/RentalsForm'

import PropTypes from 'prop-types';

const CARD_HEADER_STYLE = {
    fontSize:26,
}

const CARD_STYLE = {
    padding: "16px 24px",
    margin: "1em 0em 0em 0em"
}

class Manager extends Component {
    formHeader = () => {
        let header = "";
        switch(this.props.managerType) {
            case 'customer': 
                header = "Customer Management Form";
                break;
            case 'rental' :
                header = "Rental Management Form";
                break;
            default :
                break;
        }
        return header;
    }
    listHeader = () => {
        let header = "";
        switch(this.props.managerType) {
            case 'customer': 
                header = "List of customers";
                break;
            case 'rental' :
                header = "List of rentals";
                break;
            default :
                break;
        }
        return header;
    }

    renderForm = () => {
        let form = {};
        switch(this.props.managerType) {
            case 'customer': 
                form = <CustomersForm 
                    ref='customersForm'
                    reloadDatas={this.props.reloadDatas}
                    />
                break;
            case 'rental' :
                form = <RentalsForm 
                    ref='rentalsForm'
                    reloadDatas={this.props.reloadDatas}
                    />
                break;
            default :
                break;
        }
        return form;
    }

    willDelete = () => {
        console.log("test");
        this.props.handleDelete();
    }

    renderDatas = () => {
        let datas = {}
        if (this.props.loading) {
            switch(this.props.managerType) {
                case 'customer':
                    datas = "Loading customers";
                    break;
                case 'rental' : 
                    datas = "Loading rental";
                    break;
                default :
                    datas = "";
                    break;
            }
        }
        else {
            switch(this.props.managerType) {
                case 'customer': 
                    datas = (<Customers
                        customers={this.props.datas}
                        handleEdit={this.refs['customersForm'].handleOnClickOnEdit}
                        handleDelete={this.willDelete}
                        />);
                    break;
                case 'rental' :
                    datas = (<Rentals
                        rentals={this.props.datas}
                        />);
                    break;
                default :
                    datas = "";
                    break;
            }
        }
        return datas;
        
    }
    render() {
        return <Card zDepth={3} style={this.props.managerStyle}>
            <Card zDepth={3}
                initiallyExpanded={true}
                style={CARD_STYLE}
            >
                <CardHeader
                    titleStyle = {CARD_HEADER_STYLE}
                    title={this.formHeader()}
                    showExpandableButton={true}
                    actAsExpander={true}
                />
                <CardText 
                    expandable={true}
                    style={CARD_STYLE}>
                    {this.renderForm()}
                </CardText>
            </Card> 
            <Card zDepth={3}
                style={CARD_STYLE}
            >
                <CardHeader
                    titleStyle = {CARD_HEADER_STYLE}
                    title={this.listHeader()}
                    showExpandableButton={false}
                    actAsExpander={true}
                />
                <CardText style={CARD_STYLE}>
                    {this.renderDatas()}
                </CardText>
            </Card>
        </Card>
    }
}

Manager.propTypes = {
    managerType: PropTypes.string.isRequired
}

export default Manager;