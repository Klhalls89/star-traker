import React, { Component } from 'react';
import { fetchData } from '../../utils/Api';
import { createOption } from '../../utils/options';
import { connect } from 'react-redux';
import { addUser } from '../../actions';
import { Redirect } from 'react-router-dom';

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

    try {
      const response = await fetchData(url,options)
      if(response.status === "success"){
        this.props.addUser(data)
        this.setState({ redirect: true})
      }
    }catch(error){
      this.setState({
        error: "Please sign up"
      })
    }
    

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
        { this.state.redirect && <Redirect to="/"/>}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(addUser(data))
})

export default connect(null,mapDispatchToProps)(SignIn)