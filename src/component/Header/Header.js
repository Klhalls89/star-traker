import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/'



 export class Header extends Component {

 signOutUser = () => {
  this.props.signOut({})
 }

render () {
  return (
    <header>
      <section>
        <h1>Star Traker</h1>
        <i class="fas fa-rocket"></i>
      </section>
      <nav>
        <NavLink to ="/SignIn" className="nav">Sign-In</NavLink>
        <NavLink to ="/SignOut" className="nav" onClick={this.signOutUser}>Sign-Out</NavLink>
        <NavLink to ="/SignUp" className="nav">Sign-up</NavLink>
        <button className="favorites">Favorites<span className="fav-num">0</span></button>
      </nav>
    </header>
  ) 
}
 
}

const mapDispatchToProps = (dispatch) => ({
  signOut: (data) => dispatch(signOut(data))
})

export default connect(null, mapDispatchToProps)(Header)