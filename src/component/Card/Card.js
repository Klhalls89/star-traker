import React, { Component }from 'react';
import { addFavoriteMovie } from '../../thunks/addFavorites'
import { hasErrored } from '../../actions'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { fetchData } from '../../utils/Api'
import { createOption } from '../../utils/options'
import { addFavorites } from '../../actions'

export class Card extends Component {
  constructor(){
    super()
    this.state={
      error: ""
    }
  }

  //when user clicks check if user is signed in  
  // function validate 
  // if not signed in display error 
  // if signed in validate if movie is in state tree 
  // if movie is in state remove that movie 
  // if not add to movie 

  checkForUser = () => {
    if(typeof this.props.user.id !== 'number'){
      this.setState({ error: "please sign in"})
     } else {
      this.validateMovie()
     }
  }

  validateMovie = () => {
    const { id } = this.props 
    const { favorites } = this.props.user
    const foundMovie = favorites.find((movie) => {
      return movie.movie_id === id
    })
    console.log(foundMovie)
   foundMovie ? this.deleteFavorite(id,favorites) : this.addMovie() 
  }

  deleteFavorite = async (id,favorites) => {
    console.log(id)
    const user_id = this.props.user.id
    console.log(user_id, "delete user id")
    const url = `http://localhost:3000/api/users/${user_id}/favorites/${id}`
    const options = createOption("DELETE")
    const response = await fetchData(url, options)
    if(response.status === "success"){
      const filteredMovies = favorites.filter((movie) => {
        return id !== movie.movie_id
      })

      console.log(filteredMovies, "filtered from delete")
      this.props.addFavorites(filteredMovies)
    }
  }
  
  addMovie = async() =>  {
  
    const { addFavoriteMovie } = this.props
    const method = "POST"
    const url ="http://localhost:3000/api/users/favorites/new"
    const { id,title,poster_path,release_date,vote_average, overview, user } = this.props
    const data = {
      movie_id: id,
      user_id: user.id ? user.id : null,
      title: title,
      poster_path: poster_path,
      release_date: release_date,
      vote_average: vote_average,
      overview: overview
    }
    const userId = data.user_id
    addFavoriteMovie(url,method,data,userId) 
  
  } 


  render (){
  const { poster_path, title, vote_average,user,id } = this.props;
  const imageUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  console.log(id, "chejekekek")
  
  return (
    <div className="Card">
      <section>
      <p>{vote_average}/10</p>
      <button onClick={this.checkForUser}><i class="far fa-star"></i></button>
      </section>
      <Link to={`/movie/${id}`}>
      <img src={imageUrl}/>
      </Link>
      {this.state.error && this.state.error}
    </div>
  )
}}

export const mapStateToProps = (state) => ({
  user: state.user,
  movies: state.movies,
  error: state.hasErrored
})

export const mapDispatchToProps = (dispatch) => ({
  addFavoriteMovie:(url,method,data) => dispatch(addFavoriteMovie(url,method,data)),
  hasErrored: (message) => dispatch(hasErrored(message)),
  addFavorites: (movies) => dispatch(addFavorites(movies))
})

export default connect(mapStateToProps,mapDispatchToProps)(Card);

