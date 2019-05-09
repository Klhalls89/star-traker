import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if(this.state.email === "" ||this.state.password === "" ||this.state.name === "" ){
      alert("fill out all necessary input")
    } else {
      const data = this.state
      console.log(data)
      const url = 'http://localhost:3000/api/users/new'
      const options = {
        method: "POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }

      try{
        const response = await fetchData(url, options)
        if (!response.ok) 
        throw new Error(response.statusText);
      }catch(error){
          this.setState({
            error: "email already taken"

          })
      }
    
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

export default SignUp