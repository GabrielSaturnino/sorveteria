import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Rotas from './componentes/Rotas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rotas />
      </header>
    </div>
  );
}

export default App;
