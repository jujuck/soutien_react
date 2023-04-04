import React from 'react';
import './NavButton.css';

const NavButton = () => {
  return (
    <button
      className="headerButton"
      onClick={() => alert('Bienvenue à vous')}
    >
      Bouton
    </button>
  )
}

export default NavButton