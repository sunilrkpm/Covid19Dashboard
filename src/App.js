import {Switch, Redirect, Route} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import About from './components/About'
import StateSpecificDetails from './components/StateSpecificDetails'
import Vaccination from './components/Vaccination'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/state/:stateCode" component={StateSpecificDetails} />
    <Route exact path="/about" component={About} />
    <Route exact path="/vaccination" component={Vaccination} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
