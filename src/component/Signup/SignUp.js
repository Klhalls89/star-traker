import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import { Redirect, history } from 'react-router-dom';
import { createOption } from '../../utils/options'
import { connect } from 'react-redux'
import { addUser } from '../../actions/'

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
      this.makeUser()
    }
  }
 
  makeUser = async () => {
    const { name, email, password} = this.state
    const url = 'http://localhost:3000/api/users/new'
    const data = { name, email, password }
    const options = createOption("POST", data)
    try {
      const result = await fetchData(url, options)
        if(result.status === "success") {
          this.props.addUser(data)
          this.setState({ error: "", redirect: true})
        } else {
            this.setState({error: "email already taken"})
        }
    } catch(error){
      console.log(error, "this is error")   
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
          {this.state.redirect && <Redirect to="/"/>}
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user))
})



export default connect(null, mapDispatchToProps)(SignUp)