import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../component/Card/Card';


export class Favorites extends Component {
  constructor(){
    super()
  }
  render(){
    const { user } = this.props;
    const { favorites } = user;
    console.log(favorites, "user favs")
    const favoriteCards =  favorites.map((movie) => {
      return <Card {...movie}/>
    })
    return(
      <div>
        <h1>Favorites</h1>
        {favoriteCards}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})
export default connect(mapStateToProps)(Favorites)

