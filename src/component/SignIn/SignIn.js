import React, { Component } from 'react';

class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      
      email: '',
      password: ''
    }
  }

  render(){
    return(
      <div>
        <form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn