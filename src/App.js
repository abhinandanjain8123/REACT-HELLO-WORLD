import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/welcome';
import Hello from './component/Hello'
import Message from './component/Message';
import Counter from './component/Counter'
function App() {
  return (
    <div className="App">
      <Message />
      <Counter />
    </div>
  );
}

export default App;
