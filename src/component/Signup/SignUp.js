import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import { Redirect, history } from 'react-router-dom';
import { createOption } from '../../utils/options'
import { connect } from 'react-redux'
import { addUser } from '../../actions/'
import { createUser } from '../../thunks/createUser'

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      redirect: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.email === "" || this.state.password === "" || this.state.name === "" ){
      alert("fill out all necessary input")
    } else {
    const { name, email, password} = this.state
    const url = 'http://localhost:3000/api/users/new'
    const data = { name, email, password }
    const method = 'POST'
    this.props.createUser(url,method,data)
    }
  }

  
  //handle change
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div className="form-bg">
        <form className="sign" onSubmit={this.handleSubmit}>
          <i class="fas fa-rocket"></i>
          <h4>Please enter your Name, Email & Password</h4>
          <p>Have an accout? Go to the sign-in button</p>
          <input type="text" 
                placeholder="Name" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange}/>

          <input type="email" 
                placeholder="Email" name="email" 
                value={this.state.email} 
                onChange={this.handleChange}/>

          <input type="password" 
                placeholder="Password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange}/>
          <button onSubmit={this.handleSubmit}>Let's go!</button>
          {this.state.error}
        </form>
        {this.props.redirect && <Redirect to="/"/>} 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  redirect: state.redirect
})

const mapDispatchToProps = (dispatch) => ({
  createUser: (url,method, data) => dispatch(createUser(url,method, data))

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)