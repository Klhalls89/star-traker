import React from 'react';
import {Route, NavLink} from 'react-router-dom'



const Header = () => {
  return(
    <div>
      <header>
       <NavLink to ="/SignIn" className="nav">Sign-In</NavLink>
       <NavLink to ="/SignOut" className="nav">Sign-Out</NavLink>
       <NavLink to ="/SignUp" className="nav">Sign-up</NavLink>
      </header>
    </div>

  )
}

export default Header