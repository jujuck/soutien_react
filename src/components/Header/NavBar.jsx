import React from 'react';
import './NavBar.css'
import NavButton from './NavButton';

const NavBar = () => {
  return (
    <header className="header">
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" className="headerIMG" />
      <div>
        <NavButton />
        <NavButton />
        <NavButton />
      </div>
    </header>
  )
}

export default NavBar