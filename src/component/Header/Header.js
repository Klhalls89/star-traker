import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, redirect } from '../../actions/'

export class Header extends Component {
  constructor(){
    super()
  }

 signOutUser = () => {
  this.props.signOut({})
 }

render () {
  return (
    <div>
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

    </div>
  ) 
}
 
}

const mapStateToProps = (state) => ({
  redirect: state.redirect
})

const mapDispatchToProps = (dispatch) => ({
  signOut: (data) => dispatch(signOut(data)),
  redirect: (bool) => dispatch(redirect(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)