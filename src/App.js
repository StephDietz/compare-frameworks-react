import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count+1);
  };
  return (
    <div id="app">
    <div class="container">
    <img src="logo.png" alt=""/>
    <h1>Comparing JS Frameworks: This one is React</h1>
    <div class="count">{ count }</div>
    <button onClick={handleClick}>Increment</button>
    </div>
    </div>
  );
}

export default App;
