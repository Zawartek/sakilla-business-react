import React, { Component } from 'react'
import Manager from '../components/Manager'
import * as actorService from '../services/actorService';

import {Actors, ActorForm} from '../components/ActorManager/Actors'

const BACKGROUND_STYLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
}
    
const ACTOR_MANAGEMENT_STYLE = {
    width: 1300,
    margin: 30,
    backgroundColor: '#E0E0E0',
}

class ActorManagement extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            error: false,
            actors : []
        };
    }

  componentDidMount() {
    this.requestAllActors();
  }

  requestAllActors() {
    this.setState({ loading: true, error: false });
    actorService.getAllActors()
      .then(res => {
        this.setState({ actors: res.data, error: false, loading: false });
        return res.data;
      }).catch(e => this.setState({ error: true, loading: false }));
  }

  renderActorForm = () => 
  <ActorForm /> 

  renderActors = () => 
    this.state.loading === true ? 'Loading Actors ...' : <Actors actors={this.state.actors}/> 
 
  render() {
    return (
      <div style={BACKGROUND_STYLE}>
        <Manager 
          formHeader="Actor Management Form"
          listHeader="List of actors"
          managerStyle={ACTOR_MANAGEMENT_STYLE} 
          renderForm={this.renderActorForm} 
          renderDatas={this.renderActors}
        />
      </div>
    )
  }
}

export default ActorManagement;
