import React, { Component } from 'react'
import { fetchData } from "../../utils/Api"
import { connect } from 'react-redux'
import { getMovies } from "../../actions"
import Card from '../../component/Card/Card'

const API_KEY = `${process.env.REACT_APP_API_KEY}`


class MovieContainer extends Component {
  componentDidMount = async () => {
   try {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=878';
        const movieData = await fetchData(url);
        this.props.getMovies(movieData.results)
      } catch(error) {
        throw new Error(error.message)
      }
    }

    render(){
      const { movies } = this.props;
      const displayMovies = movies.map((movie) => {
        return <Card {...movie}/>
      })
      return(
        <div>
         { displayMovies}
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
