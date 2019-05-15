import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, redirect } from '../../actions/';

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
          <p> {this.props.user.name ? `Hello ${this.props.user.name}` : ""}</p>
        </section>
        <nav>
          <NavLink to ="/SignIn" className="nav">Sign-In</NavLink>
          <NavLink to ="/SignUp" className="nav">Sign-Up</NavLink>
          <button className="out"onClick={this.signOutUser}>Sign-Out</button>
          <button className="favorites">Favorites</button>
        </nav>
      </header>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  signOut: (data) => dispatch(signOut(data)),
  redirect: (bool) => dispatch(redirect(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)