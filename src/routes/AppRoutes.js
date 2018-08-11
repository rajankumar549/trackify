import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Auth from "../components/Auth";
import Error404 from '../components/Global/Eroro404'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const AppRoute = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={AboutPage}/>
      <Route exact path='/test2' component={AboutPage}/>
      <Route exact path='/auth' component={Auth} exact={true}/>
      <Route component={ Error404 } />
    </Switch>
  </main>
)

export default AppRoute