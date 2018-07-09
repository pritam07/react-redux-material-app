import React, { Component }from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import ProfileDetail from './ProfileDetail';


class Main extends Component {

    render() {
        return (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/profiles' component={Profile}/>
      <Route path='/profile-details/:id' component={ProfileDetail}/>
    </Switch>
  </main>
        )
    }
}
export default Main
