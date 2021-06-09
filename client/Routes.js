import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Main from './components/Main';

/**
 * COMPONENT
 */
export default class Routes extends Component {


  render() {

    return (
      <div>
          <Switch>
            <Route path="/home" component={Main} />
            <Redirect to="/home" />
          </Switch>
      
      </div>
    )
  }
}
