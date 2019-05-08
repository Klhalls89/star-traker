import React, { Component } from 'react'
import { fetchData } from "../../utils/Api"
import { connect } from 'react-redux'
import { getMovies } from "../../actions"

const API_KEY = `${process.env.REACT_APP_API_KEY}`


class MovieContainer extends Component {

  componentDidMount = async () => {
   try {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=878';
        const movieData = await fetchData(url);
        console.log(this.props.getMovies)
      this.props.getMovies(movieData.results)
        // console.log(movieData.results, "data")
      } catch(error) {
        throw new Error(error.message)
      }
    }

    render(){
      return(
        <div>
         MovieContainer
        </div>
      )
    }


}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  getMovies : (movies) => dispatch(getMovies(movies))
})

  

export default connect(mapStateToProps , mapDispatchToProps)(MovieContainer)
