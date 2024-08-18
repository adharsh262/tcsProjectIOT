import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Opaque from './components/Opaque'
import ProtectedRoute from './components/ProtectedRoute'
import Wifi from './components/Wifi'
import Thermostat from './components/Thermostat'
import Uv from './components/Uv'
import Lights from './components/Lights'
import AirPurifier from './components/AirPurifier'
import Temperature from './components/Temperature'
import Charts from './components/Charts'
import ModelTwo from './components/ModelTwo'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/opaque" component={Opaque} />
    <ProtectedRoute exact path="/temperature" component={Thermostat} />
    <ProtectedRoute exact path="/wifi" component={Wifi} />
    <ProtectedRoute exact path="/lights" component={Lights} />
    <ProtectedRoute exact path="/uv" component={Uv} />
    <ProtectedRoute exact path="/airpurifier" component={AirPurifier} />
    <ProtectedRoute exact path="/temp" component={Temperature} />
    <ProtectedRoute exact path="/Dashboard" component={ModelTwo} />
    <ProtectedRoute exact path="/charts" component={Charts} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
