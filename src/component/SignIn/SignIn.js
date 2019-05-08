import React, { Component } from 'react';

class SignIn extends Component {
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
          <input type="text" placeholder="User Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn