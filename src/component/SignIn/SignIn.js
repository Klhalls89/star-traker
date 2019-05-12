import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import { createOption } from '../../utils/options';
import { connect } from 'react-redux';
import { addUser, isLoading, hasErrored } from '../../actions';
import { Redirect } from 'react-router-dom';
import { signInUser } from '../../thunks/signInUser';

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
    const options = createOption("POST", data)
    const method = "POST"
    this.props.signInUser(url, method, data)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
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
          
          <button>submit</button>
        </form>
        
        { this.props.redirect && <Redirect to="/"/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  redirect: state.redirect
})

const mapDispatchToProps = (dispatch) => ({
  signInUser: (data) => dispatch(signInUser(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)