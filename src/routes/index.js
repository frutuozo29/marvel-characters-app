import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Characters from '../components/Characters'
import CharacterForm from '../components/CharacterForm'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/characters/:id' component={CharacterForm} />
        <Route exact path='*' component={Characters} />
      </Switch>
    )
  }
}