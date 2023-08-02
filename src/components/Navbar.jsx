import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';
export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div id='Navbar' className={isNavOpen ? 'active' : ''}>
      <img className="logo" src={logo} alt="" />
      <div href=""  className={`toggle-button ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      
        <ul className={`${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
          <NavLink to='/'><li className={`${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>Home</li></NavLink>
          <NavLink to='/packages'><li className={`${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>Packages</li></NavLink>
          <NavLink to='/aboutus'><li className={`${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>About us</li></NavLink>
          <NavLink to='/contactme'><li className={`${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>Contact Me</li></NavLink>
        </ul>
   
      <button className='Schedule-a-call'>Schedule a call</button>
    </div>
  )
}
