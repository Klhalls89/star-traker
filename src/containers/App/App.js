import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import './App.css';
import { connect } from 'react-redux'
import MovieContainer from '../MovieContainer/MovieContainer'

class App extends Component {
  componentDidMount = async () => {
   
  }

  render(){
    return(
      <div>
        <MovieContainer />
      </div>
    )
  }
}



export default App
