import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [reverse, setReverse] = useState('App-logo');

  function reverseIcon() {
    const newSide = (reverse === 'App-logo') ? 'App-logo-reverse' : 'App-logo';
    setReverse(newSide);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={reverse} alt="logo" />
        <button onClick={reverseIcon}>Reverse</button>
      </header>
    </div>
  );
}

export default App;
