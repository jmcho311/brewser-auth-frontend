import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import Home from '../pages/Home'
import SearchForm from '../pages/SearchForm'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import BreweryShow from '../pages/BreweryShow'
import BreweryList from '../pages/BreweryList'
import BeerList from '../pages/BeerList'
import BeerShow from '../pages/BeerShow'
import Logout from '../pages/Logout'
import Reset from '../pages/Reset'


const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ SearchForm } />
    {/* <Route path='/search' component={ SearchForm } /> */}
    <Route path='/about' component={ About } />
    <Route path='/brewery/:id' component={ BreweryShow } />
    <Route path='/register' component={ Register } />
    <Route path='/brewerylist' component={ BreweryList } />
    <Route path='/beerlist' component={ BeerList } />
    <Route path='/beer/:name' component={ BeerShow } />
    <Route path='/logout' component={ Logout } />
    <Route path='/reset' component={ Reset } />
    <Route path='/login' render={ (routeComponentProps) => {
      return  <Login 
                {...routeComponentProps}
                // more props to come here
                currentUser={ props.currentUser }
                storeUser={ props.storeUser }
              />
    } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } />
  </Switch>
)

export default Routes;