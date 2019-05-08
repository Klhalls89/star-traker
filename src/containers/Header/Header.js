import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/index';
import { fetchData } from '../../utils/Api'
// import { mapStateToProps, mapDispatchToProps } from '../App/App';

class Header extends Component {
  constructor(){
    super()
    this.state={
      name: "",
      email:"",
      password: ""
    }
  }
  handleChange = (e) => {
    const { name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.checkUser()
     
  }
  checkUser = async () => {
    const url = 'http://localhost:3000/api/users/new'
    const text = this.state
    this.props.addUser(text)
    console.log(text, "text")
    const options = {
      method: 'POST', 
      body: JSON.stringify(text), 
      headers: {'Content-Type': 'application/json'}
    }
    const response = await fetchData(url,options)
    if(response.ok){
      this.props.addUser(text);
    }
    
  }
  render(){
    return <div>
              <form onSubmit = {this.handleSubmit}>
                <input type="text" placeholder="name" name="name" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit"/>
              </form>
          </div>
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  addUser: (text) => dispatch(addUser(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
