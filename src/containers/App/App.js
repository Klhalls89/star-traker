import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import {Route, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import MovieContainer from '../MovieContainer/MovieContainer'
import Header from '../../component/Header/Header'
import SignIn from '../../component/SignIn/SignIn'
import SignUp from '../../component/Signup/SignUp'
import Favorites from '../../containers/Favorites/Favorites'

export class App extends Component {

  render(){
    return(
      <div className="App">
        <Header />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/' component={MovieContainer}/>
        <Route exact path='/Favorites' component={Favorites}/>
      </div>
    )
  }
}

export default App
