import React from 'react';

import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <a href="/MyInfo">My info</a>
        <a href="/MyPets">My pets</a>
        <a href="/FavoriteMovie">Favorite movie</a>
      </ul>
      <ul className="navbar-right">
        <a href="/LoginA">Вхід</a>
        <a href="/Register">Реєстрація</a>
      </ul>
    </nav>
  );
}

export default Navbar;
