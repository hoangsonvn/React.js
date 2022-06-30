import React from "react";
import './/Nav.scss';
import { Link, NavLink } from 'react-router-dom';
class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
               <NavLink to="/" activeClassName="active">home</NavLink>
  <Link  to="/">Home</Link>
  <Link to={{pathname:"todolist"}}>ok</Link>
  <Link  to="/todolist">TodoList</Link>
  <a href="/todolist">toddlist</a>
</div>
        )
    }
}
export default Nav;