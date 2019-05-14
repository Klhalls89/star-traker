import React, { Component } from 'react'
import { fetchData } from "../../utils/Api"
import { connect } from 'react-redux'
import { getMovies } from "../../actions"
import { redirect } from '../../actions/index'
import  Card  from '../../component/Card/Card'

const API_KEY = `${process.env.REACT_APP_API_KEY}`


class MovieContainer extends Component {
  componentDidMount = async () => {
    try {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=878';
      const movieData = await fetchData(url);
      console.log(this.props.getMovies)
      this.props.getMovies(movieData.results)
    } catch(error) {
      throw new Error(error.message)
    }
    this.props.redirect(false)

  }
  
  render(){
    console.log(this.props)
      const { movies } = this.props;
      const displayMovies = movies.map((movie) => {
        return <Card key={movie.id} {...movie}/>
      })
      return(
        <div className="dispaly-movies">
         {displayMovies}
        </div>
      )
    }


}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  getMovies : (movies) => dispatch(getMovies(movies)),
  redirect: (bool) => dispatch(redirect(bool))
})

  

export default connect(mapStateToProps , mapDispatchToProps)(MovieContainer)
