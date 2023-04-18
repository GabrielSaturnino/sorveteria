import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const AppBar = () => (
  <header>
    <nav>
      <Link className='links' to='/'>Home</Link>
      <Link className='links' to='/sabores'>Sabores</Link>
      <Link className='links' to='/sobre'>Sobre</Link>
    </nav>
  </header>
);

export default AppBar;