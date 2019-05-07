import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import './App.css';
const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  componentDidMount = async () => {
      console.log('howdy')
      console.log(API_KEY, "api key")
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=878';
      const movieData = await fetchData(url);
      console.log(movieData.results, "data")
  }
  render(){
    return(
      <div></div>
    )
  }
}

export default App;
