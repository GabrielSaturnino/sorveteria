import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import './style.css';

const AppBar = () => (
  <>
    <header>
      <img src="./assets/logo.png" alt="Logo da Sorveteria" />
      <nav>
        <Link className='links' to='/'>Home</Link>
        <Link className='links' to='/sabores'>Sabores</Link>
        <Link className='links' to='/sobre'>Sobre</Link>
      </nav>
    </header>

    <Banner />
  </>
);

export default AppBar;