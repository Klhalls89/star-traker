import React,{ Component } from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps } from '../App/App';

export class MovieContainer extends Component  {
 

  render(){
    const displayMovies = this.props.movies.map(movie => {
      console.log(movie.name)
     return <div key={movie.id}>
       <p>{movie.title}  </p>
       <img src={movie.poster_path} alt="movie-poster"/>
       </div>
    })
    return(
      <div>{displayMovies}</div>
    )

  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)