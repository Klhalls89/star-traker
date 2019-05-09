import React, { Component } from 'react';
import { fetchData } from '../../utils/Api'

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  //make sure all of the feilds have been filled out before allowing the submit
  // /api/users/new
  handleSubmit = async (e) => {
    e.preventDefault()

    const data = this.state
    console.log(data)
    const url = 'http://localhost:3000/api/users/new'
    const options = {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }


      const response = await fetchData(url, options)
      console.log(response)

    
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
        </form>
      </div>
    )
  }
}

export default SignUp