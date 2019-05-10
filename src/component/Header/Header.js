import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/'



class Header extends Component {

 signOutUser = () => {
  this.props.signOut({})
 }

render () {
  return (
    <div>
      <header>
       <NavLink to ="/SignIn" className="nav">Sign-In</NavLink>
       <NavLink to ="/SignOut" className="nav" onClick={this.signOutUser}>Sign-Out</NavLink>
       <NavLink to ="/SignUp" className="nav">Sign-up</NavLink>
      </header>
    </div>
  ) 
}
 
}

const mapDispatchToProps = (dispatch) => ({
  signOut: (data) => dispatch(signOut(data))
})

export default connect(null, mapDispatchToProps) (Header)