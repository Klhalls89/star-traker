import React, { Component } from 'react';

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default SignUp