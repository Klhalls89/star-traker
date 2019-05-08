import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import './App.css';
import {Route, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import MovieContainer from '../MovieContainer/MovieContainer'
import Header from '../../component/Header/Header'
import SignIn from '../../component/SignIn/SignIn'

class App extends Component {
  componentDidMount = async () => {
   
  }

  render(){
    return(
      <div>
        <Header />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/' component={MovieContainer} />
      </div>
    )
  }
}



export default App
