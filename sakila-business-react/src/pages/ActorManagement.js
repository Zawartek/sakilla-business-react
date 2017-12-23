import React, { Component } from 'react'
import Manager from '../components/Manager'
import * as actorService from '../services/actorService';

import Actors from '../components/ActorManager/Actors'

const BACKGROUND_STYLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
}
    
const ACTOR_MANAGEMENT_STYLE = {
    width: 1200,
    margin: 30,
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

  renderActors = () => 
    this.state.loading === true ? 'Loading Actors ...' : <Actors actors={this.state.actors}/> 
 
  render() {
    return (
      <div style={BACKGROUND_STYLE, ACTOR_MANAGEMENT_STYLE}>
        <Manager renderDatas={this.renderActors}/>
      </div>
    )
  }
}

export default ActorManagement;
