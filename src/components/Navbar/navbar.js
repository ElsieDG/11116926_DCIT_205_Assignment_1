import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './navbar.css'
import { Button } from "../Button"


//import { Button } from 'bootstrap'
//import { Link } from 'react-router-dom'
import schoolLogo from '../assets/university-of-ghana-logo-9A328D06E6-seeklogo.com.png'; // Import your school logo*/
import { Link } from 'react-router-dom';

class Navbar extends Component{
  state = { clicked: false }
  
  handleClick = () => {
     this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(
      <nav className="navbar-items">
        <h1 className="navbar-logo"> SGSS <img src={schoolLogo} alt="School Logo" className='ug-logo'/> </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
       <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'  }>
          {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
          })}
        </ul>
        
        <Button><Link to="/form">Login</Link></Button>
      </nav>
    )
  }
}

/*const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <img src={schoolLogo} alt="School Logo" className="logo" />
    </div>
    <div className="navbar-right">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);
};*/

export default Navbar;