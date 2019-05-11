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

  // createUser = async () => {
  //   const { name, email, password} = this.state
  //   const url = 'http://localhost:3000/api/users/new'
  //   const data = { name, email, password }
  //   const options = createOption("POST", data)

  //   try {
      
  //     const result = await fetchData(url, options)
  //       if(result.status === "success") {

  //         this.props.addUser(data)
  //         this.setState({ error: "", redirect: true})
  //       } else {
  //           this.setState({error: "email already taken"})
  //       }
  //   } catch(error){
  //     console.log(error, "this is error")   
  //     } 
  // }

  
  //handle change
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button onSubmit={this.handleSubmit}>submit</button>
          {this.state.error}
         
      
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  createUser: (url,method, data) => dispatch(createUser(url,method, data))

})



export default connect(null, mapDispatchToProps)(SignUp)