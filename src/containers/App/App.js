import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import MovieContainer from '../MovieContainer/MovieContainer'
import Header from '../../component/Header/Header'
import SignIn from '../../component/SignIn/SignIn'
import SignUp from '../../component/Signup/SignUp'
import MovieDetails from '../../component/MovieDetails/MovieDetails'
import { connect } from 'react-redux';


export class App extends Component {

  render(){
    console.log(this.props, "app props")
    // const { movies } = this.props
    // console.log(movies, "app movies")
    return(
      <div className="App">
        <Header />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/' component={MovieContainer}/>
        {/* <Route exact  path='/movie/:id' render={({ match }) => {
          const { movies } = this.props
          const { id } = match.params;
          console.log(id, "route id")
          console.log(movies, "app movies")
          
          const foundMovie = movies.find((movie) => {
            return movie.id === parseInt(id);
          })
          console.log(foundMovie, "details props")
          return <MovieDetails {...foundMovie}/>
          
        }} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(App)



// export default App
