import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import { createOption } from '../../utils/options';
import { connect } from 'react-redux';
import { addUser, isLoading, hasErrored } from '../../actions';
import { Redirect } from 'react-router-dom';
import { signInUser } from '../../thunks/signInUser';
import { fetchUserFavorites } from '../../utils/fetchUserFavorites'

class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      error: "",
      redirect: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const data = { email, password}

    const url ="http://localhost:3000/api/users"
    const method = "POST"
    this.props.signInUser(url, method, data)
    
  }

  render(){
    return(
      <div className="form-bg">
        <form className="sign" onSubmit={this.handleSubmit}>
          <i class="fas fa-rocket"></i>
          <h4>Please enter your Email & Password</h4>
          <p>or go to the sign-up button</p>
          <input type="email" 
                 placeholder="Email" 
                 name="email" 
                 value={this.state.email} 
                 onChange={this.handleChange}/>
          
          <input type="password" 
                 placeholder="Password" 
                 name="password" 
                 value={this.state.password}
                 onChange={this.handleChange} />
          
          <button>Let's go!</button>
        </form>
        { this.props.redirect && <Redirect to="/"/>}
       {this.props.hasErrored && this.props.hasErrored}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  hasErrored: state.hasErrored
})

const mapDispatchToProps = (dispatch) => ({
  signInUser: (url, method, data) => dispatch(signInUser(url, method, data))

})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)