import React from 'react';
import './style.css';

export default function Banner({ title, banner }) {
  return (
    <div style={{
      backgroundImage: `url(${banner})`
    }} className='img-banner' >
      <h1>{title}</h1>
    </div >
  );
}