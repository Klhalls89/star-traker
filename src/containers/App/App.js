import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import './App.css';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/index'
// import { mapStateToProps, mapDispatchToProps } from 'react-redux';
const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  componentDidMount = async () => {
    console.log(this.props, "props")
      console.log('howdy')
      console.log(API_KEY, "api key")
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=878';
      const movieData = await fetchData(url);
      console.log(movieData.results, "results")
      this.props.addMovies(movieData.results)
      
  }
  render(){
    return(
      <div></div>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(getMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
