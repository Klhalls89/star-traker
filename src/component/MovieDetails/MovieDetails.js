import React, { Component } from "react";
import { connect } from "react-redux";
import { Route,  Redirect } from "react-router-dom";
import './MovieDetails.scss';

 class MovieDetails extends Component {
    constructor(){
        super()
        this.state={
            redirect: false
        }
    }
    toggle = () => {
        this.setState({
            redirect: !this.state.redirect
        })
    }
    render(){
      console.log(this.props, "details props")
        const { title,overview, vote_average, poster_path } = this.props
        console.log(title, "details title")
        if (this.state.redirect) return <Redirect to={'/'} />
        // const poster = this.props.poster_path
        const path = `https://image.tmdb.org/t/p/w185/${poster_path}`
        return (
            <div className="movie-details-box">
            <h1>Movie Deatils osososo</h1>
              {/* <h1>Movie details</h1>
                 <button onClick={this.toggle}>go back</button>
                
                  <img src={path}></img>
                    <div className="text-area">
                      <h3>{title}</h3>
                      <p>{overview}</p>
                      <p>Rating: {this.props.vote_average} /10</p>
                    </div>  */}
               
            </div>
        )
    }
}

export default MovieDetails

// export const mapStateToProps = (state) => ({
//     nowPlaying: state.nowPlayingMovies,
//     topRatedMovies: state.topRatedMovies,
//     popularMovies: state.popularMovies
// })

// export default connect(mapStateToProps)(Moviedetails)