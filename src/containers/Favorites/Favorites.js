import React, {Component} from 'react';
import { connect } from 'react-redux'
import  Card  from '../../component/Card/Card';

export class Favorites extends Component {
  constructor(){
    super()
  }

  render () {
    const favorites = this.props.user.favorites
    const displayFavs = favorites.map(favorite => {
      return <Card key={Date.now()} {...favorite} />
    })
 
    return (
      <div className="dispaly-movies">
        {displayFavs}
      </div>
    ) 
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Favorites)