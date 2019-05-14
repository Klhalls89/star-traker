import React, { Component }from 'react';
import { addFavoriteMovie } from '../../thunks/addFavorites'
import { hasErrored } from '../../actions'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'

export class Card extends Component {
  constructor(){
    super()
    this.state={
      error: ""
    }
  }

  

  click = async() =>  {
    console.log(this.props.user, "user")
   if(typeof this.props.user.id !== 'number'){
     console.log("clicked")
    this.setState({ error: "please sign in"})
   }else {

   
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
    console.log("userId:", userId )
    addFavoriteMovie(url,method,data,userId) 
  }
    
  } 


  render (){
    console.log(this.props.error, "card error")
  const { poster_path, title, vote_average,user } = this.props;
  const imageUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  
  return (
    <div className="Card">
      <section>
      <p>{vote_average}/10</p>
      <button onClick={this.click}><i class="far fa-star"></i></button>
      </section>
      <img src={imageUrl}/>
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
  hasErrored: (message) => dispatch(hasErrored(message))
})

export default connect(mapStateToProps,mapDispatchToProps)(Card);

